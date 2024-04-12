<script setup lang="ts">
// import HeaderLinesSvg from '@/assets/icons/3lines.svg'
import ArrowRight from '@/assets/icons/arrow-right.svg'
import ArrowRadius from '@/assets/icons/arrow-radius.svg'
// import StarSvg from '@/assets/icons/star.svg'
import HeroBgColors from '@/assets/icons/hero-bg-colors.svg'
import HeroBlock from '@/assets/icons/block.svg'
import HeroPlaceholder from '@/assets/images/placeholder.png'

import RoundedLine from '@/assets/icons/rounded-line.svg'
 
import CircleLine from '@/assets/icons/circle-line.svg'
import ButtonCustom from '@/components/ui/ButtonCustom.vue'
import TitleBadge from '@/components/ui/TitleBadge.vue'
 
import AppNav from '@/components/layout/AppNav.vue'
</script>

<template>
  <section class="min-h-screen lg:max-h-[1000px] border-b pb-20 section flex flex-col">
    <AppNav />
    <div class="grow flex items-center">
      <div class="flex flex-col items-center font-bold max-w-5xl mx-auto px-8 my-8">
        <TitleBadge title="your intelligent companion" />

        <div class="mt-10 md:mt-6 relative">
          <!-- <img :src="HeaderLinesSvg" alt="" class="absolute -top-8 -left-4" /> -->
          <h1 class="title">
            DISCOVER THE <br />
            POWER OF VERA
          </h1>
        </div>
        <div class="mt-4 lg:mt-7">
          <p class="md:text-lg text-body text-center max-w-[800px] font-normal">
            Are you ready to revolutionize the way you work? Meet Vera, your ultimate intelligent
            companion. More than just a virtual assistant, Vera is here to optimize your tasks,
            boost productivity, and bring a whole new level of convenience to your life!
          </p>
          <!-- <div class="flex justify-end -mr-20">
            <img :src="StarSvg" alt="" />
          </div> -->
        </div>

        <div class="mt-10 relative">
          <img :src="ArrowRadius" alt="" class="absolute right-full mr-8 bottom-0" />
          <ButtonCustom size="large" class="group after:top-1 after:left-1 hover:after:top-0 hover:after:left-0 xl:after:left-0 xl:after:top-0 xl:hover:after:left-1 xl:hover:after:top-1">
            Get Started
            <img :src="ArrowRight" alt="" class="group-hover:-rotate-45 duration-200" />
          </ButtonCustom>
        </div>
      </div>
    </div>
  </section>
  <section class="section-height border-b flex items-center section">
    <div class="grow">
      <div class="relative md:pt-24 md:pb-40 flex justify-center">
        <div class="relative flex justify-center mx-8 g-red-100">
          <img
            :src="HeroBlock"
            alt=""
            class="absolute -top-16 -left-14 z-20 h-20 lg:h-auto hidden md:inline-block w-[12vw] max-w-56"
          />
          <img :src="HeroPlaceholder" alt="" class="z-10 w-full" />
          <img :src="HeroBgColors" alt="" class="absolute -bottom-5 w-full" />
          <img
            :src="RoundedLine"
            alt=" "
            class="absolute left-full bottom-0 inline-block -ml-6 w-[7.3vw]"
          />

          <div class="absolute -bottom-32 left-0 hidden md:block">
            <div class="flex flex-col gap-6">
              <img :src="CircleLine" alt="" />
              <div class="flex gap-6 items-center">
                <a
                  href="https://www.instagram.com/veratheai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-black hover:text-primary ease-in-out duration-300 text-3xl"
                >
                  <!-- <img :src="FacebookSvg" alt="" /> --> <i class="ri-facebook-circle-fill"></i>
                </a>
                <a
                  href="https://www.instagram.com/veratheai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-black hover:text-primary ease-in-out duration-300 text-3xl"
                >
                  
                  <i class="ri-twitter-x-fill"></i>
               
                </a>
                <a
                  href="https://www.instagram.com/veratheai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-black hover:text-primary ease-in-out duration-300 text-3xl"
                >
                <i class="ri-tiktok-fill"></i>
                </a>
                <a
                  href="https://www.instagram.com/veratheai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-black hover:text-primary ease-in-out duration-300 text-3xl"
                >
                <i class="ri-youtube-fill"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="absolute -bottom-32 right-0 xl:-right-40 hidden md:block">
            <p class="text-base mr-5 text-body montserrat">
              <span class="block">Choose the partner better suits you: </span><span class="font-bold">VERA</span>,
              <span class="font-bold">VERA-HOMIE</span> or
              <span class="font-bold">VERA-LITE</span>
            </p>
          </div>
        </div>
      </div>
      <div class="grid sm:grid-cols-2 justify-center gap-8 px-8 md:hidden mt-20">
        <div class="flex flex-col items-center md:items-start gap-6">
          <img :src="CircleLine" alt="" class="hidden md:inline-block" />
          <div class="flex gap-6">
            <div class="flex gap-6 items-center">
                <a
                  href="https://www.instagram.com/veratheai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-black hover:text-primary ease-in-out duration-300 text-3xl"
                >
                  <!-- <img :src="FacebookSvg" alt="" /> --> <i class="ri-facebook-circle-fill"></i>
                </a>
                <a
                  href="https://www.instagram.com/veratheai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-black hover:text-primary ease-in-out duration-300 text-3xl"
                >
                  
                  <i class="ri-twitter-x-fill"></i>
               
                </a>
                <a
                  href="https://www.instagram.com/veratheai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-black hover:text-primary ease-in-out duration-300 text-3xl"
                >
                <i class="ri-tiktok-fill"></i>
                </a>
                <a
                  href="https://www.instagram.com/veratheai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-black hover:text-primary ease-in-out duration-300 text-3xl"
                >
                <i class="ri-youtube-fill"></i>
                </a>
              </div>
          </div>
        </div>
        <p class="text-base mr-5 text-body montserrat">
          <span class="block">Choose the partner better suits you:</span> <span class="font-bold">VERA</span>,
          <span class="font-bold">VERA-HOMIE</span> or
          <span class="font-bold">VERA-LITE</span>
        </p>
      </div>
    </div>
  </section>
</template>
