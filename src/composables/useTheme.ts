// src/composables/useTheme.ts

import { ref, computed, watch, onMounted, readonly } from 'vue';

/**
 * Theme Management Composable for iChiversa UI
 * Provides theme switching and persistence functionality
 */

export type Theme = 'light' | 'dark' | 'system';

// Global theme state
const currentTheme = ref<Theme>('system');
const isDark = ref(false);

// Storage key for theme persistence
const THEME_STORAGE_KEY = 'ichiversa-ui-theme';

/**
 * Get the effective theme (resolves 'system' to actual preference)
 */
const getEffectiveTheme = (): 'light' | 'dark' => {
  if (currentTheme.value === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return currentTheme.value;
};

/**
 * Apply theme to the document
 */
const applyTheme = (theme: 'light' | 'dark') => {
  const root = document.documentElement;
  
  // Remove existing theme classes
  root.classList.remove('dark', 'light');
  root.removeAttribute('data-theme');
  
  // Apply new theme
  root.classList.add(theme);
  root.setAttribute('data-theme', theme);
  
  // Update dark state
  isDark.value = theme === 'dark';
  
  // Update meta theme-color for mobile browsers
  updateMetaThemeColor(theme);
};

/**
 * Update meta theme-color for mobile browsers
 */
const updateMetaThemeColor = (theme: 'light' | 'dark') => {
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  const color = theme === 'dark' ? '#030712' : '#ffffff';
  
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', color);
  } else {
    const meta = document.createElement('meta');
    meta.name = 'theme-color';
    meta.content = color;
    document.head.appendChild(meta);
  }
};

/**
 * Save theme preference to localStorage
 */
const saveThemePreference = (theme: Theme) => {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    console.warn('Failed to save theme preference:', error);
  }
};

/**
 * Load theme preference from localStorage
 */
const loadThemePreference = (): Theme => {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved && ['light', 'dark', 'system'].includes(saved)) {
      return saved as Theme;
    }
  } catch (error) {
    console.warn('Failed to load theme preference:', error);
  }
  return 'system';
};

/**
 * Listen for system theme changes
 */
const setupSystemThemeListener = () => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  const handleChange = () => {
    if (currentTheme.value === 'system') {
      applyTheme(getEffectiveTheme());
    }
  };
  
  mediaQuery.addEventListener('change', handleChange);
  
  // Return cleanup function
  return () => mediaQuery.removeEventListener('change', handleChange);
};

/**
 * Main theme composable
 */
export function useTheme() {
  // Initialize theme on first use
  onMounted(() => {
    // Load saved preference
    const savedTheme = loadThemePreference();
    currentTheme.value = savedTheme;
    
    // Apply initial theme
    applyTheme(getEffectiveTheme());
    
    // Setup system theme listener
    setupSystemThemeListener();
  });

  // Watch for theme changes
  watch(currentTheme, (newTheme) => {
    applyTheme(getEffectiveTheme());
    saveThemePreference(newTheme);
  });

  /**
   * Set the theme
   */
  const setTheme = (theme: Theme) => {
    currentTheme.value = theme;
  };

  /**
   * Toggle between light and dark themes
   */
  const toggleTheme = () => {
    if (currentTheme.value === 'system') {
      // If system, switch to opposite of current effective theme
      const effective = getEffectiveTheme();
      setTheme(effective === 'dark' ? 'light' : 'dark');
    } else {
      // Toggle between light and dark
      setTheme(currentTheme.value === 'dark' ? 'light' : 'dark');
    }
  };

  /**
   * Reset to system theme
   */
  const resetToSystem = () => {
    setTheme('system');
  };

  // Computed properties
  const theme = computed(() => currentTheme.value);
  const effectiveTheme = computed(() => getEffectiveTheme());
  const isSystemTheme = computed(() => currentTheme.value === 'system');

  return {
    // State
    theme: readonly(theme),
    effectiveTheme: readonly(effectiveTheme),
    isDark: readonly(isDark),
    isSystemTheme: readonly(isSystemTheme),
    
    // Actions
    setTheme,
    toggleTheme,
    resetToSystem,
  };
}

/**
 * Theme provider for manual initialization (useful for SSR)
 */
export function initializeTheme() {
  const savedTheme = loadThemePreference();
  currentTheme.value = savedTheme;
  applyTheme(getEffectiveTheme());
  return setupSystemThemeListener();
}

/**
 * Get current theme without reactivity (useful for server-side)
 */
export function getCurrentTheme(): Theme {
  return currentTheme.value;
}

/**
 * Theme utilities
 */
export const themeUtils = {
  /**
   * Check if dark mode is preferred
   */
  prefersColorSchemeDark: () => 
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  
  /**
   * Get CSS variable value
   */
  getCSSVar: (varName: string) => 
    getComputedStyle(document.documentElement).getPropertyValue(varName).trim(),
  
  /**
   * Set CSS variable value
   */
  setCSSVar: (varName: string, value: string) => 
    document.documentElement.style.setProperty(varName, value),
  
  /**
   * Get all available themes
   */
  getAvailableThemes: (): Theme[] => ['light', 'dark', 'system'],
};
