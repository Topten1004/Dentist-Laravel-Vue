<script>
  export default {
    data: () => ({
      e1:[],
      items: ['保健', '自費', 'デンチャー', 'クラウンブリッジ'],
      value: ['1','2','3','4'],
    }),
  }
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SelectionControlsChkSpecialties -->
  <!-- 専門分野テーブル CheckBox　：  specialties  -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      貴方の専門及び対応可能分野を<u>複数選択</u>してください。[:CS24:DB経由]
    </p>
    <div class="mt-4 mb-4">
      <v-row>
        <v-col cols="12">
        <v-select
            v-model="e1"
            value=""
            :items="items"
            chips
            label="専門及び対応可能分野"
            multiple
            variant="outlined"
          ></v-select>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
