<template>
  <footer class="relative w-full overflow-hidden bg-dark">
      <div clasS="container flex items-center gap-12 py-10 md:gap-32">
          <div class="max-w-sm">
              <NuxtImg src="/img/logo.svg" class="min-w-[150px] mb-[50px]"/>
              <div class="flex flex-wrap gap-4">
                  <NuxtLink to="#" class="text-sm text-white">Request a Quote</NuxtLink>
                  <NuxtLink to="#" class="text-sm text-white">Services</NuxtLink>
                  <NuxtLink to="#" class="text-sm text-white">Prices</NuxtLink>
                  <NuxtLink to="#" class="text-sm text-white">Delivery</NuxtLink>
                  <NuxtLink to="#" class="text-sm text-white">Payment</NuxtLink>
                  <NuxtLink to="#" class="text-sm text-white">Returns</NuxtLink>
                  <NuxtLink to="#" class="text-sm text-white">Terms of use</NuxtLink>
              </div>
          </div>
          <NuxtImg src="/img/car-wireframe.svg" class="lg:w-[380px]"/>
          <div class="absolute right-0 flex flex-col justify-start items-end gap-[20px] bottom-10 md:bottom-auto">
              <NuxtImg src="/img/payment.svg" class="h-10 md:h-[75px]"/>
              <NuxtImg src="/digital-seed-studio/logo-h.svg" class="h-10 md:h-[50px]"/>
          </div>
      </div>
  </footer>
</template>