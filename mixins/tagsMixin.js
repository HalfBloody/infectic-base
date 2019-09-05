export default {
  methods: {
    tagStyle (state) {
      if (state == 'pending') {
        return 'in-pending'
      } else if (state == 'accepted') {
        return 'in-accepted'
      } else {
        return 'in-rejected'
      }
    }
  }
}

