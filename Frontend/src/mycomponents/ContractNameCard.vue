<script setup lang="ts">
import { ref } from "vue";

const users = ref( {usertype: ''});


</script>

<template>
  <v-card elevation="2">
        <v-card-item class="py-4 px-6 text-white bg-primary">
          <h4 class="text-h6">名刺製作時の注意事項</h4>
        </v-card-item>
        <v-card-text class="pa-4 mb-4">
          <h3 class="title">様</h3>
          <p class="text-grey-darken-1 text-subtitle-1 mt-3 mb-4">
            以下、運営事務局で確認済の情報です。
          </p>
          <v-divider class="mb-4" />
          <v-row class="">
            <v-col cols="4">契約の有無</v-col>
            <v-col cols="8">

            </v-col>
              <v-divider />
            <v-col cols="4">支払情報</v-col>
            <v-col cols="8">

            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

</template>
