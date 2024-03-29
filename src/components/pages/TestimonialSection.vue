<script setup lang="ts">
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/bundle'

import ArrowRight from '@/assets/icons/arrow-right.svg'
import TitleBadge from '../ui/TitleBadge.vue'
import TestimonialSwiperSlide from '@/components/ui/TestimonialSwiperSlide.vue'
import { TESTIMONIALS } from '@/data/testimonials'
</script>

<template>
  <section class="min-h-screen border-b flex items-center">
    <div class="container-custom grow py-8">
      <div class="max-w-[90vw]">
        <div class="flex flex-col items-center gap-4">
          <TitleBadge title="testimony" />

          <h2 class="heading-1 uppercase">Lorem Ipsum is simply</h2>
        </div>
        <div class="relative">
          <swiper
            :slides-per-view="1"
            :modules="[Navigation]"
            :navigation="{
              nextEl: '.swiper-next',
              prevEl: '.swiper-prev'
            }"
            loop
          >
            <swiper-slide v-for="slide in TESTIMONIALS" :key="slide.review">
              <TestimonialSwiperSlide
                :review="slide.review"
                :user-name="slide.userName"
                :user-image="slide.userImage"
                :side-image="slide.sideImage"
                :user-designation="slide.userDesignation"
              />
            </swiper-slide>
          </swiper>

          <div class="absolute bottom-0 z-50">
            <div class="flex gap-4 mt-11">
              <button
                class="swiper-prev rounded-full p-5 border border-dark1 hover:scale-105 hover:border-primary duration-150"
              >
                <img :src="ArrowRight" alt="" class="rotate-180" />
              </button>
              <button
                class="swiper-next rounded-full p-5 border border-dark1 hover:scale-105 hover:border-primary duration-150"
              >
                <img :src="ArrowRight" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
