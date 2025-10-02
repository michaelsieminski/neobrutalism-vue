<script setup lang="ts">
import { Button } from "@registry/neobrutalism/ui/button";
import { Puzzle } from "lucide-vue-next";
</script>

<template>
  <nav
    class="mt-2 flex items-center justify-between overflow-hidden border-b border-border shadow-shadow gap-2 w-full max-w-4xl bg-main p-4 rounded-base"
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
