<script setup lang="ts">
import "@fontsource-variable/public-sans";
import "@fontsource-variable/bricolage-grotesque";
import analytics from "roaarrr-browser";

analytics.init(
	"eyJhbGciOiJIUzI1NiJ9.eyJwcm9qZWN0SWQiOiIyZjkwZDE0Ny1hZjdhLTRiZmMtYjIzNy0wNGI3NjY1NjA4NTAiLCJpYXQiOjE3NTkzNDM0MTMsImV4cCI6MTc5MDkwMTAxM30.f7MHr_CR2GLpx7UAkyGEPKpwrUQdipgCRoTO_1t7A9M",
);
</script>

<template>
  <div class="flex flex-col w-screen h-screen overflow-hidden">
    <Navigation />

    <NuxtRouteAnnouncer />
    <div class="w-full min-h-[calc(100dvh-5rem)] pt-[6rem]">
      <NuxtPage />
    </div>
  </div>
</template>
