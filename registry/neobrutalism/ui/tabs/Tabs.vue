<script setup lang="ts">
import type { TabsRootEmits, TabsRootProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { TabsRoot, useForwardPropsEmits } from "reka-ui";
import { cn } from "@/lib/utils";

interface Props extends TabsRootProps {
	class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();
const emits = defineEmits<TabsRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <TabsRoot v-bind="forwarded" :class="cn('w-full', props.class)">
    <slot />
  </TabsRoot>
</template>
