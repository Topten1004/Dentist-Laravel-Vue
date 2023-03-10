<script setup lang="ts">
import { ref } from "vue";

// background_photo_path として登録する
const radios = ref("");
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SelectionControlsRadioBgImage-->
  <!-- ユーザーインフォメーションの背景画像を選択する-->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      マイページの背画像を選んでください。
    </p>
    <div class="mt-4">
      <p>{{ radios || "null" }}</p>
      <!-- 縮小版画像を表示する -->
      <v-img src="https://smile24.org/src/assets/images/background/bgimage1.jpg" width="200"></v-img>
      <!-- <v-img src="'https://smile24.org/src/assets/images/background/'.{{ radios }}" width="200"></v-img> -->
      
      <v-radio-group :inline="true" v-model="radios" :mandatory="false">
        <v-radio label="背景 1" value="bgimage1.jpg"></v-radio>
        <v-radio label="背景 2" value="bgimage2.jpg"></v-radio>
        <v-radio label="背景 3" value="bgimage3.jpg"></v-radio>
        <v-radio label="背景 4" value="bgimage4.jpg"></v-radio>
      </v-radio-group>
    </div>
  </div>
</template>
