<template>
    <button class="t-button" v-ripple @click="toggle">
        <TLoader v-if="isLoading" />
        <span v-if="!isLoading" class="label">{{ props.label }}</span>
    </button>
</template>

<script lang="ts" setup>
import { ref } from "vue"

interface ITButtonProps {
    label: string
}

const props = defineProps<ITButtonProps>()

const isLoading = ref(true)

async function toggle() {
    isLoading.value = !isLoading.value
}

</script>

<style scoped>
.label {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: large;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    margin: 0;
}

.t-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0px 0px 14px 0px rgb(0 0 0 / 52%);
    border: 2px solid white;
    width: 100px;
    min-height: 30px;
    height: 40px;
    max-height: 100%;
    position: relative;
    padding-block: 10px;
    cursor: pointer;
}
</style>