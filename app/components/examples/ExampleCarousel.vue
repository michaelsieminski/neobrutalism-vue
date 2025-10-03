<script setup lang="ts">
import { Card, CardContent } from "@/registry/neobrutalism/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/registry/neobrutalism/ui/carousel";
</script>

<template>
  <Carousel v-slot="{ canScrollNext }" class="relative w-full max-w-xs">
    <CarouselContent>
      <CarouselItem v-for="(_, index) in 5" :key="index">
        <div class="p-2.5">
          <Card class="shadow-none p-0 bg-main text-main-foreground">
            <CardContent
              class="flex aspect-square items-center justify-center p-4"
            >
              <span class="text-3xl font-base">{{ index + 1 }}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext v-if="canScrollNext" />
  </Carousel>
</template>
