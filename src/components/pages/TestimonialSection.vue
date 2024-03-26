<script setup lang="ts">
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/bundle'

import ArrowRight from '@/assets/icons/arrow-right.svg'
import AvatarBg from '@/assets/images/avatar-bg.png'
import TestimonialImg from '@/assets/images/testimonial-img.png'
import Quote from '@/assets/icons/quote.svg'
import ScrambledArrow from '@/assets/icons/scrambled-arrow-1.svg'
</script>

<template>
  <section class="min-h-screen border-b flex items-center">
    <div class="container-custom grow py-8">
      <div class="max-w-[90vw]">
        <div class="flex flex-col items-center gap-4">
          <label for="" class="border border-dark1 py-2 font-bold px-9 text-sm rounded-full"
            >TESTIMONY</label
          >
          <h2 class="text-3xl md:text-5xl font-bold">Lorem Ipsum is simply</h2>
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
            <swiper-slide v-for="index in 3" :key="index">
              <div class="grid lg:grid-cols-2 mt-24">
                <div class="pb-24">
                  <img :src="Quote" alt="" />
                  <p class="text-2xl text-[#0E1218] font-urban mt-9 mb-16">
                    “{{ index }} Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled.”
                  </p>
                  <div class="flex gap-4 items-center">
                    <div class="relative flex items-center justify-center">
                      <img :src="AvatarBg" alt="" class="h-20 w-20" />
                      <div class="absolute">
                        <img
                          src="https://images.macrumors.com/t/SFqUU_sFiQGMFVYosvux1uZbWEw=/1600x/article-new/2019/02/timcooktulane.jpg"
                          alt=""
                          class="rounded-full overflow-hidden h-12 w-12 object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <p class="text-[28px] font-bold">James Ryan</p>
                      <p class="text-lg text-[#969696] font-montserrat">Senior UI Designer</p>
                    </div>
                  </div>
                </div>
                <div class="lg:flex justify-end relative hidden">
                  <img :src="TestimonialImg" alt="" class="object-contain" />
                  <img :src="ScrambledArrow" alt="" class="absolute -top-20" />
                </div>
              </div>
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
