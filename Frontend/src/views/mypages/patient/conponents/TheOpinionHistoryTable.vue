<script setup lang="ts">
import { ref } from "vue";
import PaginationRounded2 from "@/mycomponents/PaginationRounded2.vue";

const opiniontable = ref([
  {
    img: "1.jpg",
    activestate: "",
    clinicname: "ABC歯科医院",
    engineername: "技工士太郎",
    opinionaire_id: "#12345",
    opinionaire_created_at: "2022/11/11",
    egaocoin: "9",
    qs1: "増えた。",
    qs2: "美味しく食べられる様になった。",
    qs3: "変わらない。",
    qs4: "変わらない。",
    qs5: "かなり良くなった。",
    url: "/mypages/patient/caredetail"
  },
  {
    img: "2.jpg",
    activestate: "",
    clinicname: "OOO歯科医院",
    engineername: "歯科医師花子",
    opinionaire_id: "#12345",
    opinionaire_created_at: "2020/11/11",
    egaocoin: "7",
    qs1: "減った。",
    qs2: "美味しく食べられる様になった。",
    qs3: "変わらない。",
    qs4: "増えた。",
    qs5: "良くなった。",
    url: "/mypages/patient/caredetail/id1"
  },
  {
    img: "3.jpg",
    activestate: "",
    clinicname: "VVVV歯科医院",
    engineername: "技工士二郎",
    opinionaire_id: "#12345",
    opinionaire_created_at: "2019/11/11",
    egaocoin: "4",
    qs1: "増えた。",
    qs2: "美味しく食べられる様になった。",
    qs3: "変わらない。",
    qs4: "変わらない。",
    qs5: "かなり良くなった。",
    url: "/mypages/patient/prodctdetail/id2"
  },
]);
</script>

<!-- 注意事項 -->
<!-- 歯科衛生士による治療履歴と技工士による技工装置履歴の２種類をまとめて表示する。  -->
<!-- 詳細のリンクボタンのリンク先に注意 -->
<template>
  <v-card>
    <v-card-text class="pa-5">
      <div class="">
        <!--　h5に患者氏名を記載　→　{{ patients.name }}さん -->
        <h5 class="subtitle">患者氏名を記載</h5>
        <h2 class="title text-h6 font-weight-medium">美しい歯で美味しく食べて健康に！ この記録は、担当者と情報共有しています。</h2>
      </div>
      <v-alert
        icon="mdi-alert-outline"
        outlined
        variant="tonal"
        type="error"
        class="mb-4 caption pa-3">
        現在、登録されたアンケート情報はございません。<br>
        治療後に担当者名刺を受取った患者さんは、名刺に記載しているアクセス情報を入力して治療後の経過等をご登録ください。<br>
        ご登録いただいた情報は、担当した医療従事者各位に届きます。
      </v-alert>
      <v-table class="month-table mt-7 mb-5">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="font-weight-bold" nowrap>医療機関／担当者</th>
              <th class="font-weight-bold" nowrap>ID／回答日</th>
              <th class="font-weight-bold" nowrap>笑顔コイン</th>
              <th class="font-weight-bold" nowrap>1.笑顔の増減</th>
              <th class="font-weight-bold" nowrap>2.食事状況</th>
              <th class="font-weight-bold" nowrap>3.嚥下状況</th>
              <th class="font-weight-bold" nowrap>4.発音発声</th>
              <th class="font-weight-bold" nowrap>5.認知症</th>
              <th class="font-weight-bold" nowrap>6.詳細</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in opiniontable"
              :key="item.clinicname"
              :class="item.activestate"
              class="month-item"
            >
              <td nowrap>
                <div class="d-flex align-center">
                  <v-avatar size="40">
                    <img
                      :src="`/assets/images/users/${item.img}`"
                      alt="user"
                      width="45"
                    />
                  </v-avatar>
                  <div class="mx-4">
                    <h4 class="">
                      {{ item.clinicname }}
                    </h4>
                    <h6 class="">
                      {{ item.engineername }}
                    </h6>
                  </div>
                </div>
              </td>
              <td nowrap>
                <h5>
                  {{ item.opinionaire_id }}
                </h5>
                <h5>
                  {{ item.opinionaire_created_at }}
                </h5>
              </td>
              <td nowrap>
                <h4 class="">{{ item.egaocoin }}枚</h4>
              </td>
              <td nowrap>
                <h4 class="">1.{{ item.qs1 }}</h4>
              </td>
              <td nowrap>
                <h4 class="">2.{{ item.qs2 }}</h4>
              </td>
              <td nowrap>
                <h4 class="">3.{{ item.qs3 }}</h4>
              </td>
              <td nowrap>
                <h4 class="">4.{{ item.qs4 }}</h4>
              </td>
              <td nowrap>
                <h4 class="">5.{{ item.qs5 }}</h4>
              </td>
              <td nowrap>
                <v-btn
                  v-bind:href="item.url"
                  rounded color="success"
                  dark
                  class="mt-3"
                  >
                  詳細
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-table>
      <PaginationRounded2 />
    </v-card-text>
  </v-card>
</template>


