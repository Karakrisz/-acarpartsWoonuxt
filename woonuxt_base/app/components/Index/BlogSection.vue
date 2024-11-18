<script setup>
const posts = [
    {
        title: "How to Easily Find the Right Car Part Online with Acarparts",
        description: "Navigating the world of car parts can be daunting. Our step-by-step guide shows you how to quickly and easily find the exact car parts you need using Acarparts' user-friendly webshop.",
        link: "/",
        imgSrc: "/blog-1.jpg",
    },
    {
        title: "Why Quality Matters: The Benefits of Choosing Premium Car Parts",
        description: "Not all car parts are created equal. Learn why investing in high-quality car parts from Acarparts can save you time, money, and ensure your vehicle stays in optimal condition.",
        link: "/",
        imgSrc: "/blog-2.jpg",
    },
    {
        title: "Top 5 Must-Have Car Parts for Every Vehicle Owner",
        description: "Ensuring your vehicle runs smoothly requires the right parts. Discover the top five essential car parts every vehicle owner should have on hand to maintain peak performance and safety.",
        link: "/",
        imgSrc: "/blog-3.jpg",
    }
]
</script>

<template>
    <section class="container py-[50px]">
        <h2 class="mb-[25px] text-2xl lg:text-left text-center leading-[160%] font-semibold">Latest Blogpost</h2>
        <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[24px]">
            <div v-for="post in posts" class="rounded-[10px] overflow-hidden shadow-big flex flex-col">
                <div class="h-[181px] w-full relative overflow-hidden">
                    <NuxtImg class="absolute inset-0 object-cover w-full h-full" :src="'/img/blog' + post.imgSrc" />
                </div>
                <div class="p-[25px] bg-white flex flex-col gap-[15px] flex-1">
                    <h3 class="text-xl font-semibold">{{ post.title }}</h3>
                    <div class="h-[1px] bg-gray/50 w-full"></div>
                    <p class="text-sm leading-[160%] flex-1">{{ post.description }}</p>
                    <NuxtLink :to="post.link" class="flex items-center justify-center px-[25px] py-[15px] text-white rounded-[7px] text-sm bg-primary hover:bg-red-800 transition">Read More</NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>