<script lang="ts" setup>
import type { CalendarNextProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { ChevronRight } from "lucide-vue-next";
import { CalendarNext, useForwardProps } from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps<
	CalendarNextProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <CalendarNext
    :class="
      cn(
        'inline-flex items-center justify-center h-8 w-8 rounded-base border-2 border-border bg-secondary-background text-foreground font-base transition-all shadow-shadow',
        'hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none',
        'focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2',
        'active:scale-95',
        'disabled:pointer-events-none disabled:opacity-50',
        '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
        props.class
      )
    "
    v-bind="forwardedProps"
  >
    <slot>
      <ChevronRight class="h-4 w-4" />
    </slot>
  </CalendarNext>
</template>
