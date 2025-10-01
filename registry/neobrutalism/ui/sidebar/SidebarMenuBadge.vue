<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
	class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    data-sidebar="menu-badge"
    :class="
      cn(
        'text-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-base px-1 text-xs font-base tabular-nums select-none',
        'peer-hover/menu-button:text-main-foreground',
        'peer-data-[size=sm]/menu-button:top-1',
        'peer-data-[size=default]/menu-button:top-1.5',
        'peer-data-[size=lg]/menu-button:top-2.5',
        'group-data-[collapsible=icon]:hidden',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
