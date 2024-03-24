<template>
  <swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
    <swiper-slide>
      <div class="h-40 bg-red-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nostrum nulla necessitatibus
        suscipit. A minus sunt saepe, veniam soluta tenetur eos fuga vel neque? Enim saepe pariatur
        libero! Aspernatur ipsum quam culpa magnam dolorem inventore facilis voluptas quo. Sequi
        voluptatibus placeat ut odit aliquid similique modi ea ratione molestiae quos, architecto
        dolor, dolores necessitatibus. Nesciunt sunt odit eveniet rerum molestias cum architecto,
        aut provident voluptatum ab! Quo incidunt architecto repellendus ab! Cumque eligendi
        mollitia tenetur illum distinctio iusto odio eveniet, quam eos quibusdam rem, incidunt
        fugiat id facilis voluptatibus aperiam delectus similique fugit consectetur modi quas amet,
        laborum officiis sint.
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="h-40 bg-red-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nostrum nulla necessitatibus
        suscipit. A minus sunt saepe, veniam soluta tenetur eos fuga vel neque? Enim saepe pariatur
        libero! Aspernatur ipsum quam culpa magnam dolorem inventore facilis voluptas quo. Sequi
        voluptatibus placeat ut odit aliquid similique modi ea ratione molestiae quos, architecto
        dolor, dolores necessitatibus. Nesciunt sunt odit eveniet rerum molestias cum architecto,
        aut provident voluptatum ab! Quo incidunt architecto repellendus ab! Cumque eligendi
        mollitia tenetur illum distinctio iusto odio eveniet, quam eos quibusdam rem, incidunt
        fugiat id facilis voluptatibus aperiam delectus similique fugit consectetur modi quas amet,
        laborum officiis sint.
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="h-40 bg-red-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nostrum nulla necessitatibus
        suscipit. A minus sunt saepe, veniam soluta tenetur eos fuga vel neque? Enim saepe pariatur
        libero! Aspernatur ipsum quam culpa magnam dolorem inventore facilis voluptas quo. Sequi
        voluptatibus placeat ut odit aliquid similique modi ea ratione molestiae quos, architecto
        dolor, dolores necessitatibus. Nesciunt sunt odit eveniet rerum molestias cum architecto,
        aut provident voluptatum ab! Quo incidunt architecto repellendus ab! Cumque eligendi
        mollitia tenetur illum distinctio iusto odio eveniet, quam eos quibusdam rem, incidunt
        fugiat id facilis voluptatibus aperiam delectus similique fugit consectetur modi quas amet,
        laborum officiis sint.
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange
    }
  }
}
</script>
