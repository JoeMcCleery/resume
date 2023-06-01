<template>
  <div
    v-if="blok"
    v-editable="blok"
    v-html="text"
  />
</template>

<script setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true
  }
})
const text = computed(() =>
  renderRichText(props.blok.text)
)
</script>
