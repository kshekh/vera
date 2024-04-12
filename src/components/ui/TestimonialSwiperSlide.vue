<script setup lang="ts">
import AvatarBg from '@/assets/images/avatar-bg.png'
import Quote from '@/assets/icons/quote.svg'
import ScrambledArrow from '@/assets/icons/scrambled-arrow-1.svg'

import { defineProps } from 'vue'

const props = defineProps<{
  review: string
  userName: string
  userDesignation: string
  userImage: any
  sideImage: any
}>()
</script>

<template>
  <div class="grid lg:grid-cols-2 mt-10">
    <div class="pb-24">
      <img :src="Quote" alt="" />
      <p class="text-2xl text-[#0E1218] mt-9 mb-16">
        {{ props.review }}
      </p>
      <div class="flex gap-4 items-center">
        <div class="relative flex items-center justify-center">
          <img :src="AvatarBg" alt="" class="h-20 w-20" />
          <div class="absolute">
            <img
              :src="props.userImage"
              alt=""
              class="rounded-full overflow-hidden h-12 w-12 object-cover"
            />
          </div>
        </div>
        <div>
          <p class="text-[28px] font-bold font-source-pro">{{ props.userName }}</p>
          <p class="text-lg text-[#969696]">{{ props.userDesignation }}</p>
        </div>
      </div>
    </div>
    <div class="lg:flex justify-end relative hidden">
      <img :src="props.sideImage" alt="" class="object-contain" />
      <!-- <img :src="ScrambledArrow" alt="" class="absolute -top-20" /> -->
    </div>
  </div>
</template>
