<script setup lang="ts">
import { cn } from "@/lib/utils";
import { Button } from "@/registry/neobrutalism/ui/button";
import type { InputGroupButtonProps } from ".";
import { inputGroupButtonVariants } from ".";

const props = withDefaults(defineProps<InputGroupButtonProps>(), {
	size: "sm",
	variant: "ghost",
});
</script>

<template>
  <Button
    data-slot="input-group-button"
    :data-size="props.size"
    :variant="props.variant"
    :class="cn(inputGroupButtonVariants({ size: props.size }), props.class)"
  >
    <slot />
  </Button>
</template>
