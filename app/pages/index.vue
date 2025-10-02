<script setup lang="ts">
import { Button } from "@registry/neobrutalism/ui/button";
import Navigation from "~/components/Navigation.vue";

useHead({
	title: "Home",
});
</script>

<template>
  <div class="flex flex-col items-center justify-between h-screen">
    <Navigation />

    <div class="flex flex-col items-center justify-center">
      <h1 class="text-4xl font-title mb-2">neobrutalism-vue</h1>
      <p class="text-lg mb-4 text-center">
        A vue-based registry of neobrutalism-styled Tailwind components.
      </p>

      <NuxtLink to="/components">
        <Button> Explore Components </Button>
      </NuxtLink>
    </div>

    <div></div>
  </div>
</template>
