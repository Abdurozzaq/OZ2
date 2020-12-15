<template>
  <v-app>
    <v-app-bar
      app
      color="transparent"
      elevation="0"
      flat
      hide-on-scroll
    >
      <v-container class="py-0 fill-height">
        <v-toolbar-title
            style="width: 150px"
            class="ml-0 pl-4 white--text"
        >
            <span>OZ<sup>2</sup></span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

				<v-menu 
          transition="slide-y-transition"
          bottom
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mx-2 white--text"
              fab
              text
              v-bind="attrs"
              v-on="on"
            >
              <v-icon dark>
                mdi-format-list-bulleted
              </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Contact Us</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        
      </v-container>
    </v-app-bar>

    <v-main class="pt-0">
      <v-container class="pa-0" fluid>
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-main>

    <v-toolbar 
      dense
      height="50px"
      class="footer"
      color="transparent"
      elevation="0"
    >
      <v-toolbar-title class="white--text">2020</v-toolbar-title>

      <v-spacer></v-spacer>

      <div>
        <v-btn
          text
          color="white"
          to="/"
        >
          FIRST
        </v-btn>
        <v-btn
          text
          color="white"
          to="/index2"
        >
          THEN
        </v-btn>
        <v-btn
          text
          color="white"
          to="/index3"
        >
          AFTER THAT
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-menu 
          transition="slide-y-transition"
          top
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mx-2 white--text"
              fab
              text
              v-bind="attrs"
              v-on="on"
            >
              <v-icon dark>
                mdi-information-outline
              </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>FAQ</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>License</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
    </v-toolbar>
  </v-app>
</template>


<style scoped>
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  .fade-enter-active {
    transition: opacity 5s;
  }

  .fade-leave-active {
    transition: opacity 1s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
