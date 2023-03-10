<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const products = ref([
  {
    avatar: "1.jpg",
    name: "ここに名前：田中和夫",
    role: "役職名：：",
    egaocoin: "546,000",
    percent: 85,
  },
  {
    avatar: "2.jpg",
    name: "山田太郎",
    role: "主任",
    egaocoin: "780,000",
    percent: 50,
  },
  {
    avatar: "3.jpg",
    name: "ここに名前CCC",
    role: "役職名：：",
    egaocoin: "457,000",
    percent: 30,
  },
  {
    avatar: "4.jpg",
    name: "ここに名前DDDD",
    role: "役職名：：",
    egaocoin: "125,000",
    percent: 10,
  },
]);
</script>

<!-- 医療技術者のパフォーマンスリスト -->
<template>
  <v-card elevation="2">
    <v-card-item class="py-4 px-6 text-white bg-error">
      <h4 class="text-h6">スタッフの月間目標達成率一覧</h4>
    </v-card-item>
    <v-card-text>
      <v-table class="month-table custom-px-0 mt-4">
        <template v-slot:default>
          <tbody>
            <tr class="month-item" v-for="item in products" :key="item.name">
              <td nowrap>
                <div class="d-flex align-center">
                  <!-- 各スタッフの統計データへリンクする。 -->
                  <RouterLink to="/mypages/artisan/satistics" class="d-flex">
                  <v-avatar class="rounded-lg overflow-hidden" size="70">
                    <img
                      :src="`/assets/images/products/${item.avatar}`"
                      :alt="item.avatar"
                      width="90"
                      height="70"
                      class="rounded-lg"
                    />
                  </v-avatar>                    
                  </RouterLink>
                  <div class="ml-3">
                    <h6 class="font-weight-medium text-subtitle-1">
                      {{ item.name }}
                    </h6>
                    <span
                      class="font-weight-regular text-body-2 text-grey-darken-1"
                    >
                      {{ item.role }}
                    </span>
                  </div>
                </div>
              </td>
              <td nowrap>
                <div v-if="item.percent >= 80">
                  <h6 class="font-weight-medium text-body-2 mb-1">素晴らしい!</h6>
                  <v-progress-linear
                    color="secondary"
                    background-color="grey lighten-3"
                    :model-value="item.percent"
                    rounded
                    class="mb-1"
                  ></v-progress-linear>
                  <span
                    class="font-weight-regular text-body-2 text-grey-darken-1 text-no-wrap"
                  >
                    {{ item.percent }}% 達成済
                  </span>
                </div>
                <div v-else-if="item.percent < 80 && item.percent >= 50">
                  <h6 class="font-weight-medium text-body-2 mb-1">いい調子です!</h6>
                  <v-progress-linear
                    color="success"
                    background-color="primary lighten-3"
                    :model-value="item.percent"
                    rounded
                    class="mb-1"
                  ></v-progress-linear>
                  <span
                    class="font-weight-regular text-body-2 text-grey-darken-1"
                  >
                    {{ item.percent }}% 達成済
                  </span>
                </div>
                <div v-else-if="item.percent < 50 && item.percent >= 30">
                  <h6 class="font-weight-medium text-body-2 mb-1">あと少しです!</h6>
                  <v-progress-linear
                    color="orange"
                    background-color="primary lighten-3"
                    :model-value="item.percent"
                    rounded
                    class="mb-1"
                  ></v-progress-linear>
                  <span
                    class="font-weight-regular text-body-2 text-grey-darken-1"
                  >
                    {{ item.percent }}% 達成済
                  </span>
                </div>
                <div v-else>
                  <h6 class="font-weight-medium text-body-2 mb-1">頑張ろう!</h6>
                  <v-progress-linear
                    color="error"
                    background-color="primary lighten-3"
                    :model-value="item.percent"
                    rounded
                    class="mb-1"
                  ></v-progress-linear>
                  <span
                    class="font-weight-regular text-body-2 text-grey-darken-1"
                  >
                    {{ item.percent }}% 達成済
                  </span>
                </div>
              </td>
              <td nowrap>
                <span class="font-weight-regular text-body-2 text-grey-darken-1"
                  >獲得済笑顔コイン</span
                >
                <h6 class="font-weight-medium text-body-1 mb-1">
                  {{ item.egaocoin }}枚
                </h6>
              </td>
              <td class="text-center">
                <!-- 下記ボタンは、各スタッフの統計データへリンクさせる -->
                <v-btn to="/mypages/artisan/profile" icon color="primary">
                  <vue-feather type="user-check" size="20"></vue-feather>
                </v-btn>
                <div class="text-10">詳細</div>
              </td>
              <td class="text-center">
                <!-- 下記ボタンは、各スタッフの統計データへリンクさせる -->
                <v-btn to="/mypages/artisan/satistics" icon color="secondary">
                  <vue-feather type="trending-up" size="20"></vue-feather>
                </v-btn>
                <div class="text-10">統計</div>
              </td>
            </tr>
          </tbody>
        </template>
      </v-table>
      <v-divider class="mb-8" />
      <v-pagination />
    </v-card-text>
  </v-card>
</template>
