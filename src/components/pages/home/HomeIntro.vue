<script setup lang="ts">
import HeaderLinesSvg from '@/assets/icons/3lines.svg'
import ArrowRight from '@/assets/icons/arrow-right.svg'
import ArrowRadius from '@/assets/icons/arrow-radius.svg'
import StarSvg from '@/assets/icons/star.svg'
import HeroBgColors from '@/assets/icons/hero-bg-colors.svg'
import HeroBlock from '@/assets/icons/block.svg'
import HeroPlaceholder from '@/assets/images/placeholder.png'

import RoundedLine from '@/assets/icons/rounded-line.svg'
import FacebookSvg from '@/assets/icons/facebook.svg'
import TwitterSvg from '@/assets/icons/twitter.svg'
import TiktokSvg from '@/assets/icons/tiktok.svg'
import YoutubeSvg from '@/assets/icons/youtube.svg'
import CircleLine from '@/assets/icons/circle-line.svg'
</script>

<template>
  <section class="min-h-screen pt-16 border-b">
    <div class="flex flex-col items-center font-bold max-w-5xl mx-auto">
      <label for="" class="border border-dark1 py-2 font-bold px-9 text-sm rounded-full"
        >Your Intelligent Companion</label
      >
      <div class="mt-6 relative">
        <img :src="HeaderLinesSvg" alt="" class="absolute -top-8 -left-4" />
        <h1 class="text-8xl text-center text-black">
          DISCOVER THE <br />
          POWER OF VERA
        </h1>
      </div>
      <div class="mt-7">
        <p class="text-lg text-body text-center max-w-[800px] font-montserrat font-normal">
          Are you ready to revolutionize the way you work? Meet Vera, your ultimate intelligent
          companion. More than just a virtual assistant, Vera is here to optimize your tasks, boost
          productivity, and bring a whole new level of convenience to your life!
        </p>
        <div class="flex justify-end -mr-20">
          <img :src="StarSvg" alt="" />
        </div>
      </div>

      <div class="mt-10 relative">
        <img :src="ArrowRadius" alt="" class="absolute right-full mr-8 bottom-0" />
        <button class="btn-primary">
          Get Started
          <img :src="ArrowRight" alt="" />
        </button>
      </div>
    </div>
  </section>
  <section class="min-h-screen border-b pt-16">
    <div class="relative mt-20 pb-40 flex justify-center over">
      <!-- <img :src="HeroBgGlow" alt=" " class="absolute top-0" /> -->
      <div class="relative flex justify-center">
        <img :src="HeroBlock" alt="" class="absolute -top-16 -left-14 z-20" />
        <img :src="HeroPlaceholder" alt="" class="z-10" />
        <img :src="HeroBgColors" alt="" class="absolute -bottom-5" />
        <img :src="RoundedLine" alt=" " class="absolute left-full bottom-0" />

        <div class="absolute -bottom-32 left-0">
          <div class="flex flex-col gap-6">
            <img :src="CircleLine" alt="" />
            <div class="flex gap-6">
              <img :src="FacebookSvg" alt="" />
              <img :src="TwitterSvg" alt="" />
              <img :src="TiktokSvg" alt="" />
              <img :src="YoutubeSvg" alt="" />
            </div>
          </div>
        </div>

        <div class="absolute -bottom-32 -right-40">
          <div class="w-80 text-base mr-5 text-body montserrat">
            Choose the partner better suits you: <span class="font-bold">VERA</span>,
            <span class="font-bold">VERA-HOMIE</span> or
            <span class="font-bold">VERA-LITE</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
