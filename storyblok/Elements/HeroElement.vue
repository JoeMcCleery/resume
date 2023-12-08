<template>
  <article
    v-if="blok"
    v-editable="blok"
    class="h-24 flex"
  >
    <NuxtLink
      :to="formattedURL"
      :rel="blok.link.rel"
      :target="blok.link.target"
      class="group flex focus-default rounded-2xl overflow-hidden neumorphic-context"
    >
      <div class="relative aspect-square">
        <ImageComponent
          :image="blok.image"
          class="object-cover absolute w-full h-full"
        />
      </div>
      <div class="flex flex-col p-4">
        <p class="underline">
          {{ blok.link.title }}
        </p>
        <p class="text-sm line-clamp-2">
          {{ blok.description }}
        </p>
      </div>
    </NuxtLink>
  </article>
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
