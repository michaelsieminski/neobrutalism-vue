<script setup lang="ts">
import type { ToastActionProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { ToastAction } from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps<
	ToastActionProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <ToastAction
    v-bind="delegatedProps"
    :class="
      cn(
        'inline-flex h-8 shrink-0 items-center justify-center rounded-base border-2 border-border bg-main text-main-foreground px-3 text-sm font-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY shadow-shadow hover:shadow-none active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:bg-white group-[.destructive]:text-black',
        props.class
      )
    "
  >
    <slot />
  </ToastAction>
</template>
