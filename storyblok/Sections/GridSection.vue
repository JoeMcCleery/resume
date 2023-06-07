<template>
  <div
    v-if="blok"
    v-editable="blok"
    class="relative container m-auto px-4 py-16 text-text bg-background dark:text-textDark dark:bg-backgroundDark flex flex-col space-y-8 items-center justify-center"
    :style="blok.override_colours ? cssVars : ''"
  >
    <div v-if="blok.section_heading" class="w-full">
      <h1 class="text-4xl font-bold">
        {{ blok.section_heading }}
      </h1>
    </div>

    <div v-if="blok.elements.length > 0" class="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
      <StoryblokComponent
        v-for="element in blok.elements"
        :key="element._uid"
        :blok="element"
      />
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
