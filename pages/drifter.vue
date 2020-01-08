<template>
<div>
  <v-container class="mx-auto">
    <v-card-title primary-title>
      Offer Ride
    </v-card-title>
    <v-text-field name="pickup" label="Pick Up point" id="pickup" v-model="pickup"></v-text-field>
    <v-text-field name="destination" label="Destination" id="destination" v-model="destination"></v-text-field>
    <v-row class="mx-auto">
      <v-col cols="6" sm="6" md="4">
        <v-dialog ref="dialog" v-model="modal" :return-value.sync= "date" persistent width="300px">
          <template v-slot:activator="{ on }">
            <v-text-field v-model="date" label="Picker in dialog" prepend-icon="event" readonly v-on="on">
            </v-text-field>
          </template>
          <v-date-picker v-model="date" :value= "date" scrollabl actions>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click= "modal = false">Cancel</v-btn>
            <v-btn text color="primary" @click= "$refs.dialog.save(date)">OK</v-btn>
          </v-date-picker>
        </v-dialog>
      </v-col>
      <v-col cols="6" sm="6" md="4">
        <v-dialog ref="dialog" v-model= "modal2" :return-value.sync="time" persistent width="290px">
          <template v-slot:activator="{ on }">
            <v-text-field v-model="time" label="Picker in dialog" prepend-icon="access_time" readonly v-on="on">
            </v-text-field>
          </template>
          <v-time-picker v-if="modal2" v-model="time" full-width>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modal2 = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
          </v-time-picker>
        </v-dialog>
      </v-col>
    </v-row>


    <v-text-field name="selectVeh" label="Select Vehical" id="selectVeh" v-model="vehical"></v-text-field>

    <v-select :items="seats" v-model="seats" label="No. of Seats"></v-select>

    <v-text-field name="price" label="Price"  v-model="price"  id="price"></v-text-field>

    <v-text-field label="Additional Information" name="additionalInfo" textarea></v-text-field>

    <v-btn color="info" @click="publish">Publish</v-btn>
  </v-container>
</div>
</template>

<script>
import axios from "axios";
export default {
    data: () => ({
        seats: [1,2,3,4,5,6],
        date: new Date().toISOString().substr(0, 10),     
        modal: false,
        time: null,
        modal2: false,
        price:0
    }),

    methods:{
      publish(){

        var data = {
            date : this.date,
            pickup: this.pickup,
            destination: this.destination,
            time: this.time,
            price: this.price,
            vehical: this.vehical,
            seats: this.seats,
        }

        const config = {
          header:{
            "Accept":"application/json",
            "ontent-tyepe":  "application/json"
          }
        };


        axios.post('/api/publishRide', data ,config)
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