<template>
    <section class="flex flex-col md:flex-row">
      <!-- Left column container -->
      <div class="flex flex-col md:w-1/2">
        <!-- Top left section -->
        <div class="p-8 text-white bg-primary lg:p-20">
          <div class="container mx-auto">
            <h2 class="mb-8 text-2xl font-bold">Acarparts: The Premier Car Parts Dealership</h2>
            <p class="">
              When it comes to finding top-quality car parts in Poland, look no further than Acarparts. As the leading car parts dealership in the country, Acarparts has earned its reputation for excellence through a commitment to quality, customer satisfaction, and a vast selection of products.
            </p>
          </div>
        </div>
        
        <!-- Bottom left section -->
        <div class="relative flex-grow p-8 text-white lg:p-20 bg-dark">
          <NuxtImg src="/img/about-bg-tire.png" alt="Tire" class="absolute inset-0 object-cover w-full h-full" />
          <div class="container relative z-10 mx-auto">
            <h3 class="mb-8 text-xl font-semibold">Why Choose Acarparts?</h3>
            <ul class="space-y-4">
              <li>
                <strong class="font-semibold">1. Unmatched Selection:</strong> Whether you're looking for engine components, brake systems, filters, or any other car part, Acarparts has you covered. Our extensive inventory ensures that you can find exactly what you need, no matter the make or model of your vehicle.
              </li>
              <li>
                <strong class="font-semibold">2. Quality Assurance:</strong> At Acarparts, we understand that your vehicle's performance and safety depend on the quality of its parts. That's why we only stock products from trusted manufacturers known for their durability and reliability.
              </li>
              <li>
                <strong class="font-semibold">3. Competitive Pricing:</strong> We believe that premium car parts shouldn't come with a premium price tag. Our competitive pricing structure ensures that you get the best value for your money without compromising on quality.
              </li>
              <li>
                <strong class="font-semibold">4. Expert Customer Service:</strong> Our knowledgeable and friendly customer service team is always ready to assist you. Whether you need help finding the right part or have questions about installation, we are here to provide expert advice and support.
              </li>
              <li>
                <strong class="font-semibold">5. Convenient Online Shopping:</strong> Shopping for car parts has never been easier. Our user-friendly webshop allows you to browse, compare, and purchase parts from the comfort of your home. With fast shipping and easy returns, we make sure that you get your parts quickly and hassle-free.
              </li>
              <li>
                <strong class="font-semibold">6. Trusted by Car Enthusiasts and Professionals Alike:</strong> From individual car enthusiasts to professional mechanics, Acarparts is the trusted source for car parts across Poland. Our commitment to quality and service has made us a favorite in the automotive community.
              </li>
            </ul>
            
            <p class="mt-8">
              Discover the Acarparts difference today and experience why we are the best car parts dealership in Poland. Visit our webshop and find the perfect parts to keep your vehicle running smoothly and efficiently.
            </p>
          </div>
        </div>
      </div>
  
      <!-- Right column -->
      <div class="relative md:w-1/2">
        <NuxtImg src="/img/about-bg.jpg" alt="Car parts background" class="absolute inset-0 object-cover w-full h-full" />
      </div>
    </section>
  </template>
  
  <script setup>
  // Any necessary component logic can go here
  </script>
  
  <style scoped>
  .bg-dark {
    background-color: #181818;
  }
  </style>