<script setup lang="ts">
import Navigation from "~/components/Navigation.vue";
</script>

<template>
  <div class="flex flex-col w-screen h-screen overflow-hidden">
    <Navigation />

    <NuxtRouteAnnouncer />
    <div class="w-full h-screen overflow-y-auto pt-[6rem]">
      <slot />
    </div>
  </div>
</template>
