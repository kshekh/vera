<script setup lang="ts">
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/bundle'

import WhySwiperSlide from '@/components/ui/WhySwiperSlide.vue'
import { WHY_VERA } from '@/data/why-vera'
</script>

<template>
  <section class="border-b flex items-center py-10 lg:py-20 lg:min-h-screen section group overflow-hidden">
    <div class="container-custom !px-3 lg:!px-8 w-full lg:pb-20">
      <h2 class="heading-1 text-center uppercase">Why Vera</h2>

      <div class="relative  max-w-[90vw] ">
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
          class="swiper-pagination hidden xl:flex gap-6 !top-full justify-center !left-1/2 !-translate-x-1/2 !mt-8"
        ></div>

        <!-- Navigation Back -->
        <button
          class="opacity-0 -left-full group-hover:-left-20 group-hover:opacity-100 ease-in-out duration-200 hidden xl:flex swiper-prev-why rounded-full border border-dark1 h-14 w-14 items-center justify-center absolute top-1/2 -translate-y-1/2 hover:text-primary hover:border-primary  "
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
          class="opacity-0 -right-full group-hover:-right-20 group-hover:opacity-100 ease-in-out duration-200 hidden xl:flex swiper-next-why rounded-full border border-dark1 h-14 w-14 items-center justify-center absolute top-1/2 -translate-y-1/2 hover:text-primary hover:border-primary  "
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
     
<!-- Mobile navigation -->

<div class="w-full flex xl:hidden justify-center gap-5">
  <buton class="swiper-prev-why rounded-full border border-dark1 h-10 w-10 items-center justify-center hover:text-primary hover:border-primary flex "><svg
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
          </svg></buton>
          <buton class="swiper-next-why rounded-full border border-dark1 h-10 w-10 items-center justify-center hover:text-primary hover:border-primary flex "><svg
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
          </svg></buton>
 </div>

      </div>
    </div>
  </section>
</template>
