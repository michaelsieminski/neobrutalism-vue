import { type Component } from "vue";
import { useRegistry, type RegistryItem } from "./useRegistry";

export interface CustomComponentItem {
	name: string;
	title: string;
	description: string;
	component: Component;
	rawCode: string;
	dependencies?: string[];
	registryDependencies?: string[];
	registryPath?: string;
	isCustom: true;
}

export type ComponentItem = RegistryItem | CustomComponentItem;

export const isCustomComponent = (
	item: ComponentItem,
): item is CustomComponentItem => {
	return "isCustom" in item && item.isCustom === true;
};

const customComponents: CustomComponentItem[] = [];

type CustomComponentInput = Omit<CustomComponentItem, "isCustom">;

export const registerCustomComponent = (component: CustomComponentInput) => {
	const fullComponent: CustomComponentItem = {
		...component,
		isCustom: true,
	};

	const existingIndex = customComponents.findIndex(
		(c) => c.name === component.name,
	);
	if (existingIndex >= 0) {
		customComponents[existingIndex] = fullComponent;
	} else {
		customComponents.push(fullComponent);
	}
};

export const useComponents = () => {
	const { getComponents: getRegistryComponents, getComponent } = useRegistry();

	const getComponents = (): ComponentItem[] => {
		const registryComponents = getRegistryComponents();
		return [...registryComponents, ...customComponents].sort((a, b) =>
			a.title.localeCompare(b.title),
		);
	};

	const getComponentByName = (name: string): ComponentItem | undefined => {
		const customComponent = customComponents.find((c) => c.name === name);
		if (customComponent) return customComponent;
		return getComponent(name);
	};

	const getCustomComponents = () => customComponents;

	return {
		getComponents,
		getComponentByName,
		getCustomComponents,
		isCustomComponent,
	};
};
