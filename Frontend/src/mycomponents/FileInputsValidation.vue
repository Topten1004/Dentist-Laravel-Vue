<script setup lang="ts">
import { ref } from "vue";

const rules = ref([
  (value: { size: number }) =>
    !value || value.size < 2000000 || "2MB以内で登録してください。",
]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- FileInputs Validation -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    
    <div class="mt-2 pt-4">
      <!--  name="image1" 等のname属性は不要？ -->
      <!-- Intervention Image でアスペクト比そのままで横720・縦405pxで保存する。 -->
      <v-file-input
        :rules="rules"
        accept="image/png, image/jpeg, image/jpg, image/bmp"
        placeholder="画像を選択または撮影してください。"
        prepend-icon="mdi-camera"
        label="画像撮影アップロード"
        variant="outlined"
        class="mr-10 ml-5"
        type="file"
        capture
      ></v-file-input>
    </div>
  </div>
</template>

