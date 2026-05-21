<template>
  <div class="my-4 shadow-xl rounded-lg overflow-hidden border border-blue-200 bg-blue-50 dark:bg-blue-900/10 text-blue-900 dark:text-blue-100">
    <div v-if="title" class="px-4 py-2 bg-blue-600 text-white font-bold flex items-center gap-2 title-flash">
      <div v-if="icon" :class="icon" />
      {{ title }}
    </div>

    <div class="p-6 text-2xl font-serif relative">
      <div ref="sourceText" class="hidden"><slot /></div>
      
      <span>{{ displayedText }}</span>
      <span 
        v-if="isTyping && cursor !== 'false'" 
        class="inline-block w-1.5 h-8 bg-blue-500 ml-1 animate-blink align-middle"
      >|</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  title: String,
  icon: String,
  speed: { default: 40 },
  cursor: { default: 'false' } // New prop
})

const sourceText = ref(null)
const displayedText = ref('')
const isTyping = ref(true)

onMounted(() => {
  const fullText = sourceText.value.textContent.trim()
  let charIndex = 0

  const type = () => {
    if (charIndex < fullText.length) {
      displayedText.value += fullText.charAt(charIndex)
      charIndex++
      setTimeout(type, parseInt(props.speed))
    } else {
      isTyping.value = false
    }
  }

  setTimeout(type, 800)
})
</script>

<style scoped>
.title-flash { animation: flash 1s ease-out forwards; }
@keyframes flash {
  0% { filter: brightness(3); opacity: 0; }
  100% { filter: brightness(1); opacity: 1; }
}
.animate-blink { animation: blink 0.8s infinite; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
</style>