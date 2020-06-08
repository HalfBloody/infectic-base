<template>
  <div class="avatar rounded-circle" :style="circleStyle">
    <span class="initials" :style="initialsStyle">{{ userInitials }}</span>
  </div>
</template>

<script>
export default {
  props: {
    "userObject": {
      type: Object
    },
    "circleSize": {
      default: "2.5rem"
    },
    "initialsSize": {
      default: "1rem"
    }
  },
  data () {
    return { }
  },
  computed: {
    circleStyle () {
      return "width: " + this.circleSize + "; height: " + this.circleSize + ";"
    },
    initialsStyle () {
      return "font-size: " + this.initialsSize
    },
    userInitials () {
      if (this.$get(this.userObject, 'first_name') && this.$get(this.userObject, 'last_name')) {
        return this.userObject.first_name[0] + this.userObject.last_name[0]
      } else {
        return 'XY'
      }

    },
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
