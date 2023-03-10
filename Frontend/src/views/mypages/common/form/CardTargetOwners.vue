<script setup lang="ts">
import { ref } from "vue";

const itemname = ref("");
const unit = ref("");
const target_year_number = ref("");
const target_jan_number = ref("");
const target_feb_number = ref("");
const target_mar_number = ref("");
const target_apr_number = ref("");
const target_may_number = ref("");
const target_jun_number = ref("");
const target_jul_number = ref("");
const target_aug_number = ref("");
const target_sep_number = ref("");
const target_oct_number = ref("");
const target_nov_number = ref("");
const target_dec_number = ref("");

const targets = ref([
  {
    target_year_number: "2022",
    target_jan_number: 159,
    target_feb_number: 11,
    target_mar_number: 11,
    target_apr_number: 11,
    target_may_number: 17,
    target_jun_number: 11,
    target_jul_number: 165,
    target_aug_number: 11,
    target_sep_number: 13,
    target_oct_number: 11,
    target_nov_number: 44,
    target_dec_number: 166,
  },
]);

</script>

<!-- 
  歯科医技工所・歯科医療機関の年間目標　月別一覧
 -->

<template>
  <div class="mx-4 mb-8">

      <h3 class="mb-2">
          <!-- {{ labo.name }} {{ clinic.name }}  -->＊＊の年間名刺発行数 目標値
      </h3>
      <h3 class="mb-2">
        項目名：
      </h3>

      <div class="text-caption hidden-md-and-up">※右へスクロールしてください</div>

      <v-divider class="my-4" />
  
    <div class="mt-4">
      <v-table fixed-header height="300px">
        <thead>
          <tr>
            <th class="text-center" nowrap>年</th>
            <th nowrap>1月</th>
            <th nowrap>2月</th>
            <th nowrap>3月</th>
            <th nowrap>4月</th>
            <th nowrap>5月</th>
            <th nowrap>6月</th>
            <th nowrap>7月</th>
            <th nowrap>8月</th>
            <th nowrap>9月</th>
            <th nowrap>10月</th>
            <th nowrap>11月</th>
            <th nowrap>12月</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in targets" :key="item.target_year_number">
            <td nowrap>{{ item.target_year_number }}</td>
            <td nowrap>{{ item.target_jan_number }}</td>
            <td nowrap>{{ item.target_feb_number }}</td>
            <td nowrap>{{ item.target_mar_number }}</td>
            <td nowrap>{{ item.target_apr_number }}</td>
            <td nowrap>{{ item.target_may_number }}</td>
            <td nowrap>{{ item.target_jun_number }}</td>
            <td nowrap>{{ item.target_jul_number }}</td>
            <td nowrap>{{ item.target_aug_number }}</td>
            <td nowrap>{{ item.target_sep_number }}</td>
            <td nowrap>{{ item.target_oct_number }}</td>
            <td nowrap>{{ item.target_nov_number }}</td>
            <td nowrap>{{ item.target_dec_number }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>
</template>
