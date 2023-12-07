<template>
  <NuxtLink
    v-if="blok"
    v-editable="blok"
    :to="formattedURL"
    :rel="blok.link.rel"
    :target="blok.link.target"
    class="underline default-focus"
  >
    {{ blok.link.title }}
  </NuxtLink>
</template>

<script setup lang='ts'>
const props = defineProps({
  blok: {
    type: Object,
    required: true
  }
})

const formattedURL = computed(() => {
  let url = ''
  switch (props.blok.link.linktype) {
    case 'story':
      url = props.blok.link.story.url
      if (url.charAt(0) !== '/') {
        url = '/' + url
      }
      break
    case 'url':
      url = props.blok.link.url
      break
  }
  return url
})
</script>
