<script setup lang="ts">
import type { AlertDialogCancelProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { AlertDialogCancel } from "reka-ui";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/registry/neobrutalism/ui/button";

const props = defineProps<
	AlertDialogCancelProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <AlertDialogCancel
    v-bind="delegatedProps"
    :class="cn(buttonVariants({ variant: 'neutral' }), props.class)"
  >
    <slot />
  </AlertDialogCancel>
</template>
