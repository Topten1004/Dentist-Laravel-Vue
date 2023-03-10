<script setup lang="ts">
import { RouterView } from "vue-router";
import VerticalSidebarDentistVue from "./vertical-sidebar/VerticalSidebarDentist.vue";
import VerticalHeaderVue from "./vertical-header/VerticalHeader.vue";
import Customizer from "./customizer/Customizer.vue";
import { useCustomizerStore } from "@/stores2/customizer";
import HorizontalHeader from "./horizontal-header/HorizontalHeader.vue";
import HorizontalSidebarDentist from "./horizontal-sidebar/HorizontalSidebarDentist.vue";
import BottomNavigationDentist from "./bottom-navigation/BottomNavigationDentist.vue";
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
    <VerticalSidebarDentistVue v-if="!customizer.setHorizontalLayout" />
  
    <v-main>
      <HorizontalHeader v-if="customizer.setHorizontalLayout" />
      <HorizontalSidebarDentist v-if="customizer.setHorizontalLayout" />
      <v-container fluid class="page-wrapper">
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
        <BottomNavigationDentist />
        </div>
  </v-app>

</template>
