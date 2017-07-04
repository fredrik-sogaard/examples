import Vue from 'vue/dist/vue'
import VeeValidate from 'vee-validate'
import Form from '../utils/Form'

Vue.use(VeeValidate)

const initTry = () => {
  const Try = new Vue({
    el: '#js-try',
    delimiters: ['${', '}'],
    data () {
      return {
        form: new Form({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          message: ''
        })
      }
    },

    methods: {
      validateBeforeSubmit (event) {
        event.preventDefault ? event.preventDefault() : (event.returnValue = false)
        this.$validator.validateAll().then((result) => {
          if (result) {
            // We good, submit form.
            event.target.submit()
          }
        }).catch(() => {
          // Not valid
          // console.log('Errors in form')
        })
      }
    }
  })
}

export default initTry
