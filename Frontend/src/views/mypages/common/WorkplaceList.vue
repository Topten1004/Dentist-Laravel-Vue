<script setup lang="ts">
import { ref } from "vue";

</script>

<template>
  <h2>就業先登録済 一覧</h2>
    <v-divider></v-divider>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">
              登録日
            </th>
            <th class="text-left">
              登録済就業先名
            </th>
            <th class="text-left">
              状況
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td nowrap>2001/12/31</td>
            <td nowrap>***歯科技工所</td>
            <td nowrap><v-icon color="success">mdi-check-circle</v-icon></td>
          </tr>
          <tr>
            <td>2021/08/31</td>
            <td>*BBB歯科技工所</td>
            <td><v-icon color="error">mdi-alert-octagram</v-icon></td>
          </tr>
        </tbody>
      </v-table>
      <v-divider></v-divider>
      <p class="text-10"><v-icon color="error">mdi-alert-octagram</v-icon>は、未承認状態です。就業先の管理者に承認してもらうよう伝えてください。</p>

</template>
