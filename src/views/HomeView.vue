<script setup lang="ts">
import SupportSection from '@/components/pages/SupportSection.vue'
import HomeBegin from '@/components/pages/home/HomeBegin.vue'
import HomeIntro from '@/components/pages/home/HomeIntro.vue'
// import ReviewsSection from '@/components/pages/ReviewsSection.vue'
import HomeWhy from '@/components/pages/home/HomeWhy.vue'
import TestimonialSection from '@/components/pages/TestimonialSection.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<template>
  <div class="overflow-x-hidden main-container">
    <!-- <AppNav /> -->
    <HomeIntro />
    <!-- <ReviewsSection /> -->
    <HomeWhy />
    <HomeBegin />
    <TestimonialSection />
    <SupportSection />
 
    <AppFooter />
  </div>
</template>
