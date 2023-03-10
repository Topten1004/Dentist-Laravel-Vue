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
      <v-card>
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
                {{ revenuecard.number }}
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

<script setup lang="ts">
import { ref } from "vue";
const revenuecards = ref([
  {
    title: "Total Revenue",
    iconcolor: "bg-secondary",
    icon: "activity",
    number: "$3249",
  },
  {
    title: "Online Revenue",
    iconcolor: "bg-warning",
    icon: "monitor",
    number: "$2376",
  },
  {
    title: "Offline Revenue",
    iconcolor: "bg-primary",
    icon: "shopping-bag",
    number: "$1795",
  },
  {
    title: "Ad. Expense",
    iconcolor: "bg-error",
    icon: "anchor",
    number: "$687",
  },
]);
</script>
