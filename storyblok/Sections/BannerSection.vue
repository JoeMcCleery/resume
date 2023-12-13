<template>
  <SectionContainer
    v-if="blok"
    v-editable="blok"
    :blok="blok"
    class="w-full h-96"
  >
    <ImageComponent
      :image="blok.background_image"
      sizes="640px sm:1028px md:1536px lg:2048px xl:2560px 2xl:3072px"
      class="object-cover absolute w-full h-full"
    />
    <div
      class="absolute w-full h-full bg-context"
      :style="`--tw-bg-opacity: ${blok.overlay_opacity / 100}`"
    />
    <div class="relative z-10 section h-full justify-center items-center">
      <ImageComponent
        :image="blok.banner_image"
        sizes="320px"
        class="rounded-full aspect-square h-40"
      />
      <h1
        v-if="blok.banner_text"
        class="text-6xl font-bold text-center"
      >
        {{ blok.banner_text }}
      </h1>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    required: true
  }
})
</script>
