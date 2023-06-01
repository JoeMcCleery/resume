<template>
  <div
    v-if="blok"
    v-editable="blok"
  >
    <div
      class="prose max-w-none"
      v-html="computedRichText"
    />
  </div>
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
