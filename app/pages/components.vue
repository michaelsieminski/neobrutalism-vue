<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Button } from "@registry/neobrutalism/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from "@registry/neobrutalism/ui/sheet";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@registry/neobrutalism/ui/tabs";
import { ScrollArea } from "@registry/neobrutalism/ui/scroll-area";
import { Menu } from "lucide-vue-next";
import { useRegistry, type RegistryItem } from "~/composables/useRegistry";
import {
	useComponents,
	isCustomComponent,
	type ComponentItem,
} from "~/composables/useComponents";
import CodeBlock from "~/components/CodeBlock.vue";
import { usePackageManagerStore } from "~/stores/packageManager";
import "~/config/customComponents";

const isMobileMenuOpen = ref(false);
const packageManagerStore = usePackageManagerStore();

import ExampleAccordion from "~/components/examples/ExampleAccordion.vue";
import ExampleAvatar from "~/components/examples/ExampleAvatar.vue";
import ExampleBreadcrumb from "~/components/examples/ExampleBreadcrumb.vue";
import ExampleButton from "~/components/examples/ExampleButton.vue";
import ExampleCalendar from "~/components/examples/ExampleCalendar.vue";
import ExampleCarousel from "~/components/examples/ExampleCarousel.vue";
import ExampleCollapsible from "~/components/examples/ExampleCollapsible.vue";
import ExampleDropdownMenu from "~/components/examples/ExampleDropdownMenu.vue";
import ExampleInput from "~/components/examples/ExampleInput.vue";
import ExampleLabel from "~/components/examples/ExampleLabel.vue";
import ExampleSheet from "~/components/examples/ExampleSheet.vue";
import ExampleSkeleton from "~/components/examples/ExampleSkeleton.vue";
import ExampleTooltip from "~/components/examples/ExampleTooltip.vue";
import ExampleSidebar from "../components/examples/ExampleSidebar/ExampleSidebar.vue";
import ExampleSelect from "~/components/examples/ExampleSelect.vue";
import ExampleCard from "~/components/examples/ExampleCard.vue";
import ExampleTabs from "~/components/examples/ExampleTabs.vue";
import ExampleAlert from "~/components/examples/ExampleAlert.vue";
import ExampleAlertDialog from "~/components/examples/ExampleAlertDialog.vue";
import ExampleScrollArea from "~/components/examples/ExampleScrollArea.vue";
import ExampleBadge from "~/components/examples/ExampleBadge.vue";
import ExampleCheckbox from "~/components/examples/ExampleCheckbox.vue";
import ExampleCombobox from "~/components/examples/ExampleCombobox.vue";
import ExampleDialog from "~/components/examples/ExampleDialog.vue";
import ExampleCommand from "~/components/examples/ExampleCommand.vue";
import ExampleContextMenu from "~/components/examples/ExampleContextMenu.vue";
import ExampleTable from "~/components/examples/ExampleTable.vue";

