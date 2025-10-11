<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import { Label } from "@/registry/neobrutalism/ui/label";

const props = defineProps<{
	class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <Label
    data-slot="field-label"
    :class="
      cn(
        'group/field-label peer/field-label flex w-fit items-center gap-3 text-sm leading-snug font-heading text-foreground transition-colors duration-150 group-data-[disabled=true]/field:opacity-50',
        'has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:items-start has-[>[data-slot=field]]:gap-3 has-[>[data-slot=field]]:rounded-base has-[>[data-slot=field]]:border-2 has-[>[data-slot=field]]:border-border has-[>[data-slot=field]]:bg-secondary-background has-[>[data-slot=field]]:p-4 has-[>[data-slot=field]]:shadow-shadow',
        '[&>[data-slot=field]]:border-0 [&>[data-slot=field]]:bg-transparent [&>[data-slot=field]]:p-0 [&>[data-slot=field]]:shadow-none [&>[data-slot=field]]:rounded-none',
        'has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5 dark:has-data-[state=checked]:bg-primary/10',
        props.class
      )
    "
  >
    <slot />
  </Label>
</template>
