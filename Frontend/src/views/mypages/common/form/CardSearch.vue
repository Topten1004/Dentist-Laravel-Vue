<script setup lang="ts">
import { ref } from "vue";
const checkbox = ref("");
const workplace = ref(["歯科医療機関", "歯科技工所"]);

// 専門分野はDBから引用
const specialty = ref(["保険診療", "自由診療", "一般歯科", "矯正歯科", "小児歯科", "口腔外科"]);
const value = ref(["保険診療", "自由診療", "一般歯科", "矯正歯科", "小児歯科", "口腔外科"]);

</script>


<template>
  <v-card>
  <div class="mx-4">
    <v-alert
      icon="mdi-alert-outline"
      outlined
      variant="tonal"
      type="info"
      class="my-2 mb-3 caption pa-3"
      >ここにアラート情報を記載します。</v-alert
    >
    <h6 class="text-subtitle-1 text-grey-darken-1">
      歯科医療機関(歯科医院・歯科技工所)の検索はこちらから。
    </h6>
    <v-form>
    <v-row class="mt-3">
      <v-col cols="12">
                
        <v-select
          :items="workplace"
          label="検索対象"
          class="mt-0 pt-0"
          variant="outlined"
        ></v-select>

        <v-select
          v-model="value"
          :items="specialty"
          multiple
          attach
          label="専門分野"
          class="mt-0 pt-0"
          variant="outlined"
        ></v-select>

        <v-text-field 
        label="自由項目" 
        variant="outlined"
        required
        ></v-text-field>

        <v-checkbox
          v-model="checkbox"
          hide-details
          label="求人情報あり"
          color="success"
          class="mt-0">
        </v-checkbox>

      </v-col>
    </v-row>

    <div class="pa-5 border-top text-center">
      <v-btn color="primary" class="mr-2 text-capitalize">検索する</v-btn>
    </div>
  </v-form>
  </div>
</v-card>
</template>




