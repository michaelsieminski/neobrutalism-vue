<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { Primitive } from "reka-ui";
import { cn } from "@/lib/utils";

const props = withDefaults(
	defineProps<
		PrimitiveProps & {
			size?: "sm" | "md";
			isActive?: boolean;
			class?: HTMLAttributes["class"];
		}
	>(),
	{
		as: "a",
		size: "md",
	},
);
</script>

<template>
  <Primitive
    data-sidebar="menu-sub-button"
    :as="as"
    :as-child="asChild"
    :data-size="size"
    :data-active="isActive"
    :class="
      cn(
        'text-foreground hover:bg-main hover:outline-border hover:text-main-foreground  active:bg-main outline-transparent outline-2 [&>svg]:text-main-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-base px-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
        'data-[active=true]:bg-main data-[active=true]:outline-border',
        size === 'sm' && 'text-xs',
        size === 'md' && 'text-sm',
        'group-data-[collapsible=icon]:hidden',
        props.class
      )
    "
  >
    <slot />
  </Primitive>
</template>
