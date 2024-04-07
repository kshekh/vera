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
  <section class="lg:min-h-screen py-10 lg:py-20 border-b flex items-center section">
    <div class="container-custom !px-3 lg:!px-8 grow ">
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
            <div class="flex gap-4 mt-10">
              <button
                class="swiper-prev  rounded-full p-5 border border-dark1 hover:border-primary hover:text-primary ease-in-out duration-200"
              >
              <svg width="14" height="15" viewBox="0 0 14 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.07644 5.38699C4.57953 4.38493 6.12153 2.82191 6.50643 0.512481L7.49282 0.67688C7.0444 3.36745 5.25306 5.13776 3.63115 6.21904C3.31897 6.42715 3.01108 6.61116 2.71732 6.77267L13.6687 6.82471L13.6639 7.8247L2.75872 7.77288C3.03995 7.92883 3.3336 8.10529 3.63115 8.30366C5.25306 9.38493 7.0444 11.1552 7.49283 13.8458L6.50643 14.0102C6.12153 11.7008 4.57953 10.1378 3.07644 9.13571C2.32818 8.63686 1.60286 8.28652 1.06437 8.06111C0.795649 7.94862 0.574853 7.86783 0.422834 7.81562C0.346862 7.78953 0.288182 7.77061 0.24941 7.75849C0.230028 7.75242 0.215633 7.74806 0.206552 7.74535L0.196963 7.74251L0.195601 7.74211L0.195313 7.74203C0.195329 7.74203 0.195345 7.74204 0.195601 7.7412L0.195601 6.78149C0.195345 6.78066 0.195329 6.78066 0.195313 6.78067L0.195601 6.78059L0.196963 6.78019L0.206552 6.77735C0.215633 6.77464 0.230028 6.77027 0.24941 6.76421C0.288182 6.75208 0.346862 6.73317 0.422834 6.70708C0.574853 6.65487 0.795649 6.57407 1.06437 6.46159C1.60286 6.23617 2.32818 5.88583 3.07644 5.38699Z"  />
</svg>

              </button>
              <button
                class="swiper-next rounded-full p-5 border border-dark1 hover:border-primary hover:text-primary ease-in-out duration-200"
              >
              <svg width="14" height="15" class="rotate-180" viewBox="0 0 14 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.07644 5.38699C4.57953 4.38493 6.12153 2.82191 6.50643 0.512481L7.49282 0.67688C7.0444 3.36745 5.25306 5.13776 3.63115 6.21904C3.31897 6.42715 3.01108 6.61116 2.71732 6.77267L13.6687 6.82471L13.6639 7.8247L2.75872 7.77288C3.03995 7.92883 3.3336 8.10529 3.63115 8.30366C5.25306 9.38493 7.0444 11.1552 7.49283 13.8458L6.50643 14.0102C6.12153 11.7008 4.57953 10.1378 3.07644 9.13571C2.32818 8.63686 1.60286 8.28652 1.06437 8.06111C0.795649 7.94862 0.574853 7.86783 0.422834 7.81562C0.346862 7.78953 0.288182 7.77061 0.24941 7.75849C0.230028 7.75242 0.215633 7.74806 0.206552 7.74535L0.196963 7.74251L0.195601 7.74211L0.195313 7.74203C0.195329 7.74203 0.195345 7.74204 0.195601 7.7412L0.195601 6.78149C0.195345 6.78066 0.195329 6.78066 0.195313 6.78067L0.195601 6.78059L0.196963 6.78019L0.206552 6.77735C0.215633 6.77464 0.230028 6.77027 0.24941 6.76421C0.288182 6.75208 0.346862 6.73317 0.422834 6.70708C0.574853 6.65487 0.795649 6.57407 1.06437 6.46159C1.60286 6.23617 2.32818 5.88583 3.07644 5.38699Z"  />
</svg>

              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
