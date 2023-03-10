<script setup lang="ts">
import { ref } from "vue";
const revenuecards = ref([
  {
    title: "今月の名刺発行総数",
    iconcolor: "bg-secondary",
    icon: "activity",
    number: "::349",
    unit: "枚",
  },
  {
    title: "今月の笑顔コイン獲得数",
    iconcolor: "bg-warning",
    icon: "heart",
    number: "::276",
    unit: "枚",
  },
  {
    title: "今月のつら〜いコイン被投数",
    iconcolor: "bg-error",
    icon: "cloud-drizzle",
    number: "::8",
    unit: "枚",
  },
]);
</script>

<template>
  <v-row>
    <v-col
      cols="12"
      lg="4"
      md="4"
      sm="12"
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
              <h4 class="font-weight-regular mt-1">
                {{ revenuecard.title }}
              </h4>
              <h2 class="title">
                {{ revenuecard.number }} {{ revenuecard.unit }}
              </h2>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
