<template>
    <span class="loader" :style="{ borderColor: THEME_DEFAULTS.colors.secondary, borderBottomColor: 'transparent' }" />
</template>

<script lang="ts" setup>
import { THEME_DEFAULTS, THEME_SIZES } from "../constants/defaults"

interface ILoaderProps {
    size: number
}

const props = defineProps({
    size: {
        required: false,
        type: Number,
        default: THEME_SIZES.md
    }
})
const size = `${props.size}px`
const border = `${props.size / 6}px solid #000`

</script>

<style scoped>
.loader {
    width: v-bind(size);
    height: v-bind(size);
    border: v-bind(border);
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>