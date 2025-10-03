<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
	class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <span
    :class="
      cn(
        'ml-auto text-xs font-base tracking-widest text-main-foreground',
        props.class
      )
    "
  >
    <slot />
  </span>
</template>
