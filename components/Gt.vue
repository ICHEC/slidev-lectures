<template>
  <span 
    class="bg-clip-text text-transparent bg-gradient-to-r font-bold transition-all duration-500"
    :class="[gradientClasses]"
  >
    <slot />
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  from: { default: 'blue' },
  to: { default: 'red' },
  via: { default: '' } // Optional middle color
})

const gradientClasses = computed(() => {
  // Mapping our names to specific Tailwind/UnoCSS shades
  const colors = {
    blue: 'from-blue-600 dark:from-blue-400',
    red: 'to-red-600 dark:to-red-400',
    yellow: 'to-yellow-500 dark:to-yellow-300',
    green: 'to-green-600 dark:to-green-400',
    pink: 'to-pink-500 dark:to-pink-300',
    purple: 'to-purple-600 dark:to-purple-400'
  }

  // Handle the 'via' color if provided
  const viaClass = props.via ? `via-${props.via}-500 dark:via-${props.via}-400` : ''
  
  // We extract the 'from' color and the 'to' color based on props
  const fromPart = colors[props.from]?.replace('to-', 'from-') || 'from-blue-600'
  const toPart = colors[props.to] || 'to-red-600'

  return `${fromPart} ${viaClass} ${toPart}`
})
</script>