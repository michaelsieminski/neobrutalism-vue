<template>
  <div class="flex flex-col w-screen h-screen overflow-hidden">
    <Navigation />
    <NuxtRouteAnnouncer />

    <div class="w-full h-screen overflow-y-auto">
      <slot />
    </div>
  </div>
</template>
