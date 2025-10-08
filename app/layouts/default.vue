<script setup lang="ts">
import { ScrollArea } from "@registry/neobrutalism/ui/scroll-area";
import { Toaster } from "@registry/neobrutalism/ui/toast";
</script>

<template>
  <div class="flex flex-col w-screen h-screen overflow-hidden">
    <Navigation />
    <NuxtRouteAnnouncer />

    <ScrollArea class="w-full h-screen">
      <slot />
    </ScrollArea>
    <Toaster />
  </div>
</template>
