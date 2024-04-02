<script setup lang="ts">
import TitleBadge from '@/components/ui/TitleBadge.vue'

import CTAImage from '@/assets/icons/cta-img.svg'
import CTABlock from '@/assets/icons/cta-block.svg'
import ArrowRight from '@/assets/icons/arrow-right.svg'
import ButtonCustom from '../ui/ButtonCustom.vue'
</script>

<template>
  <section class="section-height flex items-center border-b section">
    <div class="container-custom grow py-8">
      <div class="grid lg:grid-cols-2 gap-12 xl:gap-24">
        <div class="relative">
          <img :src="CTAImage" alt="" class="" />
          <img :src="CTABlock" alt="" class="absolute top-[90%] right-3/4 hidden 2xl:block" />
        </div>
        <div class="mt-11 row-start-1 lg:row-start-auto">
          <TitleBadge title="get support" />
          <h2 class="mt-9 heading-1 uppercase">Elevate Your Productivity Today!</h2>
          <p class="xl:text-lg text-[#6F6F6F] my-9">
            Don't miss out on experiencing the future of work. Embrace the power of Vera and unlock
            a world of endlesspossibilities. Increase productivity, streamline tasks, and enjoy the
            convenience of a true intelligentcompanion
          </p>
          <ButtonCustom size="large" variant="secondary" class="group">
            Learn More
            <img :src="ArrowRight" class="group-hover:-rotate-45 duration-200" />
          </ButtonCustom>
        </div>
      </div>
    </div>
  </section>
</template>
