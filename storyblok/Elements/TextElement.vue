<template>
  <RichText
    v-if="blok"
    v-editable="blok"
    :text="blok.text"
  />
</template>

<script setup lang='ts'>
defineProps({
  blok: {
    type: Object,
    required: true
  }
})
</script>
