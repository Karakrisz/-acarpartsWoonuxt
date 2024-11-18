<script setup lang="ts">
const { toggleMobileMenu } = useHelpers();

const links = [
  { text: "Főoldal", to: "/", prefetch: false },
  { text: "Rólunk", to: "/rolunk", prefetch: false },
  { text: "Galéria", to: "/galeria", prefetch: false },
  { text: "Étlap", to: "/products", prefetch: false },
  { text: "Kapcsolat", to: "/kapcsolat", prefetch: false },
];
</script>

<template>
  <div class="bg-white flex flex-col max-w-lg shadow-lg top-0 bottom-0 left-0 w-11/12 z-50 fixed overflow-x-hidden p-20">
    <Icon name="ion:close-outline" class="absolute p-1 rounded-lg shadow-lg top-6 left-6 md:left-8 cursor-pointer hover:text-primary transition" size="34" @click="toggleMobileMenu(false)" />

    <div class="flex flex-col items-center justify-center h-full gap-10">
      <ProductSearch class="h-fit w-full relative" />
      <nav class="flex flex-col items-center justify-center gap-10">
        <NuxtLink
v-for="link in links" :key="link.to" :to="link.to" :class="[
          'cursor-pointer text-lg transition hover:text-primary',
          link.class
        ]" active-class="text-primary" :prefetch="link.prefetch">
          {{ link.text }}
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>
