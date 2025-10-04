import { registerCustomComponent } from "~/composables/useComponents";
import ExampleDataTable from "../components/examples/ExampleDataTable/ExampleDataTable.vue";
import ExampleDataTableRaw from "../components/examples/ExampleDataTable/ExampleDataTable.vue?raw";

registerCustomComponent({
	name: "data-table",
	title: "Data Table",
	description: "Powerful table and datagrids built using TanStack Table.",
	component: ExampleDataTable,
	rawCode: ExampleDataTableRaw,
	registryPath: "table",
	dependencies: [
		"@tanstack/vue-table",
		"reka-ui",
		"@vueuse/core",
		"lucide-vue-next",
	],
	registryDependencies: [
		"button",
		"checkbox",
		"dropdown-menu",
		"input",
		"table",
	],
});
