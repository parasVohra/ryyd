<template>
<div>
  <v-container grid-list-xs>
      <v-btn color="success" @click="getResponse()">OFFER A RIDE</v-btn>
      <v-btn color="success">FIAND A RIDE</v-btn>
  </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {

  


  methods:{
    getResponse(){

      axios.get('/api/')
        .then(function (res){
          console.log(res.data);
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