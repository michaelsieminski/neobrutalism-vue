<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
	class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <tr
    :class="
      cn(
        'border-b-2 border-border transition-colors text-main-foreground bg-main font-base data-[state=selected]:bg-secondary-background data-[state=selected]:text-main-foreground',
        props.class
      )
    "
  >
    <slot />
  </tr>
</template>
