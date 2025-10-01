<script setup lang="ts">
import { Label } from "@registry/neobrutalism/ui/label";
import { Input } from "@registry/neobrutalism/ui/input";
</script>

<template>
  <Label for="email">Email</Label>
  <Input id="email" class="w-[200px]" type="email" placeholder="Email" />
</template>
