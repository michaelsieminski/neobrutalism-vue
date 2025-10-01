<script setup lang="ts">
import { Button } from "@registry/neobrutalism/ui/button";
import { Input } from "@registry/neobrutalism/ui/input";
import { Label } from "@registry/neobrutalism/ui/label";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@registry/neobrutalism/ui/sheet";
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button> Open </Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>
      <div class="grid flex-1 auto-rows-min gap-6 px-4">
        <div class="grid gap-3">
          <Label for="name"> Name </Label>
          <Input id="name" default-value="Pedro Duarte" />
        </div>
        <div class="grid gap-3">
          <Label for="username"> Username </Label>
          <Input id="username" default-value="@peduarte" />
        </div>
      </div>
      <SheetFooter>
        <Button type="submit">Save changes</Button>
        <SheetClose asChild>
          <Button variant="neutral">Close</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>
