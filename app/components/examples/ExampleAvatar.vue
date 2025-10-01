<script setup lang="ts">
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/registry/neobrutalism/ui/avatar";
</script>

<template>
  <Avatar>
    <AvatarImage
      src="http://github.com/michaelsieminski.png"
      alt="@michaelsieminski"
    />
    <AvatarFallback>MS</AvatarFallback>
  </Avatar>
</template>
