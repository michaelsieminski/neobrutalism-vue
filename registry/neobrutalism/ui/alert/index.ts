import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as Alert } from "./Alert.vue";
export { default as AlertDescription } from "./AlertDescription.vue";
export { default as AlertTitle } from "./AlertTitle.vue";

export const alertVariants = cva(
	"relative w-full rounded-base border-2 border-border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current shadow-shadow",
	{
		variants: {
			variant: {
				default: "bg-main text-main-foreground",
				destructive: "bg-black text-white",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

export type AlertVariants = VariantProps<typeof alertVariants>;
