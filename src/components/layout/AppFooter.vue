<script setup lang="ts"></script>

<template>
  <footer class="bg-black pb-8 min-h-screen">
    <div class="rounded-bl-[140px] rounded-br-[140px] h-64 bg-white"></div>
    <section class="max-w-screen-xl mx-auto px-11 -mt-52">
      <div class="rounded-full py-10 bg-gradient border border-dark1">
        <h2 class="text-6xl font-bold mb-3 text-center text-white">Ready to Get Started?</h2>
        <p class="text-lg font-montserrat text-center text-white">
          Click below to explore how Vera can transform your everyday life!
        </p>

        <div class="rounded-full p-2 flex items-center bg-white/40 max-w-2xl mx-auto mt-16">
          <input
            type="text"
            class="bg-transparent grow placeholder:text-white text-white font-montserrat ml-8 font-medium text-xl focus:outline-none"
            placeholder="james@gmail.com"
          />
          <button class="px-[45px] py-[7px] font-bold text-lg bg-white rounded-[30px] self-center">
            Get Started
          </button>
        </div>
      </div>
    </section>
    <section class="max-w-screen-xl mx-auto px-11 mt-24">
      <!-- Links -->
      <div class="flex justify-center gap-40 text-white">
        <div class="">
          <h3 class="font-bold text-xl mb-5">Quick Links</h3>
          <ul class="font-montserrat text-[#6F6F6F] flex flex-col">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Sign Up</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div>
        <div class="">
          <h3 class="font-bold text-xl mb-5">The Project</h3>
          <ul class="font-montserrat text-[#6F6F6F] flex flex-col">
            <li>
              <a href="/">Companions</a>
            </li>
            <li>
              <a href="/">Highlight</a>
            </li>
            <li>
              <a href="/">Setup</a>
            </li>
            <li>
              <a href="/">Setup</a>
            </li>
            <li>
              <a href="/">Testimony</a>
            </li>
            <li>
              <a href="/">Crowdfund it</a>
            </li>
          </ul>
        </div>
        <div class="">
          <h3 class="font-bold text-xl mb-5">Social Media</h3>
          <ul class="font-montserrat text-[#6F6F6F] flex flex-col gap-4">
            <li>
              <a href="/">Lorem Ipsum</a>
            </li>
            <li>
              <a href="/">Lorem Ipsum</a>
            </li>
            <li>
              <a href="/">Lorem Ipsum</a>
            </li>
            <li>
              <a href="/">Lorem Ipsum</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div
        class="bg-white/25 py-9 px-14 rounded-full flex items-center justify-between text-[#6F6F6F] font-montserrat mt-24"
      >
        <div class="">Copyright ©2024 VERA</div>
        <ul class="flex items-center gap-3">
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
