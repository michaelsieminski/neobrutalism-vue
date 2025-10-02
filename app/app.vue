<script setup lang="ts">
import "@fontsource-variable/public-sans";
import "@fontsource-variable/bricolage-grotesque";
import analytics from "roaarrr-browser";

analytics.init(
	"eyJhbGciOiJIUzI1NiJ9.eyJwcm9qZWN0SWQiOiIyZjkwZDE0Ny1hZjdhLTRiZmMtYjIzNy0wNGI3NjY1NjA4NTAiLCJpYXQiOjE3NTkzNDM0MTMsImV4cCI6MTc5MDkwMTAxM30.f7MHr_CR2GLpx7UAkyGEPKpwrUQdipgCRoTO_1t7A9M",
);

useHead({
	title: "neobrutalism-vue",
	titleTemplate: "%s | neobrutalism-vue",
	link: [
		{
			rel: "icon",
			type: "image/png",
			href: "/favicon-96x96.png",
			sizes: "96x96",
		},
		{
			rel: "icon",
			type: "image/svg+xml",
			href: "/favicon.svg",
		},
		{
			rel: "shortcut icon",
			href: "/favicon.ico",
		},
		{
			rel: "apple-touch-icon",
			sizes: "180x180",
			href: "/apple-touch-icon.png",
		},
		{
			rel: "manifest",
			href: "/site.webmanifest",
		},
	],
	meta: [
		{
			name: "apple-mobile-web-app-title",
			content: "neobrutalism-vue",
		},
	],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
