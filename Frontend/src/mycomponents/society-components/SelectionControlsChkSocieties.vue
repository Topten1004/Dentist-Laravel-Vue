<script>
  export default {
    data: () => ({
      e0:[],
      items: ['日本歯科医学会','日本歯科管理学会', '日本デジタル歯科学会', '日本補綴学会'],
      value: ['1','2','3','4'],
    }),
    data: () => ({
      e1:[],
      items: ['日本歯科技工学会','日本歯科技工士会', '日本デジタル歯科学会', '日本補綴学会'],
      value: ['1','2','3','4'],
    }),
    data: () => ({
      e2:[],
      items: ['e2日本歯科技工学会','e2日本歯科技工士会', 'e2日本デジタル歯科学会', 'e2日本補綴学会'],
      value: ['5','6','7','8'],
    }),
    data: () => ({
      e3:[],
      items: ['e3日本歯科技工学会','e3日本歯科技工士会', 'e3日本デジタル歯科学会', 'e3日本補綴学会'],
      value: ['9','10','11','12'],
    }),
    data: () => ({
      e4:[],
      items: ['aaaa学会','bbbb会', 'cccc会', 'dddd学会'],
      value: ['13','14','15','16'],
    }),
  }
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SelectionControlsChkSocieties -->
  <!-- 学会テーブル CheckBox　：  societies  -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      現在、所属している学会や団体を選択してください。（複数選択可）リストに無ければ問合せフォームからお知らせください。[:CS24:DB経由]
    </p>
    <div class="mt-4 mb-4">
      <v-row>
        <v-col cols="12">
        <v-select
            v-model="e0"
            value="value"
            :items="items"
            chips
            label="歯科医学会関連から選択"
            multiple
            outlined>
          </v-select>

          <v-select
            v-model="e1"
            value="value"
            :items="items"
            chips
            label="歯科全般から選択"
            multiple
            outlined
          ></v-select>

          <v-select
            v-model="e2"
            value="value"
            :items="items"
            chips
            label="歯科技工士関連から選択"
            multiple
            outlined
          ></v-select>

          <v-select
            v-model="e3"
            value="value"
            :items="items"
            chips
            label="歯科衛生士関連から選択"
            multiple
            outlined
          ></v-select>

          <v-select
            v-model="e4"
            value="value"
            :items="items"
            chips
            label="海外・その他"
            multiple
            outlined
          ></v-select>

        </v-col>
      </v-row>
    </div>
  </div>
</template>
