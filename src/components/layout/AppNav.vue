<script setup lang="ts">
import ArrowRight from '@/assets/icons/arrow-right.svg'
</script>

<template>
  <nav class="flex justify-between items-center mt-10 px-24">
    <div class="flex">
      <p class="text-5xl font-bold mr-14 text-black">VERA</p>
      <p class="text-base font-medium py-4 mr-12">Home</p>
      <p class="text-base font-medium py-4">About</p>
    </div>
    <div class="flex font-medium gap-5">
      <button class="text-base">Login</button>
      <button
        class="rounded-full text-xs border border-dark1 flex py-[10px] px-6 items-center gap-2 hover:bg-primary duration-100"
      >
        Sign Up
        <img :src="ArrowRight" />
      </button>
    </div>
  </nav>
</template>
