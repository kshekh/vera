<script setup lang="ts">
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/bundle'
import WhyImg1 from '@/assets/images/why-1.png'
</script>

<template>
  <section class="border-b flex items-center section-height">
    <div class="container-custom w-full">
      <h2 class="text-center text-5xl font-bold">Why Vera</h2>

      <div class="relative flex items-center max-w-[90vw]">
        <swiper
          :slides-per-view="1"
          :modules="[Navigation, Pagination]"
          :navigation="{
            nextEl: '.swiper-next-why',
            prevEl: '.swiper-prev-why'
          }"
          :pagination="{
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active'
          }"
          loop
          autoplay
        >
          <swiper-slide v-for="index in 5" :key="index">
            <div class="grid md:grid-cols-7 gap-12 mt-20">
              <div class="pt-12 md:col-span-4">
                <label
                  for=""
                  class="border border-[#101010] py-2 font-bold px-9 text-sm rounded-full"
                  >LOCAL HOSTING OF DATA</label
                >
                <h3 class="uppercase font-bold text-2xl mt-6">Your Security is Our Priority</h3>
                <p class="font-montserrat font-medium italic mt-4">
                  With Vera, your personal data is in safe hands. Our advanced technology ensures
                  that all data is handled locally, guaranteeing the utmost security and peace of
                  mind.
                </p>
                <p class="font-montserrat text-body mt-2">
                  Say goodbye to worries about your data's security. With Vera Homie, all your files
                  are hosted locally, ensuringthat your personal information remains safe and
                  private. We prioritize your security by storing your data in thedevice itself,
                  eliminating the need for external databases. Rest assured, only your conversations
                  are backedup on our servers for reference purposes.
                </p>
              </div>
              <div class="col-span-3 hidden md:block">
                <img :src="WhyImg1" alt="" />
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <div class="swiper-pagination hidden md:block"></div>

        <!-- Navigation Back -->
        <button
          class="flex swiper-prev-why rounded-full border border-dark1 h-14 w-14 items-center justify-center absolute left-0 lg:left-auto top-full lg:top-auto mt-4 lg:mt-0 lg:right-full mr-5 hover:text-primary hover:border-primary duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>

        <!-- Navigation Next -->
        <button
          class="flex swiper-next-why rounded-full border border-dark1 h-14 w-14 items-center justify-center absolute left-0 top-full lg:top-auto mt-4 lg:mt-0 lg:left-full ml-20 lg:ml-5 hover:text-primary hover:border-primary duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>
