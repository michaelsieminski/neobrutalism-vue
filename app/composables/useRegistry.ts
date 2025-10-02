import registryDataImport from "@/registry.json";

export interface RegistryItem {
	name: string;
	type: string;
	title: string;
	description: string;
	dependencies?: string[];
	registryDependencies?: string[];
	files: Array<{
		path: string;
		type: string;
	}>;
}

export interface RegistryData {
	items: RegistryItem[];
}

export const useRegistry = () => {
	const registryData = registryDataImport as RegistryData;

	const getComponents = () => {
		return registryData.items.filter(
			(item: RegistryItem) => item.type === "registry:ui",
		);
	};

	const getComponent = (name: string) => {
		return registryData.items.find((item: RegistryItem) => item.name === name);
	};

	return {
		registryData,
		getComponents,
		getComponent,
	};
};
