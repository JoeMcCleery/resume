<template>
  <div
    class="relative text-context bg-context"
    :style="blok.override_colours ? cssVars : ''"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  blok: {
    type: Object,
    required: true
  }
})

const sectionColours = defaultColourContext()
if (props.blok.override_colours) {
  sectionColours.value = {
    light: {
      textColour: hexToRgb(props.blok.text_colour.color),
      backgroundColour: hexToRgb(props.blok.background_colour.color)
    },
    dark: {
      textColour: hexToRgb(props.blok.text_colour_dark.color),
      backgroundColour: hexToRgb(props.blok.background_colour_dark.color)
    }
  }
}
const cssVars = computedCssVars(sectionColours)
</script>
