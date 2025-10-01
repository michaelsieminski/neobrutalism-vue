<script setup lang="ts">
import ExampleButton from "~/components/examples/ExampleButton.vue";
import ExampleSheet from "~/components/examples/ExampleSheet.vue";
import ExampleInput from "~/components/examples/ExampleInput.vue";
import ExampleLabel from "~/components/examples/ExampleLabel.vue";
import ExampleTooltip from "~/components/examples/ExampleTooltip.vue";
</script>

<template>
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
  </div>
</template>
