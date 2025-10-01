<script setup lang="ts">
import type { AccordionContentProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { AccordionContent } from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps<
	AccordionContentProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <AccordionContent
    v-bind="delegatedProps"
    class="overflow-hidden rounded-b-base bg-secondary-background text-sm font-base transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
  >
    <div :class="cn('p-4', props.class)">
      <slot />
    </div>
  </AccordionContent>
</template>
