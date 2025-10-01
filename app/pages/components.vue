<script setup lang="ts">
import { Button } from "@registry/neobrutalism/ui/button";
import { Send, Ellipsis } from "lucide-vue-next";
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <div class="w-96 p-2">
      <h1 class="mb-2">Buttons</h1>
      <div
        class="flex flex-col my-2 border border-border gap-4 bg-white p-4 rounded-base max-w-sm"
      >
        <Button>Default</Button>
        <Button variant="reverse">Reverse</Button>
        <Button variant="noShadow">No Shadow</Button>
        <Button variant="neutral">Neutral</Button>
        <Button>
          <Send />
          With Icon
        </Button>
        <Button size="icon">
          <Ellipsis />
        </Button>
      </div>
    </div>
  </div>
</template>
