<template>
  <nav>
    <v-toolbar class="elevation-0">
      <v-toolbar-side-icon class="mx-3">
        <v-icon large @click="drawer = !drawer">menu</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">share</span>
        <span class="orange--text">Ryyd</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <div v-if="$auth.loggedIn">
        <v-btn text color="grey--text">
          {{$auth.user.email}}
          <span>Sign Out</span>
          <v-icon right>exit_to_app</v-icon>
      </v-btn>
      </div>
      <div v-else>
        <v-btn text color="grey--text">
          <span>Sign In</span>
        </v-btn>
         <v-btn text color="grey--text">
          <span>Register</span>
        </v-btn>

      </div>
      
    </v-toolbar>

    <v-navigation-drawer temporary app v-model="drawer" dark class="blue-grey darken-2">
      <v-list dense nav class="mt-4">
        <v-list-item v-for="item in links" :key="item.title" router :to="item.route">

          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>



        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
        links: [{
            icon: 'home',
            text: 'Home',
            route: '/'
          },
          {
            icon: 'directions_car',
            text: 'My Ryyd',
            route: '/signUp'
          },
          {
            icon: 'person',
            text: 'My Profile',
            route: '/signIn'
          },
          {
            icon: 'person',
            text: 'Rider',
            route: '/rider'
          },
          {
            icon: 'person',
            text: 'Drifter',
            route: '/drifter'
          },
          {
            icon: 'person',
            text: 'Services',
            route: '/services'
          },
        ]
      }
    }
  }

</script>

<style>

</style>
