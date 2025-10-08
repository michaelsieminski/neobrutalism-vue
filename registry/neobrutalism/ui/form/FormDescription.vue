<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import { useFormField } from "./useFormField";

const props = defineProps<{
	class?: HTMLAttributes["class"];
}>();

const { formDescriptionId } = useFormField();
</script>

<template>
  <p
    :id="formDescriptionId"
    data-slot="form-description"
    :class="cn('text-foreground text-sm font-base', props.class)"
  >
    <slot />
  </p>
</template>
