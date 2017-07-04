import Vue from 'vue/dist/vue'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'
// Components
import initTry from './containers/Try'

Vue.use(VueRouter)

const dict = {
  en: {
    custom: {
      email: {
        required: () => 'Fyll inn en gyldig epostadresse',
        email: () => 'Dette ser ikke ut som en gyldig epostadresse'
      },
      firstName: {
        required: () => 'Fornavn må fylles ut'
      },
      lastName: {
        required: () => 'Etternavn må fylles ut'
      },
      'shippingAddress[firstName]': {
        required: () => 'Fornavn må fylles ut'
      },
      'shippingAddress[lastName]': {
        required: () => 'Etternavn må fylles ut'
      },
      phone: {
        required: () => 'Fyll inn et gyldig telefonnummer'
      },
      'shippingAddress[phone]': {
        required: () => 'Fyll inn et gyldig telefonnummer'
      },
      'shippingAddress[address1]': {
        required: () => 'Fyll inn gateadresse'
      },
      'shippingAddress[zipCode]': {
        required: () => 'Fyll inn postnummer'
      },
      'shippingAddress[city]': {
        required: () => 'Fyll inn by'
      },
      message: {
        required: () => 'Hva lurer du på?'
      }
    }
  }
}

VeeValidate.Validator.updateDictionary(dict)
Vue.use(VeeValidate)
if (document.getElementById('js-try')) {
  initTry()
}
