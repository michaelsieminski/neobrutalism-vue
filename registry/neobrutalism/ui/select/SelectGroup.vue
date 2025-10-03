<script setup lang="ts">
import type { SelectGroupProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { SelectGroup } from "reka-ui";

const props = defineProps<
	SelectGroupProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <SelectGroup :class="props.class" v-bind="delegatedProps">
    <slot />
  </SelectGroup>
</template>
