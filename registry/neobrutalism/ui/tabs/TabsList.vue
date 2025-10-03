<script setup lang="ts">
import type { TabsListProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { TabsList } from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps<
	TabsListProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <TabsList
    v-bind="delegatedProps"
    :class="
      cn(
        'inline-flex h-12 items-center justify-center rounded-base border-2 border-border bg-background p-1 text-foreground',
        props.class
      )
    "
  >
    <slot />
  </TabsList>
</template>
