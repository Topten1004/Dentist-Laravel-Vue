<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import { useDisplay } from "vuetify";
import BottomNavigationLanding from "./BottomNavigationLanding.vue";
const display = useDisplay();

const links = ref([
{ title: 'Top',  url: '/'},
{ title: '患者',  url: '/patient'},
{ title: '歯科医師',  url: '/dentist'},
{ title: '歯科技工士',  url: '/artisan'},
{ title: '歯科衛生士',  url: '/hygienist'},
{ title: '歯科医療機関',  url: '/clinic'},
{ title: '歯科技工所',  url: '/labo'},
{ title: '学会・団体',  url: '/society'},
]);

</script>


<template>

  <v-app>
    <v-main>
    <v-app-bar flat height="80" elevation="2" v-if="display.mdAndUp.value">
      <v-container fluid class="d-flex py-0 px-0 px-sm-2 fill-height">
      <router-link to="/" class="d-flex align-center text-decoration-none mx-2 ">
          <img src="@/assets/images/logos/logo.png" height="46" />
      </router-link>
      </v-container>
      <v-container class="d-flex justify-end">
        <div class="hidden-sm-and-down">
          <v-btn
          variant="outlined"
          color="success"
          to="/login">
            Sign In
          </v-btn>
          <v-btn 
          variant="outlined"
          color="accent"
          class="mx-2"
          large 
          to="/regist">
          新規登録
          </v-btn>
          <v-btn
          icon
          variant="outlined"
          color="blue darken-4"
          to="/inquiry">
          <v-icon>mdi-email</v-icon>
          </v-btn>
        </div>
        </v-container>
    </v-app-bar>
     
    <v-spacer />
    
  <RouterView />

      <v-footer class="bg-blue-grey-darken-4 py-8">
        <v-row justify="center" no-gutters>
          <v-btn
            v-for="link in links"
            :key="link.title"
            :to="link.url"
            color="white"
            variant="text"
            class="mx-2"
            rounded="xl"
          >
            {{ link.title }}
          </v-btn>
          <v-col class="text-center text-white mt-4" cols="12">
            {{ new Date().getFullYear() }}.  <strong>© CS24 Co,.Ltd. All Rights Reserved.</strong>
          </v-col>
        </v-row>
      </v-footer>

    </v-main>
    <!-- スマホ用フッターボタン -->
    <!-- <div class="hidden-lg-and-up"> -->
    <div>
        <BottomNavigationLanding ></BottomNavigationLanding>
    </div>
  </v-app>

</template>

