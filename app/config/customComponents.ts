import { registerCustomComponent } from "~/composables/useComponents";
import ExampleDataTable from "../components/examples/ExampleDataTable/ExampleDataTable.vue";
import ExampleDataTableRaw from "../components/examples/ExampleDataTable/ExampleDataTable.vue?raw";
import ExampleDatePicker from "../components/examples/ExampleDatePicker.vue";
import ExampleDatePickerRaw from "../components/examples/ExampleDatePicker.vue?raw";

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

registerCustomComponent({
	name: "date-picker",
	title: "Date Picker",
	description: "A date picker component with range and presets.",
	component: ExampleDatePicker,
	rawCode: ExampleDatePickerRaw,
	registryPath: "calendar",
	dependencies: ["reka-ui", "@vueuse/core"],
});
