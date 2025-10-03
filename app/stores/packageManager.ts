import { defineStore } from "pinia";

export type PackageManager = "bun" | "pnpm" | "npm" | "yarn";

export const usePackageManagerStore = defineStore("packageManager", {
	state: () => ({
		selected: "bun" as PackageManager,
	}),

	actions: {
		setPackageManager(manager: PackageManager) {
			this.selected = manager;
		},
	},

	persist: true,
});
