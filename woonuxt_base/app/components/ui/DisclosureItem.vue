<template>
    <div class="">
        <button @click="toggle" class="flex items-center justify-between w-full px-4 py-4 text-2xl font-medium text-left transition bg-white rounded-lg hover:bg-gray/10 focus:outline-none focus-visible:ring focus-visible:ring-gray focus-visible:ring-opacity-75">
            <div class="flex items-center gap-4">
                <div class=" bg-gray-light w-[38px] h-[38px] flex items-center justify-center text-primary rounded-full">{{ id }}</div>
                <slot name="title" />
            </div>
            <PhosphorIconCaretDown :class="isOpen ? 'rotate-180 transform' : ''" class="w-5 h-5 mr-4" />
        </button>
        <div class="overflow-hidden transition-max-height" :style="{ maxHeight: isOpen ? `${contentHeight}px` : '0' }">
            <div ref="content" class="px-4 pt-4 pb-2 text-sm text-gray-500">
                <slot name="content" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, inject, onMounted, watch } from 'vue'

defineOptions({
    name: 'DisclosureItem'
})

const props = defineProps({
    id: {
        type: String,
        required: true
    },
    modelValue: {
        type: Boolean,
        default: undefined
    }
})

const emit = defineEmits(['update:modelValue'])

const { openStates, toggleItem, registerItem } = inject('disclosure')

const content = ref(null)
const contentHeight = ref(0)

onMounted(() => {
    registerItem(props.id, props.modelValue)
    contentHeight.value = content.value.scrollHeight
})

const isOpen = computed({
    get: () => props.modelValue !== undefined ? props.modelValue : openStates[props.id],
    set: (value) => {
        if (props.modelValue !== undefined) {
            emit('update:modelValue', value)
        } else {
            toggleItem(props.id)
        }
    }
})

const toggle = () => {
    isOpen.value = !isOpen.value
}

watch(() => props.modelValue, (newValue) => {
    if (newValue !== undefined) {
        openStates[props.id] = newValue
    }
})
</script>

<style scoped>
.transition-max-height {
    transition: max-height 0.3s ease-out;
}
</style>