<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { codeToHtml } from "shiki";

const props = defineProps<{
	code: string;
	language?: string;
}>();

const highlightedCode = ref("");

watchEffect(async () => {
	if (props.code) {
		highlightedCode.value = await codeToHtml(props.code, {
			lang: props.language || "vue",
			theme: "github-dark",
		});
	}
});
</script>

<template>
  <div
    class="bg-black text-gray-100 p-6 rounded-lg overflow-x-auto border-4 border-black [&_pre]:!bg-transparent [&_pre]:!p-0 [&_pre]:!m-0"
    v-html="highlightedCode"
  />
</template>
