<script setup lang="ts">
import type { SelectLabelProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { SelectLabel } from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps<
	SelectLabelProps & { class?: HTMLAttributes["class"] }
>();
</script>

<template>
  <SelectLabel
    :class="
      cn(
        'border-2 border-transparent py-1.5 pr-8 pl-2 text-sm font-base text-main-foreground/80',
        props.class
      )
    "
  >
    <slot />
  </SelectLabel>
</template>
