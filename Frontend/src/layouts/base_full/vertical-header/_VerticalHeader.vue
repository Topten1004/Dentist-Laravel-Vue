<script setup lang="ts">
import { ref, watch } from "vue";
import { useCustomizerStore } from "../../../stores2/customizer";
import { message, notification, profile } from "./data";
import LogoLight from "../logo/LogoLight.vue";
import LogoDark from "../logo/LogoDark.vue";
const customizer = useCustomizerStore();

const showSearch = ref(false);
const href = ref(undefined);
const messages = ref(message);
const notifications = ref(notification);
const userprofile = ref(profile);
const priority = ref(customizer.setHorizontalLayout ? 0 : 0);
function searchbox() {
  showSearch.value = !showSearch.value;
}
watch(priority, (newPriority) => {
  // yes, console.log() is a side effect
  priority.value = newPriority;
});
</script>

<template>
  <v-app-bar
    :color="customizer.darktheme ? '' : customizer.navbarColor"
    elevation="5"
    :priority="priority"
    :class="[
      'v-topbar',
      customizer.navbarColor == '#f6f6f6' ? '' : 'text-white',
    ]"
  >
    <!-- ---------------------------------------------- -->
    <!---Logo part -->
    <!-- ---------------------------------------------- -->
    <div class="pa-1">
      <LogoDark
        v-if="!customizer.darktheme && customizer.navbarColor == '#f6f6f6'"
      />
      <LogoLight v-else />
    </div>
    <v-app-bar-nav-icon
      class="hidden-sm-and-down"
      @click.stop="customizer.SET_MINI_SIDEBAR(!customizer.mini_sidebar)"
    />
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click.stop="customizer.SET_SIDEBAR_DRAWER"
    />
    <!-- ---------------------------------------------- -->
    <!---Search part -->
    <!-- ---------------------------------------------- -->

    <v-btn text icon color="lighten-2" @click="searchbox">
      <vue-feather type="search" class="feather-sm"></vue-feather>
    </v-btn>
    <v-sheet v-if="showSearch" class="searchinput pa-2" elevation="10">
      <v-text-field
        color="success"
        label="Search"
        placeholder="Search Now"
        variant="outlined"
        append-icon="mdi-close"
        density="compact"
        @click:append="searchbox"
      ></v-text-field>
    </v-sheet>
    <!---/Search part -->

    <v-spacer />
    
    <!-- ---------------------------------------------- -->
    <!---right part -->
    <!-- ---------------------------------------------- -->

    <!-- ---------------------------------------------- -->
    <!-- Messages -->

    <v-menu anchor="bottom end" origin="auto" max-width="300">
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
          <v-badge color="error" dot>
            <v-icon>mdi-message</v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-list class="pa-5" elevation="10" rounded="lg">
        <h4 class="d-flex">
          Messages
          <v-chip label small color="secondary" class="ml-auto"> 5 new </v-chip>
        </h4>

        <v-list-item
          v-for="(item, i) in messages"
          class="my-2 pa-3"
          :key="i"
          rounded="lg"
          :value="item"
          @click="href"
          :title="item.title"
          :subtitle="item.desc"
        >
          <template v-slot:prepend>
            <v-list-item-avatar icon start class="v-list-item-avatar--start">
              <v-avatar size="50">
                <v-img
                  :src="`/assets/images/users/${item.image}`"
                  :alt="item.image"
                  width="50"
                ></v-img></v-avatar
            ></v-list-item-avatar>
          </template>
        </v-list-item>
        <v-btn flat color="primary" class="mt-4" variant="tonal" block
          >See all Messages</v-btn
        >
      </v-list>
    </v-menu>

    <!-- ---------------------------------------------- -->
    <!-- Notification -->
    <!-- ---------------------------------------------- -->
    <v-menu anchor="bottom end" origin="auto">
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
          <v-badge color="error" dot>
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-list class="pa-6" elevation="10" rounded="lg" max-width="300">
        <h4 class="d-flex">
          Notifications
          <v-chip class="ml-auto" label small color="error"> 5 new </v-chip>
        </h4>
        <v-list-item
          class="pa-3 mt-2"
          v-for="(item, i) in notifications"
          :key="i"
          :value="item"
          @click="href"
          rounded="lg"
          :title="item.title"
          :subtitle="item.desc"
        >
          <template v-slot:prepend>
            <v-list-item-avatar start>
              <v-btn
                :color="item.color"
                icon
                variant="tonal"
                elevation="0"
                class="mr-3"
              >
                <vue-feather :type="item.icon" size="18"></vue-feather>
              </v-btn>
            </v-list-item-avatar>
          </template>
        </v-list-item>
        <v-btn block variant="tonal" color="secondary" class="mt-4 py-4"
          >See all Notifications</v-btn
        >
      </v-list>
    </v-menu>

    <!-- ---------------------------------------------- -->
    <!-- User Profile -->
    <!-- ---------------------------------------------- -->
    <v-menu anchor="bottom end" origin="auto" min-width="300">
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          class="pa-0 px-1"
          elevation="0"
          color="transparent"
          plain
          :ripple="false"
        >
          <v-avatar size="35">
            <img src="@/assets/images/users/user2.jpg" width="40" alt="Julia" />
          </v-avatar>
        </v-btn>
      </template>

      <v-list class="pa-6" elevation="10" rounded="lg">
        <h4 class="font-weight-medium fs-18">User Profile</h4>
        <div class="d-flex align-center my-4">
          <img
            src="@/assets/images/users/user2.jpg"
            alt="Julia"
            class="rounded-circle"
            width="90"
          />
          <div class="ml-4">
            <h4 class="font-weight-medium fs-18">Julia Roberts</h4>
            <span class="subtitle-2 font-weight-light">Administrator</span>
            <div class="d-flex align-center">
              <vue-feather
                type="mail"
                size="16"
                class="d-flex grey--text"
              ></vue-feather>
              <span class="subtitle-2 font-weight-light ml-1"
                >info@flexy.com</span
              >
            </div>
          </div>
        </div>
        <v-list-item
          class="pa-3 mb-2"
          v-for="(item, i) in userprofile"
          :key="i"
          @click="href"
          :value="item"
          :title="item.title"
          :subtitle="item.desc"
          rounded="lg"
        >
          <template v-slot:prepend>
            <v-list-item-avatar start>
              <v-btn
                :color="item.color"
                variant="tonal"
                icon
                elevation="0"
                size="small"
                class="mr-3"
              >
                <vue-feather :type="item.icon" size="18"></vue-feather>
              </v-btn>
            </v-list-item-avatar>
          </template>
        </v-list-item>
        <v-btn
          block
          color="secondary"
          to="/authentication/boxedlogin"
          variant="tonal"
          class="mt-4 py-4"
          >Logout</v-btn
        >
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
