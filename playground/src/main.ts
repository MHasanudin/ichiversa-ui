import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Initialize theme system
import { initializeTheme } from '../../src/composables/useTheme'
initializeTheme()

createApp(App).mount('#app')
