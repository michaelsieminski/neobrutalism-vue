<script setup lang="ts">
import ExampleButton from "~/components/examples/ExampleButton.vue";
import ExampleSheet from "~/components/examples/ExampleSheet.vue";
import ExampleInput from "~/components/examples/ExampleInput.vue";
import ExampleLabel from "~/components/examples/ExampleLabel.vue";
import ExampleTooltip from "~/components/examples/ExampleTooltip.vue";
import ExampleSkeleton from "~/components/examples/ExampleSkeleton.vue";
import ExampleDropdownMenu from "~/components/examples/ExampleDropdownMenu.vue";
import ExampleBreadcrumb from "~/components/examples/ExampleBreadcrumb.vue";
import ExampleCollapsible from "~/components/examples/ExampleCollapsible.vue";
import ExampleAvatar from "~/components/examples/ExampleAvatar.vue";
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="flex flex-wrap gap-4">
      <div class="w-96 h-fit p-2">
        <h1 class="mb-2">Buttons</h1>
        <ExampleButton />
      </div>

      <div class="w-96 h-fit p-2">
        <h1 class="mb-2">Input</h1>
        <ExampleInput />
      </div>

      <div class="w-96 h-fit p-2">
        <h1 class="mb-2">Label</h1>
        <ExampleLabel />
      </div>

      <div class="w-96 h-fit p-2">
        <h1 class="mb-2">Sheet</h1>
        <ExampleSheet />
      </div>

      <div class="w-96 h-fit p-2">
        <h1 class="mb-2">Tooltip</h1>
        <ExampleTooltip />
      </div>

      <div class="w-96 h-fit p-2">
        <h1 class="mb-2">Skeleton</h1>
        <ExampleSkeleton />
      </div>

      <div class="w-96 h-fit p-2">
        <h1 class="mb-2">Dropdown Menu</h1>
        <ExampleDropdownMenu />
      </div>

      <div class="w-96 h-fit p-2">
        <h1 class="mb-2">Breadcrumb</h1>
        <ExampleBreadcrumb />
      </div>

      <div class="w-96 h-fit p-2">
        <h1 class="mb-2">Collapsible</h1>
        <ExampleCollapsible />
      </div>

      <div class="w-96 h-fit p-2">
        <h1 class="mb-2">Avatar</h1>
        <ExampleAvatar />
      </div>

      <div class="w-full max-w-6xl h-[40rem] p-2">
        <h1 class="mb-2">Sidebar</h1>
        <iframe
          src="/block-renderer?block=sidebar"
          class="w-full h-full border-0"
          title="Sidebar Example"
        />
      </div>
    </div>
  </div>
</template>
