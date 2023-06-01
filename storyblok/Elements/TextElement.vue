<template>
  <div
    v-if="blok"
    v-editable="blok"
    v-html="computedRichText"
  />
</template>

<script setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true
  }
})
const computedRichText = computed(() => renderRichText(props.blok.text))
</script>
