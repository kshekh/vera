<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  class: {
    required: false,
    type: String,
    default: ''
  },
  type: {
    required: false,
    type: String,
    default: 'button'
  },
  variant: {
    required: false,
    type: String,
    default: 'primary'
  },
  size: {
    required: false,
    type: String,
    default: 'small'
  }
})

const getButtonClass = () => {
  let buttonClass =
    'flex items-center gap-2 font-medium rounded-full bg-primary border border-dark1 font-source-pro relative'

  let buttonAfterClass = ` after:absolute after:content-[""] after:h-full after:w-full after:top-0 after:left-0 after:bg-dark1 after:rounded-full after:-z-10 after:hover:top-1 after:hover:left-1 after:duration-200`

  if (props.variant === 'secondary') {
    buttonClass += ' bg-white text-dark1'
  } else {
    buttonClass += ' bg-primary text-dark1'
  }

  if (props.size === 'small') {
    buttonClass += ' text-xs py-[10px] px-6'
  } else if (props.size === 'large') {
    buttonClass += ' px-4 xl:px-6 py-2 xl:py-4'
  }

  return buttonClass + buttonAfterClass + ' ' + props.class
}
</script>

<template>
  <button :class="getButtonClass()">
    <slot></slot>
  </button>
</template>
