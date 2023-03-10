<script setup lang="ts">
import { RouterView } from "vue-router";
import VerticalSidebarPatientVue from "./vertical-sidebar/VerticalSidebarPatient.vue";
import VerticalHeaderVue from "./vertical-header/VerticalHeader.vue";
import Customizer from "./customizer/Customizer.vue";
import { useCustomizerStore } from "@/stores2/customizer";
import HorizontalHeader from "./horizontal-header/HorizontalHeader.vue";
import HorizontalSidebarPatient from "./horizontal-sidebar/HorizontalSidebarPatient.vue";
import BottomNavigationPatient from "./bottom-navigation/BottomNavigationPatient.vue";
import FooterCompany from "./bottom-navigation/FooterCompany.vue";

const customizer = useCustomizerStore();
</script>

<template>
  <v-app
    :theme="customizer.darktheme ? 'dark' : 'light'"
    :class="[
      customizer.mini_sidebar ? 'mini-sidebar' : '',
      customizer.setHorizontalLayout ? 'horizontalLayout' : 'verticalLayout',
    ]"
  >
    <Customizer />
    <VerticalHeaderVue v-if="!customizer.setHorizontalLayout" />
    <VerticalSidebarPatientVue v-if="!customizer.setHorizontalLayout" />

    <v-main>
      <HorizontalHeader v-if="customizer.setHorizontalLayout" />
      <HorizontalSidebarPatient v-if="customizer.setHorizontalLayout" />

      <v-container fluid class="page-wrapper">
      <!-- <v-container> -->
        
        <RouterView />

        <v-btn
          class="customizer-btn"
          variant="flat"
          icon="mdi-cog"
          size="small"
          flat
          @click.stop="
            customizer.SET_CUSTOMIZER_DRAWER(!customizer.Customizer_drawer)
          "
        >
        </v-btn>
      </v-container>
      <FooterCompany />
    </v-main>
    <!-- スマホ用フッターボタン -->
        <div>
        <BottomNavigationPatient />
        </div>
  </v-app>
</template>
