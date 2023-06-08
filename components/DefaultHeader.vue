<template>
  <header class="fixed w-full h-24 backdrop-blur-lg z-50 text-context border-b-2 border-context">
    <div class="absolute h-full w-full opacity-50 -z-10 bg-context" />
    <div class="relative container p-4 h-full w-full mx-auto flex items-center justify-between space-x-8">
      <div class="h-full flex items-center justify-center space-x-8">
        <SiteNavigation />
      </div>
      <div class="h-full flex items-center justify-center space-x-8">
        <DarkModeToggle />
      </div>
    </div>
  </header>
</template>
