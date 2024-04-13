<script setup lang="ts">
import { ref } from 'vue'
import ButtonCustom from '@/components/ui/ButtonCustom.vue'
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
  <footer class="bg-black pb-8 section">
    <div class="rounded-bl-[140px] rounded-br-[140px] sm:h-52 bg-white"></div>
    <section class="max-w-screen-xl mx-auto sm:px-11 sm:-mt-40">
      <div class="md:rounded-3xl lg:rounded-full py-8 2xl:py-10 px-5 sm:px-8 md:px-20 bg-gradient">
        <h2
          class="text-2xl sm:text-3xl xl:text-5xl 2xl:text-6xl font-bold mb-3 text-center text-white font-source-pro uppercase"
        >
          Ready to Get Started?
        </h2>
        <p class="xl:text-lg text-center text-white">
          Click below to explore how Vera can transform your everyday life!
        </p>

        <div class="rounded-full p-2 flex items-center bg-white/40 max-w-2xl mx-auto mt-5 lg:mt-16">
          <input
            type="text"
            class="bg-transparent w-full placeholder:text-white text-white font-montserrat ml-3 md:ml-8 font-medium xl:text-xl focus:outline-none"
            placeholder="james@gmail.com"
          />
 
          <ButtonCustom size="large" class="group whitespace-nowrap border-0 !bg-white after:top-1 after:left-1 hover:after:top-0 hover:after:left-0 xl:after:left-0 xl:after:top-0 xl:hover:after:left-1 xl:hover:after:top-1">
            Get Start 
          </ButtonCustom>
        </div>
      </div>
    </section>
    <section class="container-custom mt-10 sm:mt-24">
      <!-- Links -->
      <div class="grid grid-cols-2 sm:grid-cols-3 2xl:flex justify-between max-w-screen-lg mx-auto 2xl:gap-x-20 gap-y-10 text-white">
        <div class="">
          <h3 class="font-bold sm:text-xl mb-5 font-source-pro">Quick Links</h3>
          <ul class="font-sans text-[#6F6F6F] flex flex-col">
            <li class="hover:text-white duration-200">
              <a href="/">Home</a>
            </li>
            <li class="hover:text-white duration-200">
              <a href="/">About</a>
            </li>
            <li class="hover:text-white duration-200">
              <a href="/">Sign Up</a>
            </li>
            <li class="hover:text-white duration-200">
              <a href="/">Login</a>
            </li>
          </ul>
        </div>
        <div class="">
          <h3 class="font-bold sm:text-xl mb-5 font-source-pro">The Project</h3>
          <ul class="font-sans text-[#6F6F6F] flex flex-col">
            <li class="hover:text-white duration-200">
              <a href="/">Companions</a>
            </li>
            <li class="hover:text-white duration-200">
              <a href="/">Highlight</a>
            </li>
            <li class="hover:text-white duration-200">
              <a href="/">Setup</a>
            </li>

            <li class="hover:text-white duration-200">
              <a href="/">Testimony</a>
            </li>
            <li class="hover:text-white duration-200">
              <a href="/">Crowdfund it</a>
            </li>
          </ul>
        </div>
        <div class="col-span-3 sm:col-span-1">
          <h3 class="font-bold text-xl mb-5 font-source-pro">Social Media</h3>
          <ul class="font-sans text-[#6F6F6F] flex gap-2">
            <li>
              <a
                href="https://www.instagram.com/veratheai/"
                class="flex justify-center items-center w-10 h-10 bg-white/10 hover:bg-white/30 duration-200 text-white rounded-full"
                ><i class="ri-facebook-fill"></i
              ></a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/veratheai/"
                class="flex justify-center items-center w-10 h-10 bg-white/10 hover:bg-white/30 duration-200 text-white rounded-full"
                ><i class="ri-twitter-x-fill"></i
              ></a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/veratheai/"
                class="flex justify-center items-center w-10 h-10 bg-white/10 hover:bg-white/30 duration-200 text-white rounded-full"
                ><i class="ri-linkedin-fill"></i
              ></a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/veratheai/"
                class="flex justify-center items-center w-10 h-10 bg-white/10 hover:bg-white/30 duration-200 text-white rounded-full"
                ><i class="ri-instagram-line"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div
        class="bg-white/25 whitespace-nowrap flex-wrap gap-2 sm:gap-4 py-4 sm:py-9 px-5 sm:px-14 sm:rounded-full flex items-center justify-between text-[#6F6F6F] mt-10 sm:mt-24"
      >
        <div class="">Copyright ©2024 VERA</div>
        <ul class="flex flex-wrap items-center gap-3">
          <li>
            <a href="/" class="hover:text-white duration-200">Terms of Use</a>
          </li>
          <li>
            <a href="/" class="hover:text-white duration-200">Privacy Policy</a>
          </li>
          <li>
            <a href="/" class="hover:text-white duration-200">Licensing</a>
          </li>
        </ul>
      </div>
    </section>
  </footer>
</template>
