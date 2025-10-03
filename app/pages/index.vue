<script setup lang="ts">
import { Button } from "@registry/neobrutalism/ui/button";
import Navigation from "~/components/Navigation.vue";

useHead({
	title: "Home",
});
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 pt-20 sm:pt-0"
  >
    <div
      class="flex flex-col items-center justify-center max-w-2xl mx-auto text-center space-y-6"
    >
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-title leading-tight">
        neobrutalism-vue
      </h1>
      <p class="text-base sm:text-lg md:text-xl max-w-xl">
        A vue-based registry of neobrutalism-styled Tailwind components.
      </p>

      <NuxtLink to="/components">
        <Button class="text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4">
          Explore Components
        </Button>
      </NuxtLink>
    </div>
  </div>
</template>
