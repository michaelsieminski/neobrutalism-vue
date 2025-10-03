<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
	class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    :class="
      cn(
        'rounded-base flex flex-col shadow-shadow border-2 gap-6 py-6 border-border bg-background text-foreground font-base',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
