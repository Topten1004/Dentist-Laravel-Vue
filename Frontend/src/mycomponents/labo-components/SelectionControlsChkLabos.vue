<script>
  export default {
    data: () => ({
      e1:[],
      items: ['取引先AA歯科医院','BBB歯科クリニック', 'CC歯科', 'DDD歯科医院'],
      value: ['1','2','3','4'],
    }),
  }
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SelectionControlsChkLabos -->
  <!-- 歯科技工所の納品先　歯科医療機関　選択 CheckBox　：  Labos  -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    
    <div class="mt-4">
      <v-row>
        <v-col cols="12">
        <v-select
            v-model="e1"
            value=""
            :items="items"
            chips
            label="登録済取引先から選択"
            variant="outlined"
          ></v-select>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
