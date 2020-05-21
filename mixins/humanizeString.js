export default {
  methods: {
    snakeToHuman (string) {
      return string
    // insert a space before all caps
        .replace(/_/g, ' ');
    // uppercase the first character
        .replace(/^./, function(str){ return str.toUpperCase(); })
    }
  }
}

