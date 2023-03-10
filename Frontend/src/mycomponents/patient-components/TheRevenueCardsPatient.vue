<script setup lang="ts">
import { ref } from "vue";
const revenuecards = ref([
  {
    title: "名刺発行総数",
    iconcolor: "bg-secondary",
    icon: "activity",
    number: "::2249",
    unit: "枚",
  },
  {
    title: "笑顔コイン総発行数",
    iconcolor: "bg-warning",
    icon: "heart",
    number: "::4276",
    unit: "枚",
  },
  {
    title: "笑顔創造職人総数",
    iconcolor: "bg-primary",
    icon: "user",
    number: "::795",
    unit: "名",
  },
  {
    title: "登録済患者数",
    iconcolor: "bg-error",
    icon: "users",
    number: "::487",
    unit: "名",
  },
]);
</script>

<template>
  <v-row>
    <v-col
      cols="12"
      lg="3"
      sm="6"
      v-for="revenuecard in revenuecards"
      :revenuecard="revenuecard"
      :key="revenuecard.title"
      class="py-0 mb-3"
    >
      <v-card elevation="2">
        <v-card-text class="pa-5">
          <div class="d-flex align-center">
            <v-btn
              :class="[revenuecard.iconcolor]"
              class="elevation-0"
              icon
              dark
            >
              <vue-feather :type="revenuecard.icon"></vue-feather>
            </v-btn>
            <div class="ml-2 mr-1">
              <h2 class="title">
                {{ revenuecard.number }} {{ revenuecard.unit }}
              </h2>
              <h4 class="font-weight-regular mt-1">
                {{ revenuecard.title }}
              </h4>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
