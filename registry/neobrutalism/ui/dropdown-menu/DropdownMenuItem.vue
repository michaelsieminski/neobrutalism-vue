<script setup lang="ts">
import type { DropdownMenuItemProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { DropdownMenuItem, useForwardProps } from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps<
	DropdownMenuItemProps & { class?: HTMLAttributes["class"]; inset?: boolean }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <DropdownMenuItem
    v-bind="forwardedProps"
    :class="
      cn(
        'relative gap-2 [&_svg]:pointer-events-none [&_svg]:w-4 [&_svg]:h-4 [&_svg]:shrink-0 flex cursor-default select-none items-center rounded-base border-2 border-transparent data-[inset=true]:pl-8 bg-main px-2 py-1.5 text-sm font-base outline-hidden transition-colors focus:border-border data-disabled:pointer-events-none data-disabled:opacity-50',
        inset && 'pl-8',
        props.class
      )
    "
  >
    <slot />
  </DropdownMenuItem>
</template>
