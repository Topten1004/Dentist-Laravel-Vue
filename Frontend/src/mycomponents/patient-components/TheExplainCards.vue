<script setup lang="ts">
import { ref } from "vue";

const loading = ref(false);
const selection = ref(1);

function reserve() {
  loading.value = true;

  setTimeout(() => (loading.value = false), 2000);
}
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Loading -->
  <!-- ----------------------------------------------------------------------------- -->

  <v-card :loading="loading">
    <v-progress-linear
      v-if="loading"
      class="position-absolute"
      style="z-index: 1"
      color="deep-purple"
      height="10"
      indeterminate
    ></v-progress-linear>

    <v-img
      height="100"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      cover
    ></v-img>

    <v-card-header>
      <v-card-header-text>
        <v-card-title>説明用カードテンプレート</v-card-title>

        <v-card-subtitle>
          <span class="mr-1">説明用カード説明用カード</span>

          <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
        </v-card-subtitle>
      </v-card-header-text>
    </v-card-header>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :model-value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="text-grey ms-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

      <div>
        Small plates, salads & sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.
      </div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <div class="px-4">
      <v-chip-group v-model="selection">
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </div>

    <v-card-actions>
      <v-btn color="secondary" text @click="reserve">
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
