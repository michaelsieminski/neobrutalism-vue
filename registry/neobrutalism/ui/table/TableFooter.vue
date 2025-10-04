<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
	class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <tfoot
    :class="
      cn(
        'border-t-2 border-border bg-main font-base text-main-foreground last:[&>tr]:border-b-0',
        props.class
      )
    "
  >
    <slot />
  </tfoot>
</template>
