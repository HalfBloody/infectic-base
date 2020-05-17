<template>
  <b-form @submit.prevent="onSubmit" @change="$emit('change', $event)" novalidate>
    <b-row>
      <b-col
        v-for="(step, at) in steps"
        :key="step.title"
        :class="{ inactive: at > atStep }"
      >
        <b-badge variant="light">{{ at + 1 }}</b-badge>
        <strong>{{ step.title }}</strong>
      </b-col>
    </b-row>

    <b-progress
      :value="atStep + 1"
      :max="steps.length"
      :variant="'success'"
      height="3px"
      class="my-4"
    />

    <keep-alive>
      <component ref="step" :is="steps[atStep].component" :form="form" :defaults="steps[atStep].defaults" />
    </keep-alive>

    <b-row>
      <b-col>

        <!-- TODO -->
        <a href="javascript:history.go(-1)" v-if="atStep === 0" class="btn btn-light">Cancel</a>

        <b-button
          type="button"
          variant="light"
          v-if="atStep > 0"
          @click="prev"
        >Previous</b-button>
      </b-col>
      <b-col class="text-right">
        <b-button v-if="atStep < steps.length - 1" type="submit" variant="success" size="lg">
          Next
          <icon><icon-next /></icon>
        </b-button>
        <b-button v-if="atStep === steps.length - 1" type="submit" variant="success">
          Save
        </b-button>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import Icon from './Icon'
import IconNext from './icons/Next'

export default {
  components: {
    Icon,
    IconNext,
  },
  props: [
    'steps',
    'form',
    'submit',
  ],
  data() {
    return {
      atStep: 0,
      isSubmitInProgress: false
    }
  },
  methods: {
    async onSubmit () {
      if (this.$refs.step.validate) {
        let isValid = await this.$refs.step.validate()
        if (!isValid) return
      }
      if (this.submit) {
        let isSubmitted = await this.submit(this.atStep)
        if (!isSubmitted) return
      }

      this.next()
    },

    prev() {
      if (this.atStep === 0)
        return
      this.atStep -= 1
    },
    next() {
      if (this.isAtLastStep)
        return
      this.atStep += 1
    },
  }
}
</script>

<style lang="scss" scoped>
.inactive {
  opacity: .4;
}
</style>
