<script setup lang="ts">
import type { AvatarFallbackProps } from "reka-ui";
import { AvatarFallback } from "reka-ui";

const props = defineProps<AvatarFallbackProps>();
</script>

<template>
  <AvatarFallback
    class="flex size-full items-center justify-center rounded-full bg-secondary-background text-foreground font-base"
    v-bind="props"
  >
    <slot />
  </AvatarFallback>
</template>
