<template>
  <div>
    <TButton label="CLICK" :rounded="props.rounded" :bordered="props.bordered" :filled="props.filled"
      :importance="THEME_IMPORTANCES.positive" :size="THEME_SIZES.md"/>
    <input type="checkbox" v-model="props.bordered">
    <input type="checkbox" v-model="props.filled">
    <input type="checkbox" v-model="props.rounded">
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { THEME_IMPORTANCES, THEME_SIZES } from "../src/runtime/constants/defaults"
const props = ref({
  rounded: true,
  bordered: true,
  filled: true
})
</script>
