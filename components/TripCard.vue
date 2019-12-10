<template>
  <v-card
    max-width="340"
    class="mx-auto my-5"

  >
   <v-card-text class="px-2">Date</v-card-text>
    <v-list-item >
        <v-col class="px-2">
            <v-row><v-list-item-avatar color="grey"></v-list-item-avatar></v-row>
            <v-row>Name</v-row>
            <v-row>
                <span class="grey--text text--lighten-2 caption mr-2">
                    ({{ rating }})
                </span>
                <v-rating
                    v-model="rating"
                    background-color="white"
                    color="yellow accent-4"
                    dense
                    half-increments
                    hover
                    size="8"
                ></v-rating>
            </v-row>

        </v-col>
        
        <v-row no-gutters sm = "12">
            
            <v-col sm = "4">
                <p class="caption text-center">London</p>
                <p class="caption text-center">Time</p>
            </v-col>
            <v-col sm = "4" class="px-1">
                <v-icon medium class="mx-3">trending_flat</v-icon>
                <p class="caption mx-1">2 Stops</p>
            </v-col>
            <v-col sm = "4">
                <p class="caption text-center">Toronto</p>
                <p class="caption text-center">Time</p>
            </v-col>
        </v-row>
        <v-col class="px-1">
           <p class="title success--text">$ 25</p>
        </v-col>
    </v-list-item>
      
  </v-card>
</template>

<script>
export default {

    data: ()=>({
        rating: 5
    })

}
</script>

<style>

</style>