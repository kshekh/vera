<script setup lang="ts">
import AppNav from '@/components/layout/AppNav.vue'
import SupportSection from '@/components/pages/SupportSection.vue'
import HomeBegin from '@/components/pages/home/HomeBegin.vue'
import HomeIntro from '@/components/pages/home/HomeIntro.vue'
// import ReviewsSection from '@/components/pages/ReviewsSection.vue'
import HomeWhy from '@/components/pages/home/HomeWhy.vue'
import TestimonialSection from '@/components/pages/TestimonialSection.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<template>
  <div class="overflow-x-hidden main-container flex flex-col">
    <AppNav />
    <main class="flex-1">
    <HomeIntro />
    <!-- <ReviewsSection /> -->
    <HomeWhy />
    <HomeBegin />
    <TestimonialSection />
    <SupportSection />
  </main>
    <AppFooter />
  </div>
</template>
