<script setup>
import { ref, watch } from 'vue'

const { getSearchQuery, setSearchQuery, clearSearchQuery } = useSearching()
const searchQuery = ref(getSearchQuery())

const reset = () => {
  clearSearchQuery()
  searchQuery.value = ''
}

watch(getSearchQuery, (value) => {
  if (!value) reset()
})

const handleSubmit = () => {
  setSearchQuery(searchQuery.value)
}
</script>

<template>
  <form class="relative items-center rounded-md shadow-sm" @submit.prevent="handleSubmit">
    <input
      v-model="searchQuery"
      type="text"
      :placeholder="$t('messages.shop.searchProducts')"
      class="z-0 inline-flex items-center w-full p-2 pr-12 text-sm text-stone-500 border border-stone-300 rounded-md shadow-inner outline-none bg-stone-50 shadow-stone-200"
    >
    <span
      v-if="searchQuery"
      class="absolute z-10 top-1/2 -translate-y-1/2 pt-1 right-12 text-xs rounded cursor-pointer text-gray-600 hover:text-gray-900 transition"
      @click="reset"
    >
      <Icon name="ion:close-outline" size="18" />
    </span>
    <!-- <button
      type="submit"
      class="absolute z-10 right-1  px-1.5 pt-1 top-1/2 -translate-y-1/2 transform transition cursor-not-allowed"
      :class="{ 'bg-primary/20 rounded-md hover:bg-primary/30 !cursor-pointer': searchQuery?.length >= 2 }"
    >
      <Icon 
        name="ph:magnifying-glass" 
        size="20" 
        :class="searchQuery?.length >= 2 ? 'text-primary-dark' : 'text-disabled '" 
      />
    </button> -->
    <button
     class="p-2 absolute z-10 right-1 top-0  text-white rounded-[7px] bg-primary w-[91px] flex items-center justify-center hover:bg-red-800 transition"
      >
      <PhosphorIconMagnifyingGlass :size="24" weight="bold" />
      </button>
  </form>
</template>