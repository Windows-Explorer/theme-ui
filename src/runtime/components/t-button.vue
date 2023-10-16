<template>
    <button :class="{ 't-button': true, 'loading': isLoading }" :disabled="isLoading || disabled" v-ripple @click="toggle">
        <span :style="{ color: THEME_DEFAULTS.colors.secondary }" class="label">{{ props.label }}</span>
        <Transition name="loader">
            <TLoader class="loader" v-if="isLoading" :size="props.size" />
        </Transition>
    </button>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, PropType } from "vue"
import { THEME_DEFAULTS, THEME_IMPORTANCES, THEME_SIZES } from "../constants/defaults"

const props = defineProps({
    label: {
        required: true,
        type: String,
    },
    bordered: {
        required: false,
        type: Boolean,
        default: true
    },
    rounded: {
        required: false,
        type: Boolean,
        default: true
    },
    filled: {
        required: false,
        type: Boolean,
        default: true
    },
    isLoading: {
        required: false,
        type: Boolean,
        default: false
    },
    importance: {
        required: false,
        type: Number as PropType<THEME_IMPORTANCES>,
        default: THEME_IMPORTANCES.neutral
    },
    size: {
        required: false,
        type: Number as PropType<THEME_SIZES>,
        default: THEME_SIZES.md
    },
    disabled: {
        required: false,
        type: Boolean,
        default: false
    }
})

const borderRadius = computed(() => `${props.rounded ? THEME_DEFAULTS.shapes.bigShape : THEME_DEFAULTS.shapes.boxShape}px`)
const shadowBorder = computed(() => `${props.bordered ? THEME_DEFAULTS.shadows.smallBorderShadow : "none"}`)
const hoverBackgroundColor = computed(() => {
    switch (props.importance) {
        case THEME_IMPORTANCES.positive:
            return THEME_DEFAULTS.colors.positive
        case THEME_IMPORTANCES.negative:
            return THEME_DEFAULTS.colors.negative
        default:
            return THEME_DEFAULTS.colors.neutral
    }
})
const backgroundColor = computed(() => `${props.filled ? THEME_DEFAULTS.colors.primary : "transparent"}`)
const fontSize = computed(() => `${props.size || THEME_SIZES.lg}px`)
const paddingSize = computed(() => `${props.size + 30}px`)

onMounted(async () => {
    isLoading.value = props.isLoading
    disabled.value = props.disabled
})


const isLoading = ref(false)
const disabled = ref(false)

async function toggle() {
    isLoading.value = !isLoading.value
    setTimeout(async () => {
        isLoading.value = !isLoading.value
    }, 3000)
}

</script>

<style scoped>
.loading {
    padding-right: v-bind(paddingSize) !important;
}


.loader-enter-active {
    transition: 0.5s ease;
    transition-delay: 0.3s;
}

.loader-leave-active {
    transition: 0.1s ease;
    transition-delay: 0s;
}

.loader-enter-from,
.loader-leave-to {
    opacity: 0;
}

.loader {
    position: absolute;
    right: 16px;
}

.label {
    font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 500;
    font-size: v-bind(fontSize);
}

.t-button {
    border: 0;
    margin: 5px;
    min-width: 40px;
    transition: 0.4s ease, padding 0.2s cubic-bezier(0.38, -0.64, 0.52, 1.57);
    position: relative;
    user-select: none;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    outline: none;
    box-sizing: border-box;
    z-index: 1;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    background-color: v-bind(backgroundColor);
    border-radius: v-bind(borderRadius);
    box-shadow: v-bind(shadowBorder);
}

.t-button[disabled] {
    opacity: 0.8;
    cursor: default;
    background-color: v-bind(backgroundColor);
}

.t-button[disabled]:hover::before {
    opacity: 0;
}

.t-button:hover::before {
    opacity: 1;
    transform: scale(1);
}

.t-button::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    pointer-events: none;
    transition: 0.3s ease;
    z-index: -1;
    transform: scale(0.8);
    opacity: 0;
    box-sizing: border-box;
    background-color: v-bind(hoverBackgroundColor);
}
</style>