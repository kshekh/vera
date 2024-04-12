<script setup lang="ts">
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/bundle'

import WhySwiperSlide from '@/components/ui/WhySwiperSlide.vue'
import { WHY_VERA } from '@/data/why-vera'
</script>

<template>
  <section class="border-b flex items-center section-height section">
    <div class="container-custom w-full py-20 lg:!px-24">
      <h2 class="heading-1 text-center uppercase">Why Vera</h2>

      <div class="relative flex items-center">
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
            // dynamicBullets: true,
            bulletClass: 'swiper-pagination-dot',
            bulletActiveClass: 'swiper-pagination-dot-active'
          }"
          loop
          autoplay
        >
          <swiper-slide v-for="slide in WHY_VERA" :key="slide.title">
            <WhySwiperSlide
              :image="slide.image"
              :badge-title="slide.badgeTitle"
              :title="slide.title"
              :paragraph-primary="slide.paragraphPrimary"
              :paragraph-secondary="slide.paragraphSecondary"
              :reversed="slide.reversed"
            />
          </swiper-slide>
        </swiper>

        <div
          class="swiper-pagination hidden md:flex gap-6 !top-full justify-center !left-1/2 !-translate-x-1/2 !mt-8"
        ></div>

        <!-- Navigation Back -->
        <button
          class="hidden lg:flex swiper-prev-why rounded-full border border-dark1 h-14 w-14 items-center justify-center absolute top-auto mt-0 right-full mr-5 hover:text-primary hover:border-primary duration-200"
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
          class="hidden lg:flex swiper-next-why rounded-full border border-dark1 h-14 w-14 items-center justify-center absolute top-auto mt-0 left-full ml-5 hover:text-primary hover:border-primary duration-200"
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
