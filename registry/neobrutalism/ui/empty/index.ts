import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as Empty } from "./Empty.vue";
export { default as EmptyContent } from "./EmptyContent.vue";
export { default as EmptyDescription } from "./EmptyDescription.vue";
export { default as EmptyHeader } from "./EmptyHeader.vue";
export { default as EmptyMedia } from "./EmptyMedia.vue";
export { default as EmptyTitle } from "./EmptyTitle.vue";

export const emptyMediaVariants = cva(
	"mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "bg-transparent [&_svg:not([class*='size-'])]:size-12",
				icon: "bg-main text-main-foreground border-2 border-border shadow-shadow flex size-16 shrink-0 items-center justify-center rounded-base [&_svg:not([class*='size-'])]:size-8",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

export type EmptyMediaVariants = VariantProps<typeof emptyMediaVariants>;
