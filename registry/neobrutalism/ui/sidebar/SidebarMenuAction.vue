<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { Primitive } from "reka-ui";
import { cn } from "@/lib/utils";

const props = withDefaults(
	defineProps<
		PrimitiveProps & {
			showOnHover?: boolean;
			class?: HTMLAttributes["class"];
		}
	>(),
	{
		as: "button",
	},
);
</script>

<template>
  <Primitive
    data-sidebar="menu-action"
    :class="
      cn(
        '[&_svg]:text-foreground hover:[&_svg]:text-main-foreground text-main-foreground hover:bg-main hover:outline-border outline-transparent outline-2 absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-base p-0 transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
        'after:absolute after:-inset-2 md:after:hidden',
        'peer-data-[size=sm]/menu-button:top-1',
        'peer-data-[size=default]/menu-button:top-1.5',
        'peer-data-[size=lg]/menu-button:top-2.5',
        'group-data-[collapsible=icon]:hidden',
        showOnHover &&
          'group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-accent-foreground md:opacity-0',
        props.class
      )
    "
    :as="as"
    :as-child="asChild"
  >
    <slot />
  </Primitive>
</template>
