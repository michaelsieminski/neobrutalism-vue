<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <div :class="cn('mt-auto flex flex-col gap-3 p-4', props.class)">
    <slot />
  </div>
</template>
