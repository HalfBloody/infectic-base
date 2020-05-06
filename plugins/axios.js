import set from 'lodash.set'
import isEmpty from 'lodash.isempty'

export default function (context) {
  let { $axios, redirect } = context


  $axios.onError(error => {
    let code = parseInt(error.response && error.response.status)
    if (code === 401) {

      error.details = {}
      let entities = error.response.data
      for (let entity in entities) { // entity = "user"
        error.details[entity] = {}
        let railsDetails = entities[entity]
        for (let prop in railsDetails) {
          let codes = {}
          set(error.details[entity], prop, codes)
          for (let rule of railsDetails[prop]) {
            let code = rule.error
            delete rule.error
            codes[code] = isEmpty(rule) || rule
          }
        }
      }
      console.log('error 401', error.details)
      redirect('/login', {
        // Append either `?back` or nothing
        back: context.from.name !== 'login' && null
      })
    } else if (code === 422) {
      error.details = {}
      let entities = error.response.data
      for (let entity in entities) { // entity = "user"
        error.details[entity] = {}
        let railsDetails = entities[entity]
        for (let prop in railsDetails) {
          let codes = {}
          set(error.details[entity], prop, codes)
          for (let rule of railsDetails[prop]) {
            let code = rule.error
            delete rule.error
            codes[code] = isEmpty(rule) || rule
          }
        }
      }
      console.log('error 422', error.details)
    } else if (code === 400) {
      error.details = {}
      let entities = error.response.data
      console.log('error 400')
      console.log(error.response.data)
      for (let entity in entities) { // entity = "user"
        error.details[entity] = {}
        let railsDetails = entities[entity]
        for (let prop in railsDetails) {
          let codes = {}
          set(error.details[entity], prop, codes)
          for (let rule of railsDetails[prop]) {
            let code = rule.error
            delete rule.error
            codes[code] = isEmpty(rule) || rule
          }
        }
      }
    } else if (code === 500) {
      console.log('error 500', error.response.data)
    }
  })
}
