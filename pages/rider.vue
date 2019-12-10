<template>
  <v-container grid-list-md>
      <v-card-title primary-title>
          Find a ride
      </v-card-title>

      <v-text-field
          name="pickup"
          label="Pick Up point"
          id="pickup"
      ></v-text-field>
      <v-text-field
          name="destination"
          label="Destination"
          id="destination"
      ></v-text-field>
      <v-col cols="12" sm="6" md="4">
      <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="date"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            label="Picker in dialog"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
        </v-date-picker>
      </v-dialog>
    </v-col>
      <v-col cols="12" sm="6" md="4">
      <v-dialog
        ref="dialog"
        v-model="modal2"
        :return-value.sync="time"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="time"
            label="Picker in dialog"
            prepend-icon="access_time"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="modal2"
          v-model="time"
          full-width
        >
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="modal2 = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
        </v-time-picker>
      </v-dialog>
    </v-col>
      <v-btn color="info">Search</v-btn>

      <TripCard />
  </v-container>
</template>

<script>
import TripCard  from "../components/TripCard";
export default {
    components:{
        TripCard
    },
    data: () => ({
        date: new Date().toISOString().substr(0, 10),     
        modal: false,
        time: null,
        modal2: false,
    
    }),

}
</script>

<style>

</style>