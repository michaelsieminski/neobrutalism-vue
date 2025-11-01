import { fileURLToPath } from "node:url";
import { resolve } from "pathe";
import tailwindcss from "@tailwindcss/vite";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));
const appPath = resolve(projectRoot, "app");
const registryPath = resolve(projectRoot, "registry");

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	alias: {
		"@": projectRoot,
		"~": appPath,
		"@registry": registryPath,
	},

	modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],

	nitro: {
		publicAssets: [
			{
				dir: "public",
				maxAge: 60 * 60 * 24 * 365,
			},
		],
	},

	vite: {
		plugins: [tailwindcss()],
	},
});
