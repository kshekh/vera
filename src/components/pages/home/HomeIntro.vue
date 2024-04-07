<script setup lang="ts">
// import HeaderLinesSvg from '@/assets/icons/3lines.svg'
import ArrowRight from '@/assets/icons/arrow-right.svg'
import ArrowRadius from '@/assets/icons/arrow-radius.svg'
// import StarSvg from '@/assets/icons/star.svg'
import HeroBgColors from '@/assets/icons/hero-bg-colors.svg'
import HeroBlock from '@/assets/icons/block.svg'
import HeroPlaceholder from '@/assets/images/placeholder.png'

import RoundedLine from '@/assets/icons/rounded-line.svg'
import FacebookSvg from '@/assets/icons/facebook.svg'
import TwitterSvg from '@/assets/icons/twitter.svg'
import TiktokSvg from '@/assets/icons/tiktok.svg'
import YoutubeSvg from '@/assets/icons/youtube.svg'
import CircleLine from '@/assets/icons/circle-line.svg'
import ButtonCustom from '@/components/ui/ButtonCustom.vue'
import TitleBadge from '@/components/ui/TitleBadge.vue'
import XTwitter from '@/components/icons/XTwitter.vue'
</script>

<template>
  <section class="lg:max-h-[1000px] border-b flex items-center py-20 lg:pt-40 section">
    <div class="flex flex-col items-center font-bold max-w-5xl mx-auto px-3 lg:px-8 my-8">
      <TitleBadge title="your intelligent companion" />

      <div class="mt-10 md:mt-6 relative">
        <!-- <img :src="HeaderLinesSvg" alt="" class="absolute -top-8 -left-4" /> -->
        <h1 class="title">
          DISCOVER THE <br class="md:block hidden" />
          POWER OF VERA
        </h1>
      </div>
      <div class="mt-4 lg:mt-7">
        <p class="md:text-lg text-body text-center max-w-[800px] font-normal">
          Are you ready to revolutionize the way you work? Meet Vera, your ultimate intelligent
          companion. More than just a virtual assistant, Vera is here to optimize your tasks, boost
          productivity, and bring a whole new level of convenience to your life!
        </p>
        <!-- <div class="flex justify-end -mr-20">
          <img :src="StarSvg" alt="" />
        </div> -->
      </div>

      <div class="mt-10 relative">
        <img :src="ArrowRadius" alt="" class="absolute right-full mr-8 bottom-0 hidden md:block" />
        <ButtonCustom size="large"
          class="group after:top-1 after:left-1 hover:after:top-0 hover:after:left-0 xl:after:left-0 xl:after:top-0 xl:hover:after:left-1 xl:hover:after:top-1">
          Get Started
          <img :src="ArrowRight" alt="" class="group-hover:-rotate-45 duration-200" />
        </ButtonCustom>
      </div>
    </div>
  </section>
  <section class="lg:min-h-screen py-20 lg:pt-40container-custom w-full pb-20 border-b flex flex-col section">
    <div class="max-w-4xl mx-auto px-3">
      <div class="relative flex justify-center">
        <div class="relative flex justify-center  ">
          <img :src="HeroBlock" alt="" class="absolute -top-16 -left-14 z-20 h-20 lg:h-auto hidden md:inline-block" />
          <img :src="HeroPlaceholder" alt="" class="z-10" />
          <img :src="HeroBgColors" alt="" class="absolute -bottom-5" />
          <img :src="RoundedLine" alt=" " class="absolute left-full bottom-0 hidden xl:inline-block -ml-6" />


        </div>
      </div>
    </div>
      <div class="flex flex-wrap gap-5 justify-between max-w-7xl w-full mx-auto px-3 pt-10">
        <div class="flex flex-col gap-6 lg:left-48 relative">
          <img :src="CircleLine" alt="" />
          <ul class="font-sans text-[#6F6F6F] flex gap-2">
            <li>
              <a href="https://www.instagram.com/veratheai/"
                class="flex justify-center items-center w-10 h-10 bg-black/10 hover:bg-primary duration-200 text-black rounded-full"><i
                  class="ri-facebook-fill"></i></a>
            </li>
            <li>
              <a href="https://www.instagram.com/veratheai/"
                class="flex justify-center items-center w-10 h-10 bg-black/10 hover:bg-primary duration-200 text-black rounded-full"><i
                  class="ri-twitter-x-fill"></i></a>
            </li>
            <li>
              <a href="https://www.instagram.com/veratheai/"
                class="flex justify-center items-center w-10 h-10 bg-black/10 hover:bg-primary duration-200 text-black rounded-full"><i
                  class="ri-tiktok-fill"></i></a>
            </li>
            <li>
              <a href="https://www.instagram.com/veratheai/"
                class="flex justify-center items-center w-10 h-10 bg-black/10 hover:bg-primary duration-200 text-black rounded-full"><i
                  class="ri-instagram-line"></i></a>
            </li>
          </ul>

        </div>


        <div class="block">
          <p class="text-body montserrat">
            <span class="block">Choose the partner better suits you:</span> <span class="font-bold">VERA</span>,
            <span class="font-bold">VERA-HOMIE</span> or
            <span class="font-bold">VERA-LITE</span>
          </p>
        </div>
      </div>

      <!-- <div class="grid sm:grid-cols-2 justify-center gap-8 px-8 md:hidden mt-20">
        <div class="flex flex-col items-start gap-6">
          <img :src="CircleLine" alt="" />
          <div class="flex gap-6">
            <img :src="FacebookSvg" alt="" />
            <img :src="TwitterSvg" alt="" />
            <img :src="TiktokSvg" alt="" />
            <img :src="YoutubeSvg" alt="" />
          </div>
        </div>
        <div class="w-80 text-base mr-5 text-body montserrat">
          Choose the partner better suits you: <span class="font-bold">VERA</span>,
          <span class="font-bold">VERA-HOMIE</span> or
          <span class="font-bold">VERA-LITE</span>
        </div>
      </div> -->
   
  </section>
</template>
