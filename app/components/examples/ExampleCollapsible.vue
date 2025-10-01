<script setup lang="ts">
import { ChevronsUpDown } from "lucide-vue-next";

import { ref } from "vue";
import { Button } from "@/registry/neobrutalism/ui/button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/registry/neobrutalism/ui/collapsible";

const isOpen = ref(false);
</script>

<template>
  <Collapsible v-model:open="isOpen" class="w-[350px] space-y-2">
    <div
      class="rounded-base flex items-center justify-between space-x-4 border-2 border-border text-main-foreground bg-main px-4 py-2"
    >
      <h4 class="text-sm font-heading">@peduarte starred 3 repositories</h4>
      <CollapsibleTrigger as-child>
        <Button
          variant="noShadow"
          size="sm"
          class="w-9 bg-secondary-background text-foreground p-0"
        >
          <ChevronsUpDown class="size-4" />
          <span class="sr-only">Toggle</span>
        </Button>
      </CollapsibleTrigger>
    </div>
    <div
      class="rounded-base border-2 border-border bg-main px-4 py-3 font-mono font-base text-main-foreground text-sm"
    >
      @radix-ui/primitives
    </div>
    <CollapsibleContent class="space-y-2 text-main-foreground font-base">
      <div
        class="rounded-base border-2 border-border bg-main px-4 py-3 font-mono text-sm"
      >
        @radix-ui/colors
      </div>
      <div
        class="rounded-base border-2 border-border bg-main px-4 py-3 font-mono text-sm"
      >
        @stitches/react
      </div>
    </CollapsibleContent>
  </Collapsible>
</template>
