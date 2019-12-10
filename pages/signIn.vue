<template>
  <v-container>
       <v-card-title primary-title>
        SignIn
    </v-card-title>
     <v-text-field @input="$v.phone.$touch()" @blur="$v.phone.$touch()" v-model="phone" required :error-messages="phoneErrors" label="Phone Number" type="number"></v-text-field>

    <v-btn >Get OTP</v-btn>
      
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],

    data:() =>({
        phone:''
    }),

    validations: {
        phone: { required, maxLength: maxLength(10)},
    },
     computed: {
         phoneErrors () {
          const errors = []
          if (!this.$v.phone.$dirty) return errors
          !this.$v.phone.maxLength && errors.push('Phone Number must be at most 10 characters long')
          !this.$v.phone.required && errors.push('Phone Number is required')
          return errors
        
      },

    }

}
</script>

<style>

</style>