<script setup lang="ts">
// const links = [
//   { name: 'Rólunk', link: '/', prefetch: true },
//   { name: 'Galéria', link: '/' },
//   { name: 'Étlap', link: '/', prefetch: true },
//   { name: 'Kapcsolat', link: '/' },
// ];
</script>
<!-- 
<template>
  <header class="z-50 sticky top-0 bg-white">
    <div class="container flex justify-between items-center py-4 gap-10">
      <MenuTrigger class="lg:hidden" />

      <NuxtLink to="/" class="shrink-0">
        <NuxtImg src="/img/logo.svg" class="" />
      </NuxtLink>
      <div class="space-x-16 lg:flex items-center hidden">
        <NuxtLink v-for="link in links" :key="link.name" :to="link.link" class="">{{ link.name }}</NuxtLink>
      </div>
      <div class="flex gap-4">
        <ProductSearch class="hidden md:inline-flex max-w-[320px]" />
        <SignInLink />
        <CartTrigger />
      </div>
    </div>
  </header>
</template> -->

<template>
  <div class="flex flex-col">
    <header class="z-50 sticky top-0 bg-primary d-none">
      <div class="container flex justify-between items-center py-4 gap-10">
        <MenuTrigger class="lg:hidden" />

        <NuxtLink to="/" class="shrink-0">
          <NuxtImg src="/img/logo.svg" class="" />
        </NuxtLink>
        <!-- <div class="space-x-16 lg:flex items-center hidden">
        <NuxtLink v-for="link in links" :key="link.name" :to="link.link" class="">{{ link.name }}</NuxtLink>
      </div>
      <div class="flex gap-4">
        <ProductSearch class="hidden md:inline-flex max-w-[320px]" />
        <SignInLink />
        <CartTrigger />
      </div> -->
      </div>
    </header>
    <!-- Top header - hidden on mobile, visible on lg and up -->
    <header class="hidden py-4 text-sm text-white bg-dark lg:block">
      <div class="container px-4 mx-auto">
        <div class="flex items-center justify-between">
          <nav>
            <ul class="flex space-x-6">
              <li><a href="#" class="hover:text-gray">Request a Quote</a></li>
              <li><a href="#" class="hover:text-gray">Prices</a></li>
              <li><a href="#" class="hover:text-gray">About Us</a></li>
            </ul>
          </nav>
          <div class="flex items-center space-x-4">
            <div class="flex items-center">
              <PhosphorIconPhone class="mr-2" />
              <span>0670 37 71 506</span>
            </div>
            <div class="flex items-center">
              <PhosphorIconEnvelope class="mr-2" />
              <span>lengyelmarket@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main navigation -->
    <nav class="py-4 text-white bg-primary">
      <div class="container px-4 mx-auto">
        <div class="flex flex-col items-center justify-between md:gap-14 lg:flex-row">
          <div class="flex items-center justify-between w-full mb-4 lg:w-auto lg:mb-0">
            <div class="flex items-center shrink-0">
              <NuxtImg src="/img/logo.svg" alt="Acarparts Logo" class="w-[150px] mr-[50px] shrink-0" />
            </div>
            <!-- <div class="space-x-16 lg:flex items-center hidden">
              <NuxtLink v-for="link in links" :key="link.name" :to="link.link" class="">{{ link.name }}</NuxtLink>
            </div> -->
            <!-- Mobile menu button -->
            <!-- <MobileMenu class="lg:hidden">
              <template #trigger>
                <button class="text-white focus:outline-none">
                  <PhosphorIconList :size="24" weight="bold" />
                </button>
              </template>
<div class="p-6">
  <div class="flex justify-center gap-10 mb-8">
    <button class="transition-colors text-primary hover:text-primary-dark">
      <PhosphorIconUser size="28" weight="bold" />
    </button>
    <button class="transition-colors text-primary hover:text-primary-dark">
      <PhosphorIconHeart size="28" weight="bold" />
    </button>
    <button class="transition-colors text-primary hover:text-primary-dark">
      <PhosphorIconShoppingCart size="28" weight="bold" />
    </button>
  </div>
  <div class="flex flex-col gap-4">
    <NuxtLink to="/"
      class="py-2 font-semibold uppercase transition-colors border-b border-gray-200 text-dark hover:text-primary">
      Request a Quote</NuxtLink>
    <NuxtLink to="/"
      class="py-2 font-semibold uppercase transition-colors border-b border-gray-200 text-dark hover:text-primary">
      Prices</NuxtLink>
    <NuxtLink to="/"
      class="py-2 font-semibold uppercase transition-colors border-b border-gray-200 text-dark hover:text-primary">About
      Us</NuxtLink>
  </div>
  <div class="mt-8 space-y-4">
    <div class="flex items-center text-dark">
      <PhosphorIconPhone weight="bold" class="mr-3 text-primary" size="20" />
      <span class="text-sm">0670 37 71 506</span>
    </div>
    <div class="flex items-center text-dark">
      <PhosphorIconEnvelope weight="bold" class="mr-3 text-primary" size="20" />
      <span class="text-sm">lengyelmarket@gmail.com</span>
    </div>
  </div>
</div>
</MobileMenu> -->
          </div>

          <div class="w-full mb-4 lg:mb-0">
            <div class="flex items-center p-1 bg-white rounded-[11px] shadow-big">
              <button class="p-2 mr-2 text-white bg-black rounded-[7px]">
                <PhosphorIconList :size="24" weight="bold" />
              </button>
              <input type="text" placeholder="Alkatrész, gyártó vagy modell neve"
                class="flex-grow bg-transparent border-transparent placeholder-dark/50 text-dark focus:border-transparent" />
              <button
                class="p-2 text-white rounded-[7px] bg-primary w-[91px] flex items-center justify-center hover:bg-red-800 transition">
                <PhosphorIconMagnifyingGlass :size="24" weight="bold" />
              </button>
            </div>
          </div>

          <!-- <div class="items-center hidden space-x-4 lg:flex">
            <PhosphorIconUser size="24" />
            <PhosphorIconHeart size="24" />
            <PhosphorIconShoppingCart size="24" />
          </div> -->
        </div>
      </div>
    </nav>
  </div>
</template>
