<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "@/lib/utils";
import { Skeleton } from "@registry/neobrutalism/ui/skeleton";

const props = defineProps<{
	showIcon?: boolean;
	class?: HTMLAttributes["class"];
}>();

const width = computed(() => {
	return `${Math.floor(Math.random() * 40) + 50}%`;
});
</script>

<template>
  <div
    data-sidebar="menu-skeleton"
    :class="cn('flex h-8 items-center gap-2 rounded-base px-2', props.class)"
  >
    <Skeleton
      v-if="showIcon"
      class="size-4 rounded-base"
      data-sidebar="menu-skeleton-icon"
    />

    <Skeleton
      class="h-4 flex-1 max-w-[var(--skeleton-width)]"
      data-sidebar="menu-skeleton-text"
      :style="{ '--skeleton-width': width }"
    />
  </div>
</template>
