<template>
  <div
    v-if="text"
    class="prose dark:prose-invert max-w-none"
    v-html="computedRichText"
  />
</template>

<script setup lang="ts">
import { ISbRichtext } from 'storyblok-js-client'

const props = defineProps({
  text: {
    type: Object as PropType<ISbRichtext>,
    required: true
  }
})

const computedRichText = computed(() => renderRichText(props.text))
</script>
