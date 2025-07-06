<template>
  <div :class="rootClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineProps<{ variant?: string }>()

const rootClass = computed(() => [
  'icon-tesicon-root',
  // Example Tailwind: "p-2 rounded"
])
</script>
