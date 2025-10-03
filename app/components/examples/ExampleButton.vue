<script setup lang="ts">
import { Button } from "@registry/neobrutalism/ui/button";
import { Send, Ellipsis } from "lucide-vue-next";
</script>

<template>
  <div class="flex flex-wrap gap-2">
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
</template>
