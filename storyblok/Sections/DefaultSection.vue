<template>
  <SectionContainer
    v-if="blok"
    v-editable="blok"
    :blok="blok"
  >
    <div class="section">
      <div v-if="blok.section_heading">
        <h1 class="text-4xl font-bold">
          {{ blok.section_heading }}
        </h1>
      </div>

      <StoryblokComponent
        v-for="element in blok.content"
        :key="element._uid"
        :blok="element"
      />
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
