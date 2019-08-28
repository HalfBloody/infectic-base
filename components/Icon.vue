<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :width="width" 
    :height="height" 
      viewBox="0 0 24 24" 
    :aria-labelledby="name" 
    role="presentation"
  >
    <title :id="name" lang="en">{{name}} icon</title>
    <g :fill="color">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    width: {
      type: [Number, String],
      default: null
    },
    height: {
      type: [Number, String],
      default: 24
    },
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: middle;
}
</style>