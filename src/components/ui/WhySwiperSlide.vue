<script setup lang="ts">
import TitleBadge from '@/components/ui/TitleBadge.vue'

import { defineProps } from 'vue'

const props = defineProps<{
  title: string
  badgeTitle: string
  paragraphPrimary: string
  paragraphSecondary: string
  image: any
  class?: string
  reversed?: boolean
}>()
</script>

<template>
  <div class="grid md:grid-cols-2 gap-20 ">
    <div :class="`pt-5 sm:pt-12`">
      <TitleBadge :title="props.badgeTitle" />

      <h3 class="uppercase heading-2 mt-6 leading-normal">{{ props.title }}</h3>
      <p class="font-medium italic mt-4 leading-relaxed">
        {{ props.paragraphPrimary }}
      </p>
      <p class="text-body mt-2 leading-relaxed">
        {{ props.paragraphSecondary }}
      </p>
    </div>
    <div
      :class="`hidden md:flex justify-center ${props.reversed ? 'col-start-1 row-start-1' : ''}`"
    >
      <img :src="props.image" alt="" class="max-h-[450px] object-contain" />
    </div>
  </div>
</template>
