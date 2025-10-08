<script setup lang="ts">
import type { ToastCloseProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { X } from "lucide-vue-next";
import { ToastClose } from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps<
	ToastCloseProps & {
		class?: HTMLAttributes["class"];
	}
>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <ToastClose
    v-bind="delegatedProps"
    :class="
      cn(
        'absolute right-2 top-2 rounded-base p-1 text-current opacity-0 transition-all hover:bg-border/50 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-black group-hover:opacity-100 active:scale-95',
        props.class
      )
    "
  >
    <X class="h-4 w-4" />
  </ToastClose>
</template>
