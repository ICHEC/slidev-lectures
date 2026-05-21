<template>
  <div class="flex w-full my-1.5" :class="alignClasses">
    <div 
      :class="[
        'transition-all duration-300 shadow-md flex flex-col overflow-hidden', 
        width === 'auto' ? 'w-fit' : 'w-full',
        $attrs.class 
      ]"
    >
      <div 
        v-if="title" 
        :class="['px-3 py-1 font-bold text-base flex items-center gap-2', headerStyle]"
      >
        <div v-if="icon" :class="icon" class="text-lg" />
        <slot name="icon" v-else />
        {{ title }}
      </div>

      <div 
        :class="[
          'px-3 py-2 border-1 banner-content',
          title ? 'border-t-0 rounded-b-md' : 'rounded-md',
          contentStyle
        ]"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
defineOptions({ inheritAttrs: false })

const props = defineProps({
  title: String,
  icon: String,
  type: { type: String, default: 'info' },
  width: { type: String, default: 'full' },
  align: { type: String, default: 'left' }
})

const alignClasses = computed(() => ({
  'justify-start': props.align === 'left',
  'justify-center': props.align === 'center',
  'justify-end': props.align === 'right',
}))

const headerStyle = computed(() => {
  const styles = {
    info: 'bg-blue-600 text-white',
    success: 'bg-green-600 text-white',
    warning: 'bg-yellow-500 text-black',
    error: 'bg-red-600 text-white'
  }
  return styles[props.type] || styles.info
})

const contentStyle = computed(() => {
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-900/10 dark:text-blue-100',
    success: 'bg-green-50 border-green-200 text-green-900 dark:bg-green-900/10 dark:text-green-100',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-900 dark:bg-yellow-900/10 dark:text-yellow-100',
    error: 'bg-red-50 border-red-200 text-red-900 dark:bg-red-900/10 dark:text-red-100'
  }
  return styles[props.type] || styles.info
})
</script>

<style scoped>
/* This is the secret to preventing overflow: */
/* It removes the default top/bottom margins from Markdown content inside the banner */
.banner-content :deep(p), 
.banner-content :deep(ul), 
.banner-content :deep(ol) {
  @apply my-1 !mt-0;
}

.banner-content :deep(li) {
  @apply leading-tight mb-1;
}

/* If there is a table inside the banner, make it fit tightly */
.banner-content :deep(table) {
  @apply my-1;
}
</style>