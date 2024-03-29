<script setup lang="ts">
import ArrowRight from '@/assets/icons/arrow-right.svg'
import StarSvg from '@/assets/icons/star.svg'
import ButtonCustom from '@/components/ui/ButtonCustom.vue'
import TitleBadge from '@/components/ui/TitleBadge.vue'
</script>

<template>
  <section class="section-height flex items-center border-b">
    <div class="container-custom grow py-8">
      <div class="grid md:grid-cols-2 gap-10 xl:gap-32">
        <div class="">
          <TitleBadge title="let's begin" />

          <h2 class="mt-4 mb-9 heading-1 uppercase max-w-md">Lorem Ipsum is simply dummy text</h2>
          <ButtonCustom size="large" class="group">
            Get Started
            <img :src="ArrowRight" class="group-hover:-rotate-45 duration-200" />
          </ButtonCustom>
        </div>
        <div class="flex justify-between gap-4">
          <div class="flex flex-col items-center">
            <p
              class="bg-[#F8F8F8] rounded-full py-[6px] font-bold px-[16px] border-primary border-8 text-xl font-source-pro"
            >
              1
            </p>
            <div class="h-32 w-[6px] bg-gradient-to-b from-primary to-[#F8F8F8]"></div>
            <p
              class="bg-[#F8F8F8] rounded-full py-[6px] font-bold px-[16px] border-[#F8F8F8] border-8 text-xl font-source-pro"
            >
              2
            </p>
            <div class="bg-[#F8F8F8] h-32 w-[6px]"></div>
            <p
              class="bg-[#F8F8F8] rounded-full py-[6px] font-bold px-[16px] border-[#F8F8F8] border-8 text-xl font-source-pro"
            >
              3
            </p>
          </div>
          <div>
            <div class="mt-3">
              <div class="mb-10">
                <p class="text-lg xl:text-2xl font-bold mb-4 text-dark2 font-source-pro">
                  Lorem Ipsum is simply dummy
                </p>
                <p class="text-sm xl:text-base text-body">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when.
                </p>
              </div>
              <div class="mb-10">
                <p class="text-lg xl:text-2xl font-bold mb-4 text-dark2 font-source-pro">
                  Lorem Ipsum is simply dummy
                </p>
                <p class="text-sm xl:text-base text-body">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when.
                </p>
              </div>
              <div class="mb-10">
                <p class="text-lg xl:text-2xl font-bold mb-4 text-dark2 font-source-pro">
                  Lorem Ipsum is simply dummy
                </p>
                <p class="text-sm xl:text-base text-body">
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
