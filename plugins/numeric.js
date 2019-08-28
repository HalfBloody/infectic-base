import Vue from 'vue'
import accounting from 'accounting'

Vue.filter('currency', function(val, dec){
  return accounting.formatMoney(val, '$', dec)
})

Vue.filter('percentageFormat', function(percentage, decimal=0) {
    return (percentage * 100).toFixed(decimal) + "%"
})
