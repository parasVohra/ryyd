<template>
<div>
  <v-container>
       <v-card-title primary-title>
        SignIn
    </v-card-title>

    <v-text-field v-model="email" :error-messages="emailErrors" label="E-mail" required @input="$v.email.$touch()"
      @blur="$v.email.$touch()"></v-text-field>

    <v-text-field v-model="password"  label="Password" required ></v-text-field>

     <v-text-field @input="$v.phone.$touch()" @blur="$v.phone.$touch()" v-model="phone" required :error-messages="phoneErrors" label="Phone Number" type="number"></v-text-field>

    <v-btn @click="submit" >Get OTP</v-btn>
      
  </v-container>
</div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
import axios from "axios"

export default {
    mixins: [validationMixin],

    data:() =>({
        email: '',
        phone: '',
        password:''

    }),

    validations: {
        phone: { required, maxLength: maxLength(10)},
        email: { required, email },
        password: {required}
    },
    computed: {
      phoneErrors () {
      const errors = []
      if (!this.$v.phone.$dirty) return errors
      !this.$v.phone.maxLength && errors.push('Phone Number must be at most 10 characters long')
      !this.$v.phone.required && errors.push('Phone Number is required')
      return errors
      },

      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },

    },
    methods:{


        submit () {
        this.$v.$touch()
        

        var data = {
            phone: this.phone,
            email: this.email,
            password: this.password
        }

        // this.$auth.loginWith('local', {
        //   data : data
        // })

        const config = {
          header:{
            "Accept":"application/json",
            "ontent-tyepe":  "application/json"
          }
        };

        

        axios.post('/api/signIn', data ,config)
        .then(function (res){
          console.log(res);
          

          
        })
        .catch(function(error){
          console.log(error);
        })


       }

    }

}
</script>

<style>

</style>