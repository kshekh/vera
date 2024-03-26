<script setup lang="ts">
import { ref } from 'vue'
import ArrowRight from '@/assets/icons/arrow-right.svg'
import MenuIcon from '@/components/icons/MenuIcon.vue'

const isMobileNavOpen = ref(false)

const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value
}
</script>

<template>
  <nav class="flex justify-between items-center mt-10 px-12 lg:px-24">
    <div class="flex">
      <a class="text-4xl md:text-5xl font-bold mr-14 hover:text-primary duration-200 cursor-pointer"
        >VERA</a
      >
      <a
        class="text-base font-medium py-4 mr-12 hidden md:block hover:text-primary duration-200 cursor-pointer"
        >Home</a
      >
      <a
        class="text-base font-medium py-4 hidden md:block hover:text-primary duration-200 cursor-pointer"
        >About</a
      >
    </div>
    <div class="md:flex font-medium gap-5 hidden">
      <button class="text-base hover:text-primary duration-200 cursor-pointer">Login</button>
      <button
        class="rounded-full text-xs border border-dark1 flex py-[10px] px-6 items-center gap-2 hover:bg-primary duration-100"
      >
        Sign Up
        <img :src="ArrowRight" />
      </button>
    </div>
    <button
      @click="toggleMobileNav"
      class="hover:rotate-45 hover:text-primary hover:scale-125 duration-200 md:hidden"
    >
      <MenuIcon iconClass="h-7 w-7" />
    </button>
  </nav>

  <!-- Mobile Nav -->
  <div
    :class="`md:hidden fixed top-0 bottom-0 w-full bg-primary z-50 p-12 duration-300 ease-in-out ${isMobileNavOpen ? 'left-0' : '-left-full'}`"
  >
    <header class="flex justify-between items-center border-b border-black pb-5">
      <a class="text-4xl font-bold">VERA</a>
      <button @click="toggleMobileNav" class="rotate-45 text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          class="h-7 w-7"
        >
          <g fill="currentColor">
            <path
              d="m8.19119 3.15595c-.88644-.20793-1.80897-.20793-2.69541 0-1.16099.27233-2.0675 1.17884-2.33983 2.33983-.20793.88644-.20793 1.80897 0 2.69541.27233 1.16099 1.17884 2.06751 2.33983 2.33981.88644.208 1.80897.208 2.69541 0 1.16099-.2723 2.06751-1.17882 2.33981-2.33981.208-.88644.208-1.80897 0-2.69541-.2723-1.16099-1.17882-2.0675-2.33981-2.33983z"
            />
            <path
              d="m8.19119 13.469c-.88644-.208-1.80897-.208-2.69541 0-1.16099.2723-2.0675 1.1788-2.33983 2.3398-.20793.8864-.20793 1.809 0 2.6954.27233 1.161 1.17884 2.0675 2.33983 2.3399.88644.2079 1.80897.2079 2.69541 0 1.16099-.2724 2.06751-1.1789 2.33981-2.3399.208-.8864.208-1.809 0-2.6954-.2723-1.161-1.17882-2.0675-2.33981-2.3398z"
            />
            <path
              d="m18.5042 3.15595c-.8864-.20793-1.809-.20793-2.6954 0-1.161.27233-2.0675 1.17884-2.3398 2.33983-.208.88644-.208 1.80897 0 2.69541.2723 1.16099 1.1788 2.06751 2.3398 2.33981.8864.208 1.809.208 2.6954 0 1.161-.2723 2.0675-1.17882 2.3399-2.33981.2079-.88644.2079-1.80897 0-2.69541-.2724-1.16099-1.1789-2.0675-2.3399-2.33983z"
            />
            <path
              d="m18.5042 13.469c-.8864-.208-1.809-.208-2.6954 0-1.161.2723-2.0675 1.1788-2.3398 2.3398-.208.8864-.208 1.809 0 2.6954.2723 1.161 1.1788 2.0675 2.3398 2.3399.8864.2079 1.809.2079 2.6954 0 1.161-.2724 2.0675-1.1789 2.3399-2.3399.2079-.8864.2079-1.809 0-2.6954-.2724-1.161-1.1789-2.0675-2.3399-2.3398z"
            />
          </g>
        </svg>
      </button>
    </header>
    <div class="flex flex-col gap-4 mt-8">
      <a class="text-2xl font-bold">Home</a>
      <a class="text-2xl font-bold">About</a>
      <div class="flex gap-5 mt-8">
        <button
          class="rounded-full text-xs border border-dark1 flex py-[10px] px-6 items-center justify-between grow"
        >
          Login
          <img :src="ArrowRight" />
        </button>
        <button
          class="rounded-full text-xs border border-dark1 flex py-[10px] px-6 items-center justify-between grow"
        >
          Sign Up
          <img :src="ArrowRight" />
        </button>
      </div>
    </div>
  </div>
</template>
