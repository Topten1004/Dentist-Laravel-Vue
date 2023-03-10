<script setup lang="ts">
import { ref } from "vue";

const coproducter = ref([
  {
    profile_photo_path: "1.jpg",
    name: "田中　アンダーソン",
    official_position: "クラウンブリッジ担当",
    egaocoin: "10",
    engineer_id: "$3.9K",
  },
  {
    profile_photo_path: "2.jpg",
    name: "Andrew",
    official_position: "部長",
    egaocoin: "110",
    engineer_id: "$23.9K",
  },
  {
    profile_photo_path: "3.jpg",
    name: "Bhavesh patel",
    official_position: "デンチャー担当",
    egaocoin: "130",
    engineer_id: "$12.9K",
  },
  {
    profile_photo_path: "4.jpg",
    name: "Nirav Joshi",
    official_position: "CAD担当",
    egaocoin: "10",
    engineer_id: "$10.9K",
  },
]);
</script>

<template>
  <v-card elevation="2">
    <v-img
      src="https://smile24.org/src/assets/images/bg/titlebg8.jpg"
      hight="100px"
      cover
      class=" text-white"
    >
      <v-toolbar-title dark class="font-weight-medium v-toolbar_overflow ma-4">
        共同製作 : 担当者リスト
      </v-toolbar-title>
    </v-img>
    <v-card-text class="pa-5">
      <h4 class="subtitle">貴方の技工装置は、下記 技工士さん達が共同で製作しています。</h4>
      <v-table class="month-table mt-7 mb-5">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="font-weight-bold" nowrap>担当者名</th>
              <th class="font-weight-bold" nowrap>役職・部門</th>
              <th class="font-weight-bold" nowrap>笑顔コイン獲得数</th>
              <th class="font-weight-bold" nowrap>詳細</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in coproducter"
              :key="item.name"
              class=""
            >
              <td>
                <div class="d-flex align-center py-2">
                  <v-avatar size="40">
                    <img
                      :src="`/assets/images/users/${item.profile_photo_path}`"
                      alt="担当技工士"
                      width="45"
                    />
                  </v-avatar>
                  <div class="mx-4">
                    <h4 class="">
                      {{ item.name }}
                    </h4>
                  </div>
                </div>
              </td>
              <td>
                <h5>
                  {{ item.official_position }}
                </h5>
              </td>
              <td>
                {{ item.egaocoin }} 枚
              </td>
              <td>
                <v-btn rounded color="success" to="/artisan/{{ item.engineer_id }}">
                  詳細
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-table>
    </v-card-text>
  </v-card>
</template>
