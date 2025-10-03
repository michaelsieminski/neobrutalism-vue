<script lang="ts" setup>
import type { CalendarCellTriggerProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { CalendarCellTrigger, useForwardProps } from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps<
	CalendarCellTriggerProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <CalendarCellTrigger
    :class="
      cn(
        'inline-flex items-center justify-center h-9 w-9 p-0 rounded-base border-2 border-transparent font-base text-sm text-foreground transition-all',
        'hover:border-border hover:bg-secondary-background',
        'focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2',
        'active:scale-95',
        '[&[data-today]:not([data-selected])]:border-border [&[data-today]:not([data-selected])]:bg-secondary-background [&[data-today]:not([data-selected])]:font-heading',
        'data-[selected]:bg-main data-[selected]:text-main-foreground data-[selected]:border-border data-[selected]:shadow-shadow data-[selected]:font-heading',
        'data-[disabled]:opacity-50 data-[disabled]:pointer-events-none',
        'data-[unavailable]:text-foreground/30 data-[unavailable]:line-through',
        'data-[outside-view]:text-foreground/30',
        props.class
      )
    "
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarCellTrigger>
</template>
