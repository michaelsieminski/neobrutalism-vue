<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
	class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <h5
    :class="
      cn(
        'col-start-2 line-clamp-1 min-h-4 font-heading tracking-tight',
        props.class
      )
    "
  >
    <slot />
  </h5>
</template>
