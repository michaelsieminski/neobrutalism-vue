<script setup lang="ts">
import {
	ArrowUpIcon,
	CheckIcon,
	InfoIcon,
	PlusIcon,
	Search,
} from "lucide-vue-next";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/registry/neobrutalism/ui/dropdown-menu";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
	InputGroupText,
	InputGroupTextarea,
} from "@/registry/neobrutalism/ui/input-group";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
	TooltipProvider,
} from "@/registry/neobrutalism/ui/tooltip";
</script>

<template>
  <div class="grid w-full max-w-sm gap-6">
    <InputGroup>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end"> 12 results </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput placeholder="example.com" class="!pl-1" />
      <InputGroupAddon>
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <InputGroupButton class="rounded-full" size="icon-xs">
                <InfoIcon class="size-4" />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>This is content in a tooltip.</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupTextarea placeholder="Ask, Search or Chat..." />
      <InputGroupAddon align="block-end">
        <InputGroupButton
          variant="noShadow"
          class="rounded-full"
          size="icon-xs"
        >
          <PlusIcon class="size-4" />
        </InputGroupButton>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <InputGroupButton variant="ghost"> Auto </InputGroupButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="top"
            align="start"
            class="[--radius:0.95rem]"
          >
            <DropdownMenuItem>Auto</DropdownMenuItem>
            <DropdownMenuItem>Agent</DropdownMenuItem>
            <DropdownMenuItem>Manual</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <InputGroupText class="ml-auto"> 52% used </InputGroupText>
        <InputGroupButton
          variant="noShadow"
          class="rounded-full"
          size="icon-xs"
          disabled
        >
          <ArrowUpIcon class="size-4" />
          <span class="sr-only">Send</span>
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput placeholder="@shadcn" />
      <InputGroupAddon align="inline-end">
        <div
          class="flex items-center justify-center rounded-full bg-main text-main-foreground size-4"
        >
          <CheckIcon class="size-3" />
        </div>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
