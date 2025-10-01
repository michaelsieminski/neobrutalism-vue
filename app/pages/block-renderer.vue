<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import ExampleSidebar from "@/app/components/examples/ExampleSidebar/Page.vue";

definePageMeta({
	layout: false,
});

const route = useRoute();
const block = computed(() => route.query.block as string);

const components = {
	sidebar: ExampleSidebar,
};

const CurrentBlock = computed(() => {
	return block.value && components[block.value as keyof typeof components];
});
</script>

<template>
  <div class="w-full h-screen overflow-hidden">
    <component :is="CurrentBlock" v-if="CurrentBlock" />
    <div v-else class="flex items-center justify-center h-full">
      <p class="text-muted-foreground">No block specified</p>
    </div>
  </div>
</template>
