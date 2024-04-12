<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  title: string
  class?: string
}>()
</script>

<template>
  <label
    for=""
    :class="
      `border border-[#101010] py-2 font-bold px-9 text-sm rounded-full font-source-pro uppercase inline-block ` +
      props.class
    "
    >{{ props.title }}</label
  >
</template>
