<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

defineProps<{
	class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <h3
    data-slot="empty-title"
    :class="cn('text-xl font-heading tracking-tight', $attrs.class ?? '')"
  >
    <slot />
  </h3>
</template>
