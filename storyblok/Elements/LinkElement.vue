<template>
  <div
    v-if="blok"
    v-editable="blok"
  >
    <!--External URL Link-->
    <a
      v-if="blok.link.linktype === 'url'"
      :href="blok.link.url"
      :title="blok.link.title"
      :rel="blok.link.rel"
      :target="blok.link.target"
    >
      {{ blok.link.title }}
    </a>
    <!--Internal Story Link-->
    <a
      v-if="blok.link.linktype === 'story'"
      :href="blok.link.story.url"
      :title="blok.link.title"
      :rel="blok.link.rel"
      :target="blok.link.target"
    >
      {{ blok.link.title }}
    </a>
  </div>
</template>

<script setup lang='ts'>
defineProps({
  blok: {
    type: Object,
    required: true
  }
})
</script>
