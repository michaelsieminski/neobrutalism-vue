<script setup lang="ts">
import type { DropdownMenuSubTriggerProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { ChevronRight } from "lucide-vue-next";
import { DropdownMenuSubTrigger, useForwardProps } from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps<
	DropdownMenuSubTriggerProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <DropdownMenuSubTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'flex cursor-default select-none items-center rounded-base border-2 border-transparent bg-main px-2 py-1.5 text-sm font-base outline-hidden focus:border-border gap-2 data-[inset=true]:pl-8 [&_svg]:pointer-events-none [&_svg]:w-4 [&_svg]:h-4 [&_svg]:shrink-0',
        props.class
      )
    "
  >
    <slot />
    <ChevronRight class="ml-auto" />
  </DropdownMenuSubTrigger>
</template>
