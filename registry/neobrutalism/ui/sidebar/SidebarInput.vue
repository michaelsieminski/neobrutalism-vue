<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import { Input } from "@registry/neobrutalism/ui/input";

const props = defineProps<{
	class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <Input
    data-sidebar="input"
    :class="cn('bg-secondary-background h-8 w-full shadow-none', props.class)"
  >
    <slot />
  </Input>
</template>
