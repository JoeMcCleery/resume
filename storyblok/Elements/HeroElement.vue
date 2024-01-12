<template>
  <article
    v-if="blok"
    v-editable="blok"
    class="h-28 flex"
  >
    <NuxtLink
      :to="formattedURL"
      :rel="blok.link.rel"
      :target="blok.link.target"
      class="group flex flex-grow focus-default rounded-2xl overflow-hidden neumorphic-animated"
    >
      <div class="relative aspect-square w-20 h-20 m-4">
        <ImageComponent
          :image="blok.image"
          sizes="192px"
          class="object-cover absolute w-full h-full rounded-xl"
        />
      </div>
      <div class="flex flex-col pl-0 pr-4 py-6 leading-none space-y-2 justify-center">
        <p class="font-bold">
          {{ blok.link.title }}
        </p>
        <p class="text-sm line-clamp-2 leading-tight">
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
