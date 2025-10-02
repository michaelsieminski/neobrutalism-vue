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

useHead({
	title: computed(() => {
		const blockName = block.value;
		return blockName
			? `${blockName.charAt(0).toUpperCase() + blockName.slice(1)} Block`
			: "Block Renderer";
	}),
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
