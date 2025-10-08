<script setup lang="ts">
import { Button } from "@/registry/neobrutalism/ui/button";
import { toast } from "@/registry/neobrutalism/ui/toast";
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-2">
      <Button
        @click="
          toast({
            title: 'Notification',
            description: 'Your message has been sent successfully.',
          })
        "
      >
        Show Toast
      </Button>
      <Button
        variant="neutral"
        @click="
          toast({
            title: 'Success',
            description: 'Your changes have been saved.',
          })
        "
      >
        Show Neutral Toast
      </Button>
      <Button
        @click="
          toast({
            title: 'Error',
            description: 'Something went wrong. Please try again.',
            variant: 'destructive',
          })
        "
      >
        Show Error Toast
      </Button>
    </div>
  </div>
</template>
