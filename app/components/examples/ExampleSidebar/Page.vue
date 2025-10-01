<script lang="ts">
export const description = "A sidebar that collapses to icons.";
export const iframeHeight = "800px";
export const containerClass = "w-full h-full";
</script>

<script setup lang="ts">
import AppSidebar from "./components/AppSidebar.vue";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/neobrutalism/ui/breadcrumb";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/neobrutalism/ui/sidebar";
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <header
        class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
      >
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem class="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator class="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div class="grid auto-rows-min gap-4 md:grid-cols-3">
          <div
            class="aspect-video rounded-base bg-background/50 border-2 border-border"
          />
          <div
            class="aspect-video rounded-base bg-background/50 border-2 border-border"
          />
          <div
            class="aspect-video rounded-base bg-background/50 border-2 border-border"
          />
        </div>
        <div
          class="min-h-[100vh] flex-1 rounded-base bg-background/50 border-2 border-border md:min-h-min"
        />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