import ExampleAccordionRaw from "~/components/examples/ExampleAccordion.vue?raw";
import ExampleAvatarRaw from "~/components/examples/ExampleAvatar.vue?raw";
import ExampleBreadcrumbRaw from "~/components/examples/ExampleBreadcrumb.vue?raw";
import ExampleButtonRaw from "~/components/examples/ExampleButton.vue?raw";
import ExampleCalendarRaw from "~/components/examples/ExampleCalendar.vue?raw";
import ExampleCarouselRaw from "~/components/examples/ExampleCarousel.vue?raw";
import ExampleCollapsibleRaw from "~/components/examples/ExampleCollapsible.vue?raw";
import ExampleDropdownMenuRaw from "~/components/examples/ExampleDropdownMenu.vue?raw";
import ExampleInputRaw from "~/components/examples/ExampleInput.vue?raw";
import ExampleLabelRaw from "~/components/examples/ExampleLabel.vue?raw";
import ExampleSheetRaw from "~/components/examples/ExampleSheet.vue?raw";
import ExampleSkeletonRaw from "~/components/examples/ExampleSkeleton.vue?raw";
import ExampleTooltipRaw from "~/components/examples/ExampleTooltip.vue?raw";
import ExampleSelectRaw from "~/components/examples/ExampleSelect.vue?raw";
import ExampleCardRaw from "~/components/examples/ExampleCard.vue?raw";
import ExampleTabsRaw from "~/components/examples/ExampleTabs.vue?raw";
import ExampleAlertRaw from "~/components/examples/ExampleAlert.vue?raw";
import ExampleSidebarUsageRaw from "../components/examples/ExampleSidebar/ExampleSidebarUsage.vue?raw";
import ExampleAlertDialogRaw from "~/components/examples/ExampleAlertDialog.vue?raw";
import ExampleScrollAreaRaw from "~/components/examples/ExampleScrollArea.vue?raw";
import ExampleBadgeRaw from "~/components/examples/ExampleBadge.vue?raw";
import ExampleCheckboxRaw from "~/components/examples/ExampleCheckbox.vue?raw";
import ExampleComboboxRaw from "~/components/examples/ExampleCombobox.vue?raw";
import ExampleDialogRaw from "~/components/examples/ExampleDialog.vue?raw";
import ExampleCommandRaw from "~/components/examples/ExampleCommand.vue?raw";
import ExampleContextMenuRaw from "~/components/examples/ExampleContextMenu.vue?raw";
import ExampleTableRaw from "~/components/examples/ExampleTable.vue?raw";

const route = useRoute();
const router = useRouter();

const searchQuery = ref("");

const { getComponents, getComponentByName } = useComponents();

const components = computed(() => {
	return getComponents();
});

const filteredComponents = computed(() => {
	if (!searchQuery.value) return components.value;
	const query = searchQuery.value.toLowerCase();
	return components.value.filter(
		(c: ComponentItem) =>
			c.title.toLowerCase().includes(query) ||
			c.name.toLowerCase().includes(query),
	);
});

const selectedComponent = computed(() => {
	const name = route.query.component as string;
	if (!name) return components.value[0] || null;
	return getComponentByName(name) || components.value[0] || null;
});

useHead({
	title: computed(() =>
		selectedComponent.value ? selectedComponent.value.title : "Components",
	),
});

const selectComponent = (componentName: string) => {
	router.push({ query: { component: componentName } });
	isMobileMenuOpen.value = false;
};

onMounted(() => {
	if (!route.query.component && components.value[0]) {
		router.push({ query: { component: components.value[0].name } });
	}
});

const getExampleComponent = (component: ComponentItem) => {
	if (isCustomComponent(component)) {
		return component.component;
	}

	const exampleMap: Record<string, any> = {
		accordion: ExampleAccordion,
		avatar: ExampleAvatar,
		breadcrumb: ExampleBreadcrumb,
		button: ExampleButton,
		calendar: ExampleCalendar,
		carousel: ExampleCarousel,
		collapsible: ExampleCollapsible,
		"dropdown-menu": ExampleDropdownMenu,
		input: ExampleInput,
		label: ExampleLabel,
		sheet: ExampleSheet,
		skeleton: ExampleSkeleton,
		tooltip: ExampleTooltip,
		sidebar: ExampleSidebar,
		select: ExampleSelect,
		card: ExampleCard,
		tabs: ExampleTabs,
		alert: ExampleAlert,
		"alert-dialog": ExampleAlertDialog,
		"scroll-area": ExampleScrollArea,
		badge: ExampleBadge,
		checkbox: ExampleCheckbox,
		combobox: ExampleCombobox,
		dialog: ExampleDialog,
		command: ExampleCommand,
		"context-menu": ExampleContextMenu,
		table: ExampleTable,
	};
	return exampleMap[component.name];
};

