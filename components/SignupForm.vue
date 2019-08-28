<template>
  <b-form @submit.prevent="onSubmit" novalidate autocomplete="off">
    <b-form-group>
      <b-form-input
        id="email"
        v-model="form.email"
        :state="!errors.email && null"
        type="text"
        placeholder="Email address"
      />
      <b-form-invalid-feedback v-if="$get(errors, 'email.blank')">Cannot be empty.</b-form-invalid-feedback>
      <b-form-invalid-feedback v-else-if="$get(errors, 'email.invalid')">Please specify valid email.</b-form-invalid-feedback>
      <b-form-invalid-feedback v-else-if="$get(errors, 'email.taken')">This email is already registered. <nuxt-link to="/login">Sign in</nuxt-link></b-form-invalid-feedback>
    </b-form-group>
    <b-form-group>
      <b-form-input
        id="password"
        v-model="form.password"
        :state="!errors.password && null"
        type="password"
        placeholder="Password"
      />
      <b-form-invalid-feedback v-if="$get(errors, 'password.blank')">
        This is a required field and must be at least 3 characters.
      </b-form-invalid-feedback>
    </b-form-group>
    <b-button type="submit" variant="success">
      Submit
    </b-button>
    Already have account? <nuxt-link to="/login">Sign in</nuxt-link>
  </b-form>
</template>

<script>
export default {
  props: ['company', 'submit'],
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      errors: {}
    }
  },
  methods: {
    async onSubmit () {
      this.isValidationError = false
      try {
        await this.submit(this.form)
      } catch (error) {
        if (error.details) {
          this.errors = error.details
        } else {
          throw error
        }
      }
    }
  },


  mounted() {
    console.log('submit action', this.submit)
  }
}
</script>