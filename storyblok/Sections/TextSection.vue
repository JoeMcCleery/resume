<template>
  <div
    v-if="blok"
    v-editable="blok"
    class="relative container m-auto px-4 py-16 text-text bg-background"
    :style="blok.override_colours ? cssVars : ''"
  >
    <RichText :text="blok.text" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  blok: {
    type: Object,
    required: true
  }
})

const sectionColours = ref({ textColour: '255 255 255', backgroundColour: '128 128 128' })

sectionColours.value = {
  textColour: hexToRgb(props.blok.text_colour.color),
  backgroundColour: hexToRgb(props.blok.background_colour.color)
}

const cssVars = computedCssVars(sectionColours)
</script>
