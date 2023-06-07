<template>
  <div
    v-if="blok"
    v-editable="blok"
    class="relative w-full text-text bg-background dark:text-textDark dark:bg-backgroundDark h-96"
    :style="blok.override_colours ? cssVars : ''"
  >
    <nuxt-img
      v-if="blok.background_image?.filename"
      provider="storyblok"
      format="webp"
      :src="blok.background_image.filename"
      :title="blok.background_image.title"
      :alt="blok.background_image.alt"
      :copyright="blok.background_image"
      :source="blok.background_image.source"
      class="object-cover absolute w-full h-full"
    />
    <div
      class="absolute w-full h-full bg-background"
      :style="`opacity: ${blok.overlay_opacity / 100}`"
    />
    <div class="relative h-full container m-auto p-4 flex justify-center items-center z-10">
      <h1 class="text-6xl font-bold text-center">
        {{ blok.banner_text }}
      </h1>
    </div>
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
