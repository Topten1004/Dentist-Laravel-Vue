<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SelectionControlsChkSpecialties -->
  <!-- 専門分野テーブル CheckBox　：  specialties  -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      貴方の専門分野を選択してください。[:CS24:DB経由]
    </p>
    <div class="mt-4 mb-4">
      <v-row>
        <v-col cols="12">
          <v-checkbox
            v-for="item in specialtiesbtn"
            :label="item.name"
            :value="item.specialty_id"
            color="orange"
            float="right"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const specialtiesbtn = ref([
  {
    specialty_id: "1",
    name: "有床義歯",
  },
  {
    specialty_id: "2",
    name: "クラウンブリッジ",
  },
  {
    specialty_id: "3",
    name: "金属床義歯",
  },
  {
    specialty_id: "4",
    name: "部分床義歯",
  },
  {
    specialty_id: "5",
    name: "熱可塑性樹脂床義歯",
  },
  {
    specialty_id: "6",
    name: "金属床",
  },
  {
    specialty_id: "7",
    name: "インプラント",
  },
  {
    specialty_id: "8",
    name: "メタルセラミックス",
  },
  {
    specialty_id: "9",
    name: "フルセラミックス",
  },
  {
    specialty_id: "10",
    name: "CAD/CAM",
  },
  {
    specialty_id: "11",
    name: "矯正歯科",
  },
  {
    specialty_id: "12",
    name: "矯正歯科",
  },
  {
    specialty_id: "11",
    name: "顎顔面補綴",
  },
  {
    specialty_id: "11",
    name: "顎顔面補綴",
  },
]);

</script>
