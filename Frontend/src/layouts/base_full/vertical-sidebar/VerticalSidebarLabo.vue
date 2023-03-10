<script setup lang="ts">
import { ref, watch } from "vue";
import { useCustomizerStore } from "@/stores2/customizer";
import sidebarLabos from "./sidebarLabo";

const customizer = useCustomizerStore();
const sidebarMenu = ref(sidebarLabos);
</script>

<template>
  <v-navigation-drawer
    left
    :permanent="$vuetify.display.mdAndUp"
    v-model="customizer.Sidebar_drawer"
    elevation="10"
    :class="customizer.SidebarColor == 'white' ? '' : 'text-white'"
    :color="customizer.darktheme ? '' : customizer.SidebarColor"
    rail-width="75"
    mobile-breakpoint="960"
    app
    :rail="customizer.mini_sidebar"
    expand-on-hover
  >
    <!-- ---------------------------------------------- -->
    <!---Navigation -->
    <!-- ---------------------------------------------- -->
    <perfect-scrollbar class="scrollnavbar">
      <div class="profile">
        <div class="profile-pic">
          <v-avatar size="50">
            <img src="@/assets/images/users/toothstar.png" width="44" alt="**" />
          </v-avatar>
        </div>
        <div class="profile-name">
          <h5>歯科技工所専用ページ</h5>
        </div>
      </div>
      <v-list class="pa-4" color="transparent">
        <!-- ---------------------------------------------- -->
        <!---Menu Loop -->
        <!-- ---------------------------------------------- -->
        <template v-for="(item, i) in sidebarMenu">
          <!-- ---------------------------------------------- -->
          <!---Item Sub Header -->
          <!-- ---------------------------------------------- -->
          <v-list-subheader v-if="item.header">{{
            item.header
          }}</v-list-subheader>
          <!-- ---------------------------------------------- -->
          <!---If Has Child -->
          <!-- ---------------------------------------------- -->
          <v-list-group v-else-if="item.children" class="">
            <!-- ---------------------------------------------- -->
            <!---Dropdown  -->
            <!-- ---------------------------------------------- -->
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                :value="item.title"
                rounded="lg"
                class="mb-1"
              >
                <!---Icon  -->
                <template v-slot:prepend>
                  <vue-feather
                    :type="item.icon"
                    class="feather-sm  v-icon"
                  ></vue-feather>
                </template>
                <!---Title  -->
                <v-list-item-title
                  v-text="item.title"
                  class="mr-auto"
                ></v-list-item-title>
              </v-list-item>
            </template>
            <!-- ---------------------------------------------- -->
            <!---Sub Item-->
            <!-- ---------------------------------------------- -->
            <v-list-item
              v-for="(subitem, i) in item.children"
              :key="i"
              :value="subitem.to"
              :to="subitem.to"
              rounded="lg"
              class="first-level-item mb-1"
            >
              <template v-slot:prepend>
                <vue-feather :type="subitem.icon" class="feather-sm  v-icon"></vue-feather>
              </template>
              <v-list-item-title v-text="subitem.title"></v-list-item-title>
            </v-list-item>
          </v-list-group>
          <!-- ---------------------------------------------- -->
          <!---Single Item-->
          <!-- ---------------------------------------------- -->
          <v-list-item v-else :key="i" :to="item.to" rounded="lg" class="mb-1">
            <template v-slot:prepend>
              <vue-feather
                :type="item.icon"
                class="feather-sm v-icon v-icon--size-default"
              ></vue-feather>
            </template>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
          <!-- ---------------------------------------------- -->
          <!---End Single Item-->
          <!-- ---------------------------------------------- -->
        </template>
      </v-list>
    </perfect-scrollbar>
  </v-navigation-drawer>
</template>
