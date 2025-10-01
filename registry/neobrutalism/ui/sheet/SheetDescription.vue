<script setup lang="ts">
import type { DialogDescriptionProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { DialogDescription } from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps<
	DialogDescriptionProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <DialogDescription
    :class="cn('text-sm text-foreground font-base', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </DialogDescription>
</template>
