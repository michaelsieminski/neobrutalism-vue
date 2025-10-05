<script setup lang="ts">
import { Search } from "lucide-vue-next";
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/registry/neobrutalism/ui/command";
import { useComponents } from "../composables/useComponents";

const open = defineModel<boolean>({ default: false });
const router = useRouter();
const { getComponents } = useComponents();

const components = computed(() => getComponents());

const handleSelect = (componentName: string) => {
	open.value = false;
	router.push({ path: "/components", query: { component: componentName } });
};

const isMac = computed(() => {
	if (import.meta.client) {
		return navigator.platform.toUpperCase().indexOf("MAC") >= 0;
	}
	return false;
});

onMounted(() => {
	const handleKeyDown = (e: KeyboardEvent) => {
		if ((e.metaKey || e.ctrlKey) && e.key === "k") {
			e.preventDefault();
			open.value = !open.value;
		}
	};

	document.addEventListener("keydown", handleKeyDown);

	onUnmounted(() => {
		document.removeEventListener("keydown", handleKeyDown);
	});
});
</script>

<template>
  <CommandDialog v-model:open="open">
    <CommandInput placeholder="Search components..." />
    <CommandList>
      <CommandEmpty>No components found.</CommandEmpty>
      <CommandGroup heading="Components">
        <CommandItem
          v-for="component in components"
          :key="component.name"
          :value="component.title"
          @select="handleSelect(component.name)"
          class="border border-transparent hover:border-border"
        >
          <span>{{ component.title }}</span>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </CommandDialog>
</template>
