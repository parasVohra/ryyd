<template>
  <v-app >
   <Navbar />
  <v-content>
    <nuxt/>
  </v-content>
  <v-footer>
    
  </v-footer>
 </v-app>

</template>

<script>
  import Navbar from "../components/Navbar";
  export default {
    components: {
      Navbar
    }
  }
</script>

<style>

</style>