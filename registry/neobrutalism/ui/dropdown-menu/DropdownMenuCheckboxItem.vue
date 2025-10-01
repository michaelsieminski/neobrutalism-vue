<script setup lang="ts">
import type {
	DropdownMenuCheckboxItemEmits,
	DropdownMenuCheckboxItemProps,
} from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { Check } from "lucide-vue-next";
import {
	DropdownMenuCheckboxItem,
	DropdownMenuItemIndicator,
	useForwardPropsEmits,
} from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps<
	DropdownMenuCheckboxItemProps & { class?: HTMLAttributes["class"] }
>();
const emits = defineEmits<DropdownMenuCheckboxItemEmits>();

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <DropdownMenuCheckboxItem
    v-bind="forwarded"
    :class="
      cn(
        'relative flex cursor-default select-none items-center rounded-base border-2 border-transparent gap-2 py-1.5 pl-8 pr-2 text-sm font-base text-main-foreground outline-hidden transition-colors focus:border-border data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=size-])]:size-4',
        props.class
      )
    "
  >
    <span class="absolute left-2 flex size-3.5 items-center justify-center">
      <DropdownMenuItemIndicator>
        <Check />
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </DropdownMenuCheckboxItem>
</template>
