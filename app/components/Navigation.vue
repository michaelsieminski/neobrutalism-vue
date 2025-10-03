<script setup lang="ts">
import { Button } from "@registry/neobrutalism/ui/button";
import { Puzzle, Github } from "lucide-vue-next";

const stars = ref<string>("...");

const formatStarCount = (count: number): string => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
};

const fetchGithubStars = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/repos/michaelsieminski/neobrutalism-vue"
    );
    const data = await response.json();
    stars.value = formatStarCount(data.stargazers_count);
  } catch (error) {
    stars.value = "0";
  }
};

onMounted(() => {
  fetchGithubStars();
});
</script>

<template>
  <nav
    class="fixed top-2 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between overflow-hidden border border-border shadow-shadow gap-2 w-[calc(100%-1rem)] max-w-xl xl:max-w-3xl 2xl:max-w-5xl bg-main p-3 sm:p-4 rounded-base"
  >
    <NuxtLink to="/">
      <p
        class="ml-18 sm:ml-0 sm:text-xl font-title truncate max-w-[180px] sm:max-w-none"
      >
        neobrutalism-vue
      </p>
    </NuxtLink>

    <div class="flex items-center gap-2">
      <NuxtLink to="/components">
        <Button
          variant="neutral"
          class="text-sm sm:text-base py-2 px-3 sm:py-3 sm:px-4"
        >
          <Puzzle class="w-4 h-4 sm:w-5 sm:h-5" />
          <span class="hidden sm:inline">Components</span>
        </Button>
      </NuxtLink>

      <a
        href="https://github.com/michaelsieminski/neobrutalism-vue"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="neutral"
          class="text-sm sm:text-base py-2 px-3 sm:py-3 sm:px-4"
        >
          <Github class="w-4 h-4 sm:w-5 sm:h-5" />
          <span class="hidden sm:inline">{{ stars }}</span>
        </Button>
      </a>

      <a
        href="https://x.com/michaelsiemin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="neutral"
          class="text-sm sm:text-base py-2 px-3 sm:py-3 sm:px-4"
        >
          <svg
            class="w-4 h-4 sm:w-5 sm:h-5"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path
              d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
            />
          </svg>
        </Button>
      </a>
    </div>
  </nav>
</template>
