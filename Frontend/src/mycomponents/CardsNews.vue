<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- News 運営事務局からのお知らせ -->
  <!-- ----------------------------------------------------------------------------- -->

  <v-card color="#ffffff" theme="dark" class="mb-1">
      <v-alert class="mt-2 mb-2" color="red darken-4" variant="outlined">
        <template v-slot:title>運営事務局からのお知らせ</template>
        "ここに運営事務局からのお知らせを記載します。ここに運営事務局からのお知らせを記載します。"
      <br>（CardNews.vue）
      </v-alert>
  </v-card>

  <v-card color="#26c6da" theme="dark">
    <v-card-title>
      <v-icon size="large" left icon="mdi-alert-octagon"></v-icon>
      <span class="text-h6 font-weight-light">運営事務局からのお知らせ</span>
    </v-card-title>

    <v-card-text class="text-subtitle-1">
      "ここに運営事務局からのお知らせを記載します。ここに運営事務局からのお知らせを記載します。"
      <br>（CardNews.vue）
    </v-card-text>

    <v-card-actions>
      <v-list-item class="w-100">
        <v-list-item-avatar left>
          <v-avatar
            color="grey-darken-3"
            image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-avatar>
        </v-list-item-avatar>

        <v-list-item-header>
          <v-list-item-title>CS24</v-list-item-title>
        </v-list-item-header>

        <div class="d-flex justify-end">
          <v-icon class="mr-1" icon="mdi-heart"></v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1" icon="mdi-share-variant"></v-icon>
          <span class="subheading">45</span>
        </div>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>
