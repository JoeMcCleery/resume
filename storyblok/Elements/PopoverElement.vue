<template>
  <div
    v-if="blok"
    v-editable="blok"
  >
    <HeadlessPopover class="relative">
      <HeadlessPopoverButton
        class="group transition duration-150 inline-flex items-center rounded-md text-context px-3 py-2 text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 ui-open:text-opacity-80"
      >
        <span>{{ blok.button_text }}</span>
        <ChevronDownIcon
          class="ml-2 h-5 w-5 ease-in-out text-context group-hover:text-opacity-70 ui-open:text-opacity-80"
          aria-hidden="true"
        />
      </HeadlessPopoverButton>

      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-1 opacity-0"
      >
        <HeadlessPopoverPanel
          class="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl"
        >
          <div
            class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
          >
            <div class="relative grid gap-8 bg-context p-7 lg:grid-cols-2">
              <StoryblokComponent
                v-for="element in blok.elements"
                :key="element._uid"
                :blok="element"
              />
            </div>
          </div>
        </HeadlessPopoverPanel>
      </transition>
    </HeadlessPopover>
  </div>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/24/solid'

defineProps({
  blok: {
    type: Object,
    required: true
  }
})
</script>
