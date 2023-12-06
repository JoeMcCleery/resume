<template>
  <div
    v-if="blok"
    v-editable="blok"
    class="underline"
  >
    <!--External URL Link-->
    <a
      v-if="blok.link.linktype === 'url'"
      :href="blok.link.url"
      :title="blok.link.title"
      :rel="blok.link.rel"
      :target="blok.link.target"
      class="default-focus"
    >
      {{ blok.link.title }}
    </a>
    <!--Internal Story Link-->
    <NuxtLink
      v-if="blok.link.linktype === 'story'"
      :to="formattedURL(blok.link.story.url)"
      :rel="blok.link.rel"
      :target="blok.link.target"
      class="default-focus"
    >
      {{ blok.link.title }}
    </NuxtLink>
  </div>
</template>

<script setup lang='ts'>
defineProps({
  blok: {
    type: Object,
    required: true
  }
})

function formattedURL (url : string) {
  if (url.charAt(0) !== '/') {
    url = '/' + url
  }
  return url
}
</script>
