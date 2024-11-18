<template>
    <div class="divide-y divide-gray/50">
        <slot />
    </div>
</template>

<script setup>
import { provide, reactive } from 'vue'

defineOptions({
    name: 'Disclosure'
})

const props = defineProps({
    singleOpen: {
        type: Boolean,
        default: false
    }
})

const openStates = reactive({})

const toggleItem = (id) => {
    if (props.singleOpen) {
        for (const key in openStates) {
            openStates[key] = key === id ? !openStates[key] : false
        }
    } else {
        openStates[id] = !openStates[id]
    }
}

const registerItem = (id, initialState = false) => {
    if (!(id in openStates)) {
        openStates[id] = initialState
    }
}

provide('disclosure', {
    openStates,
    toggleItem,
    registerItem
})
</script>