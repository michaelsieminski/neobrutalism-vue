<script setup lang="ts">
import { toast } from "vue-sonner";

import { Button } from "@/registry/neobrutalism/ui/button";
</script>

<template>
  <Button
    variant="noShadow"
    @click="
      () =>
        toast('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo'),
          },
        })
    "
  >
    Show Toast
  </Button>
</template>
