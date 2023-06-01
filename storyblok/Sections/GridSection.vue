<template>
  <div
    v-if="blok"
    v-editable="blok"
    class="relative w-full text-text bg-background"
    :style="blok.override_colours ? cssVars : ''"
  >
    <div class="container m-auto px-4 py-16 flex flex-col gap-4">
      <div v-if="blok.section_heading">
        <h1 class="text-4xl font-bold">
          {{ blok.section_heading }}
        </h1>
      </div>
      <div v-if="blok.elements.length > 0" class="flex flex-row gap-4 flex-wrap items-center">
        <StoryblokComponent
          v-for="element in blok.elements"
          :key="element._uid"
          :blok="element"
        />
      </div>
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

const sectionColours = ref({ textColour: '255 255 255', backgroundColour: '128 128 128' })

sectionColours.value = {
  textColour: hexToRgb(props.blok.text_colour.color),
  backgroundColour: hexToRgb(props.blok.background_colour.color)
}

const cssVars = computedCssVars(sectionColours)
</script>