const getExampleComponentRaw = (component: ComponentItem) => {
	if (isCustomComponent(component)) {
		return component.rawCode;
	}

	const exampleRawMap: Record<string, string> = {
		accordion: ExampleAccordionRaw,
		avatar: ExampleAvatarRaw,
		breadcrumb: ExampleBreadcrumbRaw,
		button: ExampleButtonRaw,
		calendar: ExampleCalendarRaw,
		carousel: ExampleCarouselRaw,
		collapsible: ExampleCollapsibleRaw,
		"dropdown-menu": ExampleDropdownMenuRaw,
		input: ExampleInputRaw,
		label: ExampleLabelRaw,
		sheet: ExampleSheetRaw,
		skeleton: ExampleSkeletonRaw,
		tooltip: ExampleTooltipRaw,
		select: ExampleSelectRaw,
		card: ExampleCardRaw,
		tabs: ExampleTabsRaw,
		alert: ExampleAlertRaw,
		sidebar: ExampleSidebarUsageRaw,
		"alert-dialog": ExampleAlertDialogRaw,
		"scroll-area": ExampleScrollAreaRaw,
		badge: ExampleBadgeRaw,
		checkbox: ExampleCheckboxRaw,
		combobox: ExampleComboboxRaw,
		dialog: ExampleDialogRaw,
		command: ExampleCommandRaw,
		"context-menu": ExampleContextMenuRaw,
		table: ExampleTableRaw,
	};

	return exampleRawMap[component.name];
};

const getInstallCommands = (component: ComponentItem) => {
	const registryPath =
		isCustomComponent(component) && component.registryPath
			? component.registryPath
			: component.name;

	const url = `https://neobrutalism-vue.com/r/${registryPath}.json`;

	return {
		npm: `npx shadcn-vue@latest add ${url}`,
		pnpm: `pnpm dlx shadcn-vue@latest add ${url}`,
		bun: `bunx shadcn-vue@latest add ${url}`,
		yarn: `yarn dlx shadcn-vue@latest add ${url}`,
	};
};

const getUsageCode = (component: ComponentItem) => {
	const rawCode = getExampleComponentRaw(component);
	return rawCode || "";
};
</script>

