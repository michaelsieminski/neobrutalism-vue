<script setup lang="ts">
import type { WithClassAsProps } from "./interface";
import { ArrowLeft } from "lucide-vue-next";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/neobrutalism/ui/button";
import { useCarousel } from "./useCarousel";

const props = defineProps<WithClassAsProps>();

const { orientation, canScrollPrev, scrollPrev } = useCarousel();
</script>

<template>
  <Button
    size="icon"
    :disabled="!canScrollPrev"
    :class="
      cn(
        'touch-manipulation absolute size-8 rounded-base',
        orientation === 'horizontal'
          ? '-left-12 top-1/2 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        props.class
      )
    "
    variant="noShadow"
    @click="scrollPrev"
  >
    <slot>
      <ArrowLeft class="h-4 w-4" />
      <span class="sr-only">Previous Slide</span>
    </slot>
  </Button>
</template>
