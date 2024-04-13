<script setup lang="ts">
import TitleBadge from '@/components/ui/TitleBadge.vue'

import CTAImage from '@/assets/icons/get-support.svg'
import CTABlock from '@/assets/icons/cta-block.svg'
import ArrowRight from '@/assets/icons/arrow-right.svg'
import ButtonCustom from '../ui/ButtonCustom.vue'
</script>

<template>
  <section class="py-10 sm:py-20 lg:py-0 sm:min-h-screen flex items-center section">
    <div class="container-custom grow ">
      <div class="grid lg:grid-cols-2 gap-12 xl:gap-24">
        <div class="relative">
          <div className="border border-black/10 rounded-2xl p-5 flex justify-center items-center">
          <img :src="CTAImage" alt="" class="h-60 sm:h-auto sm:w-full" /></div>
          <img :src="CTABlock" alt="" class="-left-10 sm:-left-14 -bottom-10 sm:-bottom-24 w-40 sm:w-auto absolute block" />
        </div>
        <div class="row-start-1 lg:row-start-auto space-y-5">
          <TitleBadge title="get support" />
          <h2 class="heading-1 uppercase">Elevate Your Productivity Today!</h2>
          <p class="xl:text-lg text-[#6F6F6F] my-5 lg:my-9">
            Don't miss out on experiencing the future of work. Embrace the power of Vera and unlock
            a world of endlesspossibilities. Increase productivity, streamline tasks, and enjoy the
            convenience of a true intelligentcompanion
          </p>
          <ButtonCustom size="large" variant="secondary"  class="group after:top-1 after:left-1 hover:after:top-0 hover:after:left-0 xl:after:left-0 xl:after:top-0 xl:hover:after:left-1 xl:hover:after:top-1"> 
            Learn More
            <img :src="ArrowRight" class="group-hover:-rotate-45 duration-200" />
          </ButtonCustom>
        </div>
      </div>
    </div>
  </section>
</template>
