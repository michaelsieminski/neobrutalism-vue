<script setup lang="ts">
import { Button } from "@registry/neobrutalism/ui/button";
import { Puzzle } from "lucide-vue-next";
</script>

<template>
  <nav
    class="mx-auto fixed top-2 left-1/2 -translate-x-1/2 mt-2 flex items-center justify-between order-2 overflow-hidden border-b border-border shadow-shadow gap-2 w-full max-w-5xl bg-main p-4 rounded-base"
  >
    <NuxtLink to="/">
      <p class="text-xl font-title">neobrutalism-vue</p>
    </NuxtLink>

    <div>
      <NuxtLink to="/components">
        <Button variant="neutral">
          <Puzzle />
          Components
        </Button>
      </NuxtLink>
    </div>
  </nav>
</template>
