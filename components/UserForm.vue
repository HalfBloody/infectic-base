<template>
  <form class="form" @submit.prevent="updateUser(user.id)" novalidate autocomplete="off">
    <b-form-group label="Email">
      <b-form-input
        id="email"
        v-model="localUser.email"
        type="text"
        placeholder="example@example.com"
      />
    </b-form-group>
    <b-row>
      <b-form-group label="First Name" class="col-md-6">
        <b-form-input
          id="first_name"
          v-model="localUser.first_name"
          type="text"
          placeholder="Tim"
        />
      </b-form-group>
      <b-form-group label="Last Name" class="col-md-6 pl-0">
        <b-form-input
          id="last_name"
          v-model="localUser.last_name"
          type="text"
          placeholder="Apple"
        />
      </b-form-group>
    </b-row>
      <b-form-group label="Password" label-size="lg">
        <b-form-group label="New Password" class="">
          <b-form-input
            id="new_password"
            v-model="localUser.new_password"
            type="password"
          />
        </b-form-group>

        <b-form-group label="Password Confirmation" class="">
          <b-form-input
            id="confirm_new_password"
            v-model="localUser.new_password_confirmation"
            type="password"
          />
        </b-form-group>
        <b-form-group label="Current Password" class="">
          <b-form-input
            id="current_password"
            v-model="localUser.old_password"
            type="password"
          />
        </b-form-group>
      </b-form-group>
    <b-button type="submit" variant="success">Save</b-button>
  </form>
</template>

<script>
import { mapState } from 'vuex'
import merge from 'lodash.merge'
export default {
  mounted () {
    this.localUser = merge({}, this.user)
  },
  data() {
    return {
      localUser: {},
      errors: {}
    };
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    updateUser () {
      this.$store.dispatch('users/update', { payload: this.localUser })
      this.$notify({
        group: 'app',
        title: 'User updated',
        text: 'User updated successfully',
        type: 'success',
        duration: 5000
      })
    }
  }
};
</script>
