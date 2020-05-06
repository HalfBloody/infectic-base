<template>
  <b-form @submit.prevent="onSubmit" novalidate autocomplete="off">
    <b-form-group>
      <b-form-input
        id="email"
        v-model="form.email"
        :state="!$get(errors, userObject+'.email') && null"
        type="text"
        placeholder="Email address"
      />
      <b-form-invalid-feedback v-if="$get(errors, userObject+'.email.blank')">Cannot be empty.</b-form-invalid-feedback>
      <b-form-invalid-feedback v-else-if="$get(errors, userObject+'.email.invalid')">Please specify valid email.</b-form-invalid-feedback>
      <b-form-invalid-feedback v-else-if="$get(errors, userObject+'.email.taken')">This email is already registered. <nuxt-link to="/login">Sign in</nuxt-link></b-form-invalid-feedback>
    </b-form-group>
    <b-form-group>
      <b-form-input
        id="password"
        v-model="form.password"
        :state="!$get(errors, 'user.password') && null"
        type="password"
        placeholder="Password"
      />
      <b-form-invalid-feedback v-if="$get(errors, userObject+'.password.blank')">
        This is a required field and must be at least 8 characters (blank).
      </b-form-invalid-feedback>
      <b-form-invalid-feedback v-if="$get(errors, userObject+'.password.too_short')">
        This is a required field and must be at least 8 characters (too short).
      </b-form-invalid-feedback>
      <b-form-invalid-feedback v-if="$get(errors, userObject+'.password.invalid')">
        This is a required field and must be at least 8 characters (invalid).
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
  props: ['company', 'submit', 'userObjectName'],
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      errors: {
      }
    }
  },
  computed: {

    userObject () {
      return this.userObjectName ? this.userObjectName : 'user';
    }

  },
  methods: {
    async onSubmit () {
      this.isValidationError = false;
      console.log('submitted');
      try {
        await this.submit(this.form)
      } catch (error) {
        if (error.details) {
          console.log('errorDetails', error.details)
          this.errors = error.details
        } else {
          throw error
        }
      }
    }
  },


  mounted() {
    console.log('userObject', this.userObject)
  }
}
</script>
