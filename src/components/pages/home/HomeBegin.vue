<script setup lang="ts">
import ArrowRight from '@/assets/icons/arrow-right.svg'
import StarSvg from '@/assets/icons/star.svg'
</script>

<template>
  <section class="min-h-screen flex items-center border-b">
    <div class="max-w-7xl mx-auto px-11 grow">
      <div class="flex justify-between gap-32">
        <div class="w-[450px]">
          <label for="" class="border border-[#101010] py-2 font-bold px-9 text-sm rounded-full"
            >LET'S BEGIN</label
          >
          <p class="mt-4 mb-9 text-5xl font-bold">Lorem Ipsum is simply dummy text</p>
          <button class="btn-primary">
            Get Started
            <img :src="ArrowRight" alt="" />
          </button>
          <div class="flex justify-end">
            <img :src="StarSvg" alt="" />
          </div>
        </div>
        <div class="flex justify-between gap-4">
          <div class="flex flex-col items-center">
            <p
              class="bg-[#F8F8F8] rounded-full py-[6px] font-bold px-[16px] border-[#A6FF00] border-8 text-xl"
            >
              1
            </p>
            <div class="h-32 w-[6px] bg-gradient-to-b from-[#A6FF00] to-[#F8F8F8]"></div>
            <p
              class="bg-[#F8F8F8] rounded-full py-[6px] font-bold px-[16px] border-[#F8F8F8] border-8 text-xl"
            >
              2
            </p>
            <div class="bg-[#F8F8F8] h-32 w-[6px]"></div>
            <p
              class="bg-[#F8F8F8] rounded-full py-[6px] font-bold px-[16px] border-[#F8F8F8] border-8 text-xl"
            >
              3
            </p>
          </div>
          <div>
            <div class="mt-3">
              <div class="mb-10 w-[523px]">
                <p class="text-2xl font-bold mb-4 text-dark2">Lorem Ipsum is simply dummy</p>
                <p class="text-base text-body">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when.
                </p>
              </div>
              <div class="mb-10 w-[523px]">
                <p class="text-2xl font-bold mb-4 text-dark2">Lorem Ipsum is simply dummy</p>
                <p class="text-base text-body">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when.
                </p>
              </div>
              <div class="mb-10 w-[523px]">
                <p class="text-2xl font-bold mb-4 text-dark2">Lorem Ipsum is simply dummy</p>
                <p class="text-base text-body">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
