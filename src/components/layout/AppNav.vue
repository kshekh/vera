<script setup lang="ts">
import { ref } from 'vue'
import ArrowRight from '@/assets/icons/arrow-right.svg'
import MenuIcon from '@/components/icons/MenuIcon.vue'
import ButtonCustom from '@/components/ui/ButtonCustom.vue'

const isMobileNavOpen = ref(false)

const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value
}
</script>

<template>
  <nav class="flex justify-between items-center pt-10 px-12 lg:px-24 absolute top-0 inset-x-0">
    <div class="flex">
      <a
        class="text-4xl md:text-5xl font-medium mr-14 hover:text-primary duration-200 cursor-pointer font-outfit"
        href="https://veratheai.com"
        >VERA</a
      >
      <a
        class="text-base font-source-pro font-medium py-4 mr-12 hidden md:block hover:text-primary duration-200 cursor-pointer"
        href="https://veratheai.com"
        >Home</a
      >
      <a
        class="text-base font-source-pro font-medium py-4 hidden md:block hover:text-primary duration-200 cursor-pointer"
        href="https://veratheai.com/about"
        >About</a
      >
    </div>
    <div class="md:flex font-medium gap-5 hidden">
      <button class="text-base font-source-pro hover:text-primary duration-200 cursor-pointer">
        <a href="https://veratheai.com/login" class="inline-block"> Login </a>
      </button>
      <a href="https://veratheai.com/signup">
        <ButtonCustom variant="secondary" class="group after:top-1 after:left-1 hover:after:top-0 hover:after:left-0 xl:after:left-0 xl:after:top-0 xl:hover:after:left-1 xl:hover:after:top-1">
          
          Sign Up
          <img :src="ArrowRight" class="group-hover:-rotate-45 duration-200" />
        </ButtonCustom>
      </a>
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
    :class="`md:hidden fixed top-0 bottom-0 w-full bg-primary z-50 pt-10 px-12 duration-300 ease-in-out ${isMobileNavOpen ? 'left-0' : '-left-full'}`"
  >
    <header class="flex justify-between items-center border-b border-black pb-5">
      <a class="text-4xl font-medium font-outfit">VERA</a>
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
    <div class="flex flex-col gap-4 mt-8 font-source-pro">
      <a class="text-2xl font-semibold">Home</a>
      <a class="text-2xl font-semibold">About</a>
      <div class="flex gap-5 mt-8">
        <button class="text-base font-source-pro hover:text-primary duration-200 cursor-pointer">
        <a href="https://veratheai.com/login" class="inline-block font-medium"> Login </a>
      </button>
        <ButtonCustom variant="secondary" class="group after:top-1 after:left-1 hover:after:top-0 hover:after:left-0 xl:after:left-0 xl:after:top-0 xl:hover:after:left-1 xl:hover:after:top-1">
          <div class="flex justify-between w-full">
            Sign Up
            <img :src="ArrowRight" class="group-hover:-rotate-45 duration-200 ml-2" />
          </div>
        </ButtonCustom>
      </div>
    </div>
  </div>
 
</template>
