<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import { Input } from "@/registry/neobrutalism/ui/input";

const props = defineProps<{
	class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <Input
    data-slot="input-group-control"
    :class="
      cn(
        'flex-1 rounded-none border-none bg-transparent px-3 text-sm font-base text-foreground shadow-none selection:bg-main selection:text-main-foreground placeholder:text-foreground/50 focus-visible:border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-transparent',
        props.class
      )
    "
  />
</template>
