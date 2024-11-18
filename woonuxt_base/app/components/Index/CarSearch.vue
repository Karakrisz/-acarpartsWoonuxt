<template>
    <div class="flex flex-col items-center w-full md:w-fit 2xl:-ml-[200px]">
        <div class="py-7 bg-white rounded-t-[11px] w-fit px-7 md:w-[377px] shadow-big">
            <h2 class="text-[20px] font-semibold text-center">Search for your exact car!</h2>
        </div>

        <div class="rounded-[11px] overflow-clip w-full md:w-[427px] shadow-big">
            <div class="bg-white">
                <Disclosure :singleOpen="true">
                    <DisclosureItem id="1">
                        <template #title>Year</template>
                        <template #content>
                            Content </template>
                    </DisclosureItem>
                    <DisclosureItem id="2">
                        <template #title>Brand</template>
                        <template #content>
                            Content </template>
                    </DisclosureItem>
                    <DisclosureItem id="3">
                        <template #title>Model</template>
                        <template #content>
                            Content </template>
                    </DisclosureItem>
                    <DisclosureItem id="4">
                        <template #title>Part Name</template>
                        <template #content>
                            Content </template>
                    </DisclosureItem>
                </Disclosure>
            </div>
            <button class="flex items-center justify-center w-full py-[22px] font-semibold text-white rounded-md bg-primary text-[24px] gap-1 hover:bg-red-800 transition">
                Search
                <PhosphorIconMagnifyingGlass :size="20" weight="bold" class="ml-2" />
            </button>
        </div>
    </div>
</template>