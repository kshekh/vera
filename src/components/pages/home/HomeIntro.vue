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
  <section class="h-[calc(100vh-96px)] lg:max-h-[1000px] border-b flex items-center pb-20 section">
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
          companion. More than just a virtual assistant, Vera is here to optimize your tasks, boost
          productivity, and bring a whole new level of convenience to your life!
        </p>
        <!-- <div class="flex justify-end -mr-20">
          <img :src="StarSvg" alt="" />
        </div> -->
      </div>

      <div class="mt-10 relative">
        <img :src="ArrowRadius" alt="" class="absolute right-full mr-8 bottom-0" />
        <ButtonCustom size="large" class="group">
          Get Started
          <img :src="ArrowRight" alt="" class="group-hover:-rotate-45 duration-200" />
        </ButtonCustom>
      </div>
    </div>
  </section>
  <section class="section-height border-b flex items-center section">
    <div class="grow">
      <div class="relative md:pt-24 md:pb-40 flex justify-center">
        <div class="relative flex justify-center mx-8 md:mx-24">
          <img
            :src="HeroBlock"
            alt=""
            class="absolute -top-16 -left-14 z-20 h-20 lg:h-auto hidden md:inline-block"
          />
          <img :src="HeroPlaceholder" alt="" class="z-10" />
          <img :src="HeroBgColors" alt="" class="absolute -bottom-5" />
          <img
            :src="RoundedLine"
            alt=" "
            class="absolute left-full bottom-0 hidden xl:inline-block -ml-6"
          />

          <div class="absolute -bottom-32 left-0 hidden md:block">
            <div class="flex flex-col gap-6">
              <img :src="CircleLine" alt="" />
              <div class="flex gap-6 items-center">
                <a
                  href="https://www.instagram.com/veratheai/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img :src="FacebookSvg" alt="" />
                </a>
                <a
                  href="https://www.instagram.com/veratheai/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    class="bg-dark1 rounded-full h-5 w-5 overflow-hidden flex items-center justify-center"
                  >
                    <XTwitter class="h-2.5 w-2.5 fill-white" />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/veratheai/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img :src="TiktokSvg" alt="" />
                </a>
                <a
                  href="https://www.instagram.com/veratheai/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img :src="YoutubeSvg" alt="" />
                </a>
              </div>
            </div>
          </div>

          <div class="absolute -bottom-32 right-0 xl:-right-40 hidden md:block">
            <div class="w-80 text-base mr-5 text-body montserrat">
              Choose the partner better suits you: <span class="font-bold">VERA</span>,
              <span class="font-bold">VERA-HOMIE</span> or
              <span class="font-bold">VERA-LITE</span>
            </div>
          </div>
        </div>
      </div>
      <div class="grid sm:grid-cols-2 justify-center gap-8 px-8 md:hidden mt-20">
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
      </div>
    </div>
  </section>
</template>
