<script setup lang="ts">
import { Button } from "@registry/neobrutalism/ui/button";
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-[calc(100dvh-5.1rem)]"
  >
    <h1 class="text-4xl font-title mb-2">neobrutalism-vue</h1>
    <p class="text-lg mb-4">
      A vue-based registry of neobrutalism-styled Tailwind components.
    </p>

    <NuxtLink to="/components">
      <Button> Explore Components </Button>
    </NuxtLink>
  </div>
</template>
