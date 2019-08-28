<template>
  <div class="avatar rounded-circle" :style="circleStyle">
    <span class="initials" :style="initialsStyle">{{ initials }}</span>
  </div>
</template>

<script>
export default {
  props: {
    "initials": {
      default: '?'
    },
    "circleSize": {
      default: "2.5rem"
    },
    "initialsSize": {
      default: "1rem"
    }
  },
  computed: {
    circleStyle () {
      return "width: " + this.circleSize + "; height: " + this.circleSize + ";"
    },
    initialsStyle () {
      return "font-size: " + this.initialsSize
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/app";

.avatar {
  background: #CCEFFF;
  display: flex;
  align-items: center;
  justify-content: center;

  .initials {
    font-weight: bold;
    color: #02ADFF;
    padding: 5px;
  }
}
</style>
