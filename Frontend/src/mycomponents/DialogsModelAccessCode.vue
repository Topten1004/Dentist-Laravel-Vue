<script setup lang="ts">
import { ref } from "vue";

const dialog = ref(false);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Dialog Model Access Code -->
  <!-- スナップショット登録後に名刺記載用のアクセスコードを発行。 -->
  <!-- ----------------------------------------------------------------------------- -->

  <div class="text-center mt-6">


    <v-dialog v-model="dialog">
      <v-card>
        <v-card-text>
          名刺裏面にアクセス情報（ ①製造番号　②アクセスコード 診察券番号 ）を記載し、患者様にお渡しください。
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false"
            >Close Dialog</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
