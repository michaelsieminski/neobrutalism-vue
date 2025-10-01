<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

interface SkeletonProps {
	class?: HTMLAttributes["class"];
}

const props = defineProps<SkeletonProps>();
</script>

<template>
  <div
    :class="
      cn(
        'animate-pulse rounded-base bg-secondary-background border-2 border-border',
        props.class
      )
    "
  />
</template>
