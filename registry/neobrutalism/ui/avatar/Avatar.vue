<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { AvatarRoot } from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps<{
	class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <AvatarRoot
    :class="
      cn(
        'relative flex size-10 shrink-0 overflow-hidden rounded-full outline-2 outline-border',
        props.class
      )
    "
  >
    <slot />
  </AvatarRoot>
</template>
