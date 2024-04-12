<script setup lang="ts">
import { ref } from 'vue'

import ArrowRight from '@/assets/icons/arrow-right.svg'
import ButtonCustom from '@/components/ui/ButtonCustom.vue'
import TitleBadge from '@/components/ui/TitleBadge.vue'

const POINTS = [
  {
    title: `Connect to your device's network`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when.`
  },
  {
    title: `Connect your VERA device to a Wifi spot.`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when.`
  },
  {
    title: `Start chatting from any system in LAN."`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when.`
  }
]

const activeIndex = ref(0)
</script>

<template>
  <section class="section-height flex items-center border-b section">
    <div class="container-custom grow py-8">
      <div class="grid md:grid-cols-2 gap-10 xl:gap-24">
        <div class="">
          <TitleBadge title="let's begin" />

          <h2 class="mt-4 mb-9 heading-1 uppercase max-w-md">{{ POINTS[activeIndex].title }}</h2>
          <ButtonCustom size="large" class="group after:top-1 after:left-1 hover:after:top-0 hover:after:left-0 xl:after:left-0 xl:after:top-0 xl:hover:after:left-1 xl:hover:after:top-1">
            Get Started
            <img :src="ArrowRight" class="group-hover:-rotate-45 duration-500" />
          </ButtonCustom>
        </div>
        <div class="flex flex-col gap-y-10 relative">
          <div
            v-for="(point, index) in POINTS"
            :key="point.title"
            class="grid grid-cols-[auto_1fr] items-start gap-6"
          >
            <span
              :class="`bg-[#F8F8F8] rounded-full py-[6px] font-bold px-[16px] border-8 text-xl font-source-pro duration-500 ${
                index <= activeIndex ? 'border-primary' : 'border-[#F8F8F8]'
              }`"
            >
              {{ index + 1 }}
            </span>
            <div>
              <button
                @click="activeIndex = index"
                class="text-lg xl:text-2xl text-left font-bold mb-4 text-dark2 font-source-pro hover:text-primary duration-500"
              >
                {{ point.title }}
              </button>
              <p v-show="index <= activeIndex" class="text-sm xl:text-base text-body">
                {{ point.description }}
              </p>
            </div>
          </div>

          <div
            class="absolute left-[27px] top-0 -z-10 h-4/5 w-[6px] duration-500"
            :style="`background: linear-gradient(
                180deg,
                var(--color-primary) ${33 * activeIndex}%,
                #F8F8F8 ${33 * (activeIndex + 1)}%
              );`"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
