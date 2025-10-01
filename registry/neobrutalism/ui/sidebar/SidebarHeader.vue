<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
	class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    data-sidebar="header"
    :class="
      cn('flex flex-col gap-2 p-2 border-b-2 border-b-border', props.class)
    "
  >
    <slot />
  </div>
</template>
