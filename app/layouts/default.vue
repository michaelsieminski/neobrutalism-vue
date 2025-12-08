<script setup lang="ts">
import { ScrollArea } from "@registry/neobrutalism/ui/scroll-area";
import { Toaster } from "@registry/neobrutalism/ui/sonner";

import "vue-sonner/style.css";
</script>

<template>
  <Toaster />

  <div class="flex flex-col w-screen h-screen overflow-hidden">
    <Navigation />
    <NuxtRouteAnnouncer />

    <ScrollArea class="w-full h-screen">
      <slot />
    </ScrollArea>
  </div>
</template>
