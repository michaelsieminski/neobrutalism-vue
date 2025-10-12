<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
	class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    data-slot="input-group"
    role="group"
    :class="
      cn(
        'group/input-group relative flex w-full min-w-0 items-stretch rounded-base border-2 border-border bg-white font-base text-foreground transition-all duration-200 ring-offset-white focus-within:outline-hidden focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2 overflow-hidden',
        'divide-x-2 divide-border',
        'has-[textarea[data-slot=input-group-control]]:items-start',
        'has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:items-stretch has-[>[data-align=block-start]]:divide-x-0 has-[>[data-align=block-start]]:divide-y-2',
        'has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:items-stretch has-[>[data-align=block-end]]:divide-x-0 has-[>[data-align=block-end]]:divide-y-2',
        'has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:bg-destructive/10 has-[[data-slot][aria-invalid=true]]:text-destructive',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
