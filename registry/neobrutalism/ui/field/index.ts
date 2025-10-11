import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export const fieldVariants = cva(
	"@container/field group/field flex w-full gap-4 rounded-base border-2 border-border bg-secondary-background p-4 font-base text-foreground shadow-shadow transition-all duration-200 ring-offset-white focus-within:outline-hidden focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2 data-[invalid=true]:border-destructive data-[invalid=true]:bg-destructive/10 data-[invalid=true]:text-destructive",
	{
		variants: {
			orientation: {
				vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
				horizontal: [
					"flex-row items-center",
					"[&>[data-slot=field-label]]:flex-auto",
					"has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
				],
				responsive: [
					"flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto",
					"@md/field-group:[&>[data-slot=field-label]]:flex-auto",
					"@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
				],
			},
		},
		defaultVariants: {
			orientation: "vertical",
		},
	},
);

export type FieldVariants = VariantProps<typeof fieldVariants>;

export { default as Field } from "./Field.vue";
export { default as FieldContent } from "./FieldContent.vue";
export { default as FieldDescription } from "./FieldDescription.vue";
export { default as FieldError } from "./FieldError.vue";
export { default as FieldGroup } from "./FieldGroup.vue";
export { default as FieldLabel } from "./FieldLabel.vue";
export { default as FieldLegend } from "./FieldLegend.vue";
export { default as FieldSet } from "./FieldSet.vue";
export { default as FieldTitle } from "./FieldTitle.vue";
