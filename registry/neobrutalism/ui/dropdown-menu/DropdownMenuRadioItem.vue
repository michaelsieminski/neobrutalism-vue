<script setup lang="ts">
import type {
	DropdownMenuRadioItemEmits,
	DropdownMenuRadioItemProps,
} from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { Circle } from "lucide-vue-next";
import {
	DropdownMenuItemIndicator,
	DropdownMenuRadioItem,
	useForwardPropsEmits,
} from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps<
	DropdownMenuRadioItemProps & { class?: HTMLAttributes["class"] }
>();

const emits = defineEmits<DropdownMenuRadioItemEmits>();

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <DropdownMenuRadioItem
    v-bind="forwarded"
    :class="
      cn(
        'relative flex cursor-default select-none items-center rounded-base border-2 border-transparent gap-2 py-1.5 pl-8 pr-2 text-sm font-base outline-hidden transition-colors focus:border-border data-disabled:pointer-events-none data-disabled:opacity-50',
        props.class
      )
    "
  >
    <span class="absolute left-2 flex size-3.5 items-center justify-center">
      <DropdownMenuItemIndicator>
        <Circle class="size-2 fill-current" />
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </DropdownMenuRadioItem>
</template>
