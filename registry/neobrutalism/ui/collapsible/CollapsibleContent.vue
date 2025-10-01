<script setup lang="ts">
import type { CollapsibleContentProps } from "reka-ui";
import { CollapsibleContent } from "reka-ui";

const props = defineProps<CollapsibleContentProps>();
</script>

<template>
  <CollapsibleContent v-bind="props">
    <slot />
  </CollapsibleContent>
</template>
