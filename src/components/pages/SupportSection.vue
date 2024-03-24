<script setup lang="ts">
import CTAImage from '@/assets/icons/cta-img.svg'
import ArrowRight from '@/assets/icons/arrow-right.svg'
</script>

<template>
  <section class="min-h-screen flex items-center border-b">
    <div class="max-w-7xl mx-auto px-11 grow">
      <div class="flex justify-between gap-32">
        <div class="">
          <img :src="CTAImage" alt="" class="relative z-10" />
        </div>
        <div class="gap-9 w-[550px] mt-11">
          <label for="" class="border border-[#101010] py-2 font-bold px-9 text-sm rounded-full"
            >GET SUPPORT</label
          >
          <h2 class="text-5xl font-bold text-[#101010] mt-9">Elevate Your Productivity Today!</h2>
          <p class="text-lg text-[#6F6F6F] montserrat my-9">
            Don't miss out on experiencing the future of work. Embrace the power of Vera and unlock
            a world of endlesspossibilities. Increase productivity, streamline tasks, and enjoy the
            convenience of a true intelligentcompanion
          </p>
          <button class="btn-primary bg-white">
            Learn More
            <img :src="ArrowRight" alt="" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
