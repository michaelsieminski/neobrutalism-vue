<script setup lang="ts">
import { Button } from "@registry/neobrutalism/ui/button";
import { Puzzle } from "lucide-vue-next";
</script>

<template>
  <nav
    class="fixed top-2 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between overflow-hidden border-b border-border shadow-shadow gap-2 w-[calc(100%-1rem)] max-w-xl xl:max-w-3xl 2xl:max-w-5xl bg-main p-3 sm:p-4 rounded-base"
  >
    <NuxtLink to="/">
      <p
        class="ml-18 sm:ml-0 sm:text-xl font-title truncate max-w-[180px] sm:max-w-none"
      >
        neobrutalism-vue
      </p>
    </NuxtLink>

    <div>
      <NuxtLink to="/components">
        <Button
          variant="neutral"
          class="text-sm sm:text-base py-2 px-3 sm:py-3 sm:px-4"
        >
          <Puzzle class="w-4 h-4 sm:w-5 sm:h-5" />
          <span class="hidden sm:inline">Components</span>
        </Button>
      </NuxtLink>
    </div>
  </nav>
</template>
