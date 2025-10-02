<script setup lang="ts">
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@registry/neobrutalism/ui/accordion";

const defaultValue = "item-1";

const accordionItems = [
	{
		value: "item-1",
		title: "Is it accessible?",
		content: "Yes. It adheres to the WAI-ARIA design pattern.",
	},
	{
		value: "item-2",
		title: "Is it styled?",
		content:
			"Yes. It's styled by default, giving you the vibe of neobrutalism.",
	},
	{
		value: "item-3",
		title: "Can it be animated?",
		content: "Yes! You can use the transition prop to configure the animation.",
	},
];
</script>

<template>
  <Accordion
    type="single"
    class="w-full"
    collapsible
    :default-value="defaultValue"
  >
    <AccordionItem
      v-for="item in accordionItems"
      :key="item.value"
      :value="item.value"
      class="mb-4"
    >
      <AccordionTrigger>{{ item.title }}</AccordionTrigger>
      <AccordionContent>
        {{ item.content }}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
