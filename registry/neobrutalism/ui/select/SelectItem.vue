<script setup lang="ts">
import type { SelectItemProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { Check } from "lucide-vue-next";
import {
	SelectItem,
	SelectItemIndicator,
	SelectItemText,
	useForwardProps,
} from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps<
	SelectItemProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <SelectItem
    v-bind="forwardedProps"
    :class="
      cn(
        'relative flex w-full cursor-default select-none items-center gap-2 rounded-base py-1.5 pr-8 pl-2 text-sm border-2 border-transparent font-base outline-none focus:border-border data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=size-])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2',
        props.class
      )
    "
  >
    <span class="absolute right-2 flex size-3.5 items-center justify-center">
      <SelectItemIndicator>
        <Check class="size-4" />
      </SelectItemIndicator>
    </span>

    <SelectItemText>
      <slot />
    </SelectItemText>
  </SelectItem>
</template>
