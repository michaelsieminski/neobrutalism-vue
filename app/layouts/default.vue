<script setup lang="ts">
import { ScrollArea } from "@registry/neobrutalism/ui/scroll-area";
</script>

<template>
  <div class="flex flex-col w-screen h-screen overflow-hidden">
    <Navigation />
    <NuxtRouteAnnouncer />

    <ScrollArea class="w-full h-screen">
      <slot />
    </ScrollArea>
  </div>
</template>
