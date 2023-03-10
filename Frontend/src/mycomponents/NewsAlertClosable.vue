<script setup lang="ts">
import { ref } from "vue";
import CarouselCycleArtisan from "@/mycomponents/artisan-components/CarouselCycleArtisan.vue";

const alert = ref(true);
</script>

<template>
<v-card>

<CarouselCycleArtisan />

    <!-- <v-img
      class="align-end text-white text-24"
      height="380"
      src="https://smile24.org/src/assets/images/top/top8.jpg"
      cover
      loading
    > 
      <v-card-title>運営事務局からのお知らせ.</v-card-title>
    </v-img>-->

    <v-card-subtitle class="pt-4"> Number 10 </v-card-subtitle>

    <v-card-text>
      <div>歯科技工士として当システムをご利用いただいている方々へのお知らせを掲載します。</div>
      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <!-- <v-card-actions>
      <v-btn color="orange"> Share </v-btn>
      <v-btn color="orange"> Explore </v-btn>
    </v-card-actions> -->

  <!-- ----------------------------------------------------------------------------- -->
  <!-- Closable -->
  <!-- ----------------------------------------------------------------------------- -->

    <div class="ma-4">
      <v-alert
        v-model="alert"
        border="start"
        variant="tonal"
        closable
        close-label="閉じる"
        color="deep-purple accent-4"
        title="お知らせ"
      >
        ここに事務局からのお知らせを掲載します。。。。（NewsAlertClosable.vue）
      </v-alert>

      <div v-if="!alert" class="text-center">
        <v-btn @click="alert = true" variant="outlined"> 再表示する。 </v-btn>
      </div>
    </div>
</v-card>
 
</template>
