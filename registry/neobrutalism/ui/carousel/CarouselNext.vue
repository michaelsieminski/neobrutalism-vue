<script setup lang="ts">
import type { WithClassAsProps } from "./interface";
import { ArrowRight } from "lucide-vue-next";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/neobrutalism/ui/button";
import { useCarousel } from "./useCarousel";

const props = defineProps<WithClassAsProps>();

const { orientation, canScrollNext, scrollNext } = useCarousel();
</script>

<template>
  <Button
    size="icon"
    :disabled="!canScrollNext"
    :class="
      cn(
        'touch-manipulation absolute size-8 rounded-base',
        orientation === 'horizontal'
          ? '-right-12 top-1/2 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        props.class
      )
    "
    variant="noShadow"
    @click="scrollNext"
  >
    <slot>
      <ArrowRight class="h-4 w-4" />
      <span class="sr-only">Next Slide</span>
    </slot>
  </Button>
</template>
