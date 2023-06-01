<template>
  <div
    v-if="blok"
    v-editable="blok"
    class="flex justify-center items-center h-96 w-full overflow-hidden relative"
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
    <div class="h-full container m-auto p-4 flex justify-center items-center z-10">
      <h1 class="font-bold text-4xl text-center">
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

const sectionColours = ref({ textColour: '255 255 255', backgroundColour: '128 128 128' })

sectionColours.value = {
  textColour: hexToRgb(props.blok.text_colour.color),
  backgroundColour: hexToRgb(props.blok.background_colour.color)
}

const cssVars = computedCssVars(sectionColours)
</script>