<template>
  <div class="flex h-full w-full">
    <aside
      class="hidden lg:block w-64 my-auto ml-2 border-4 rounded-base border-black bg-white fixed top-1/2 -translate-y-1/2"
    >
      <ScrollArea class="h-[calc(100vh-1rem)] max-h-[800px]">
        <nav class="p-4">
          <ul class="space-y-2">
            <li v-for="component in filteredComponents" :key="component.name">
              <button
                @click="selectComponent(component.name)"
                :class="[
                  'w-full text-left px-4 py-3 rounded-md border-2 border-black transition-all',
                  selectedComponent?.name === component.name
                    ? 'bg-main translate-x-1 -translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -ml-1'
                    : 'bg-white hover:bg-gray-50 hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
                ]"
              >
                <span class="font-semibold">{{ component.title }}</span>
              </button>
            </li>
          </ul>
        </nav>
      </ScrollArea>
    </aside>

    <main
      class="max-w-xl xl:max-w-3xl 2xl:max-w-5xl w-[calc(100%-1rem)] mx-auto pt-20 sm:pt-24"
    >
      <div class="lg:hidden fixed top-5 left-6 z-50">
        <Sheet v-model:open="isMobileMenuOpen">
          <SheetTrigger as-child>
            <Button variant="neutral" size="icon" class="shadow-lg">
              <Menu class="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" class="w-[280px] sm:w-[320px] p-0">
            <ScrollArea class="h-[calc(100vh-120px)] mt-12">
              <nav class="p-4">
                <ul class="space-y-2">
                  <li
                    v-for="component in filteredComponents"
                    :key="component.name"
                  >
                    <button
                      @click="selectComponent(component.name)"
                      :class="[
                        'w-full text-left px-4 py-3 rounded-md border-2 border-black transition-all',
                        selectedComponent?.name === component.name
                          ? 'bg-main translate-x-1 -translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -ml-1'
                          : 'bg-white hover:bg-gray-50',
                      ]"
                    >
                      <span class="font-semibold">{{ component.title }}</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>

      <div class="py-5" v-if="selectedComponent">
        <div class="mb-6 lg:mb-8">
          <h1
            class="text-2xl sm:text-3xl lg:text-4xl font-bold font-title mb-2"
          >
            {{ selectedComponent.title }}
          </h1>
          <p class="text-base sm:text-lg">
            {{ selectedComponent.description }}
          </p>
        </div>

        <section class="mb-6 lg:mb-8">
          <div
            class="border-4 border-black p-4 sm:p-5 bg-white rounded-base overflow-x-auto flex items-center justify-center"
          >
            <component
              :is="getExampleComponent(selectedComponent)"
              v-if="getExampleComponent(selectedComponent)"
            />
            <div v-else class="text-black">Preview could not be loaded</div>
          </div>
        </section>

        <section
          class="mb-6 lg:mb-8"
          v-if="getInstallCommands(selectedComponent)"
        >
          <div class="border-4 border-black p-4 sm:p-5 bg-white rounded-base">
            <h2
              class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2"
            >
              Installation
            </h2>
            <Tabs v-model="packageManagerStore.selected" class="w-full">
              <TabsList class="grid w-full grid-cols-4">
                <TabsTrigger value="bun">bun</TabsTrigger>
                <TabsTrigger value="pnpm">pnpm</TabsTrigger>
                <TabsTrigger value="npm">npm</TabsTrigger>
                <TabsTrigger value="yarn">yarn</TabsTrigger>
              </TabsList>
              <TabsContent value="bun">
                <CodeBlock
                  :code="getInstallCommands(selectedComponent)!.bun"
                  language="bash"
                />
              </TabsContent>
              <TabsContent value="pnpm">
                <CodeBlock
                  :code="getInstallCommands(selectedComponent)!.pnpm"
                  language="bash"
                />
              </TabsContent>
              <TabsContent value="npm">
                <CodeBlock
                  :code="getInstallCommands(selectedComponent)!.npm"
                  language="bash"
                />
              </TabsContent>
              <TabsContent value="yarn">
                <CodeBlock
                  :code="getInstallCommands(selectedComponent)!.yarn"
                  language="bash"
                />
              </TabsContent>
            </Tabs>

            <div
              v-if="selectedComponent.dependencies?.length"
              class="mt-4 sm:mt-6"
            >
              <h3 class="font-bold mb-3 text-base sm:text-lg">Dependencies:</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="dep in selectedComponent.dependencies"
                  :key="dep"
                  class="px-2 sm:px-3 py-1 bg-white border-2 border-black rounded text-xs sm:text-sm font-mono"
                >
                  {{ dep }}
                </span>
              </div>
            </div>

            <div
              v-if="selectedComponent.registryDependencies?.length"
              class="mt-4"
            >
              <h3 class="font-bold mb-3 text-base sm:text-lg">
                Registry Dependencies:
              </h3>
              <div class="flex flex-wrap gap-2">
                <button
                  v-for="dep in selectedComponent.registryDependencies"
                  :key="dep"
                  @click="selectComponent(dep)"
                  class="px-2 sm:px-3 py-1 bg-main border-2 border-black rounded text-xs sm:text-sm font-mono hover:bg-main/50 transition-colors"
                >
                  {{ dep }}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section class="mb-6 lg:mb-8">
          <div class="border-4 border-black p-4 sm:p-5 bg-white rounded-base">
            <h2
              class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2"
            >
              Usage
            </h2>
            <div class="overflow-x-auto">
              <CodeBlock
                :code="getUsageCode(selectedComponent) || ''"
                language="vue"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
