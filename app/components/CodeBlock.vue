<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { codeToHtml } from "shiki";
import { Copy, Check } from "lucide-vue-next";
import { Button } from "@registry/neobrutalism/ui/button";
import analytics from "roaarrr-browser";

const props = defineProps<{
	code: string;
	language?: string;
}>();

const highlightedCode = ref("");
const copied = ref(false);

watchEffect(async () => {
	if (props.code) {
		highlightedCode.value = await codeToHtml(props.code, {
			lang: props.language || "vue",
			theme: "github-dark",
		});
	}
});

const copyCode = async () => {
	try {
		await navigator.clipboard.writeText(props.code);
		copied.value = true;

		analytics.funnel("activation", {
			action: "copy_code",
			language: props.language || "vue",
		});

		setTimeout(() => {
			copied.value = false;
		}, 2000);
	} catch (err) {
		console.error("Failed to copy:", err);
	}
};
</script>

<template>
  <div class="relative">
    <Button
      @click="copyCode"
      variant="neutral"
      class="absolute top-5 right-4 z-10 py-2 px-3 hover:translate-none"
    >
      <Check v-if="copied" class="w-4 h-4" />
      <Copy v-else class="w-4 h-4" />
    </Button>
    <div
      class="bg-black text-gray-100 p-6 rounded-lg overflow-x-auto border-4 border-black [&_pre]:!bg-transparent [&_pre]:!p-0 [&_pre]:!m-0"
      v-html="highlightedCode"
    />
  </div>
</template>
