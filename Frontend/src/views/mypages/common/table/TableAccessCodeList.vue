<script setup lang="ts">
import { ref } from "vue";
import PaginationRounded2 from "@/mycomponents/PaginationRounded2.vue";

const products = ref([
  {
    creassted_at: "2022/12/31",
    name: "AAA歯科クリニック",
    patient_ticket_number: "012344",
    product_number: 159,
    showpassword: 12344,
    link: "product_id:123",
  },
  {
    creassted_at: "2022/11/01",
    name: "BBB歯科クリニック",
    patient_ticket_number: "d012344",
    product_number: 15922,
    showpassword: 12344,
    link: "id123",
  },
  {
    creassted_at: "2022/10/01",
    name: "CCC歯科クリニック",
    patient_ticket_number: "未登録",
    product_number: 12259,
    showpassword: 12344,
    link: "id123",
  },
  {
    creassted_at: "2022/06/01",
    name: "DDD歯科クリニック",
    patient_ticket_number: "01332344",
    product_number: 55159,
    showpassword: 12344,
    link: "id123",
  },
  {
    creassted_at: "2022/03/01",
    name: "EEE歯科クリニック",
    patient_ticket_number: "cc012344",
    product_number: 33322159,
    showpassword: 12344,
    link: "id123",
  },
  {
    creassted_at: "2022/01/01",
    name: "FFF歯科クリニック",
    patient_ticket_number: "aa012344",
    product_number: 1059,
    showpassword: 12344,
    link: "id123",
  },
  {
    creassted_at: "2022/01/01",
    name: "FFF歯科クリニック",
    patient_ticket_number: "aa012344",
    product_number: 1059,
    showpassword: 12344,
    link: "id123",
  },
  {
    creassted_at: "2022/01/01",
    name: "FFF歯科クリニック",
    patient_ticket_number: "aa012344",
    product_number: 1059,
    showpassword: 12344,
    link: "id123",
  },
  {
    creassted_at: "2022/01/01",
    name: "FFF歯科クリニック",
    patient_ticket_number: "aa012344",
    product_number: 1059,
    showpassword: 12344,
    link: "id123",
  },
  {
    creassted_at: "2022/01/01",
    name: "FFF歯科クリニック",
    patient_ticket_number: "aa012344",
    product_number: 1059,
    showpassword: 12344,
    link: "id123",
  },
]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Snap Shot After Access Code List -->
  <!-- 注意：日付でソートを設定する。製品番号で詳細画面にリンク表示する。 CS24：Wrote-->
  <!-- ----------------------------------------------------------------------------- -->

    
    <div class="my-4">
      <div class="text-subtitle-2 hidden-sm-and-up">
        <strong class="red--text text--lighten-1">※右スクロールしてください。</strong>
      </div>
      <v-table fixed-header height="">
        <thead>
          <tr>
            <th class="text-left" nowrap>登録日</th>
            <th class="text-left" nowrap>取引先名</th>
            <th class="text-left" nowrap>診察券番号</th>
            <th class="text-left" nowrap>①製品番号</th>
            <th class="text-left" nowrap>②アクセスコード</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.product_number">
            <td nowrap>
              {{ item.creassted_at }}</td>
            <td nowrap>{{ item.name }}</td>
            <td nowrap>{{ item.patient_ticket_number }}</td>
            <td nowrap>
              <v-btn :href="item.link" target="_blank" variant="plain" color="blue darken-4">
              {{ item.product_number }}
              </v-btn>
            </td>
            <td nowrap>{{ item.showpassword }}</td>
          </tr>
        </tbody>
      </v-table>
      <!-- ページネーション　10件ごと -->
      <PaginationRounded2></PaginationRounded2>
    </div>

</template>
