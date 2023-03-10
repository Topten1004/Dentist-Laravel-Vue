<script setup lang="ts">
import { ref } from "vue";
const revenuecards = ref([
  {
    title: "名刺発行総数",
    iconcolor: "bg-secondary",
    icon: "activity",
    number: "::349",
  },
  {
    title: "笑顔コイン累積獲得数",
    iconcolor: "bg-warning",
    icon: "monitor",
    number: "::276",
  },
  {
    title: "医療機関登録総数",
    iconcolor: "bg-primary",
    icon: "shopping-bag",
    number: "::195",
  },
  {
    title: "医療技術者登録総数",
    iconcolor: "bg-error",
    icon: "anchor",
    number: "::874",
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
                {{ revenuecard.number }}枚
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

