<script setup lang="ts">
import { ref, reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageTop from "@/mycomponents/BaseTitleImageTop.vue";

const page = ref({ title: "技工装置 詳細sp" });
const display = useDisplay();
const contents = reactive(
  {
    subtitle: "Check Your Products !",
    url: "/",
    btnname: "笑顔コイン",
  },
);

</script>


<template>
<!--                    -->
<!-- PC用               -->
<!--                    -->
  <v-row v-if="display.mdAndUp.value">
    <v-col cols="12" lg="3" md="6" class="py-0 mb-2">
      <v-card elevation="2">
        <v-card-text class="pa-5">
          <div class="d-flex align-center">
            <v-btn class="elevation-0 bg-primary" icon dark>
            <v-icon>mdi-anchor</v-icon>
            </v-btn>
            <div class="ml-2 mr-1">
              <h4 class="font-weight-regular mb-2">
                <!-- {{ "created_at" }} -->登録日：2022/12/31
              </h4>
              <h4 class="title">
                <!-- {{ "clinic_name" }} -->AAA歯科クリニック
              </h4>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" lg="3" md="6" class="py-0 mb-2">
      <v-card elevation="2">
        <v-card-text class="pa-5">
          <div class="d-flex align-center">
            <v-btn class="elevation-0 bg-warning" icon dark>
            <v-icon>mdi-credit-card-multiple</v-icon>
            </v-btn>
            <div class="ml-2 mr-1">
              <h4 class="font-weight-regular mb-2">
                診察券番号
              </h4>
              <h3 class="title">
                <!-- {{ "patient_ticket_number" }} --> 12345
              </h3>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" lg="3" md="6" class="py-0 mb-2">
      <v-card elevation="2">
        <v-card-text class="pa-5">
          <div class="d-flex align-center">
            <v-btn class="elevation-0 bg-error" icon dark>
            <v-icon>mdi-heart</v-icon>
            </v-btn>
            <div class="ml-2 mr-1">
              <h5 class="font-weight-regular mb-2">
                患者さんからの笑顔コイン
              </h5>
              <h3 class="title">
                <!-- {{ "count.engineer_egaocoins" }} --> **/10 枚
              </h3>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" lg="3" md="6" class="py-0 mb-2">
      <v-card elevation="2">
        <v-card-text class="pa-5">
          <div class="d-flex align-center">
            <v-btn class="elevation-0 bg-success" icon dark>
            <v-icon>mdi-gift</v-icon>
            </v-btn>
            <div class="ml-2 mr-1">
              <h5 class="font-weight-regular mb-2">
                医療機関からの笑顔コイン
              </h5>
              <h3 class="title">
                <!-- {{ "count.clinic_egaocoins" }} --> **/10 枚
              </h3>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- <v-col cols="12" lg="12" md="12" class="py-0 mb-2">
      <v-card elevation="2">
        <v-card-text class="pa-5">
          <div class="d-flex fill-height flex-column justify-center align-center">
            <div>
              <v-btn color="error">+コインを追加</v-btn>
            </div>
          </div>
        </v-card-text>
      </v-card> 
    </v-col> -->
  </v-row>


<!--     　　　　　　　 -->
<!-- スマホ用           -->
<!--    タイトル部分が入れ子になっているのは注意 　切り出した方が良いかも　　 -->
<div v-if="display.smAndDown.value">
  <v-row>
    <v-col cols="12" md="6" sm="12">
      <v-card class="mb-2" elevation="2" >
        <v-card-text class="pa-2">
          <div class="d-flex align-center">
            <div class="mx-auto">
              <h4 class="font-weight-regular mb-2">
                <!-- {{ "revenuecard1.upday" }} -->登録日：2022/12/31
              </h4>
              <h3 class="title">
                <!-- {{ "revenuecard1.clinic_name" }} -->AAAaaaaa歯科クリニック
              </h3>
            </div>
            <v-divider vertical class=""></v-divider>
              <div class="mx-auto">
                <h4 class="font-weight-regular mb-2">診察券番号</h4>
                <h3><!-- {{ "patient_tiket_number" }}-->123456789</h3> 
              </div>
          </div>
        <v-divider></v-divider>
          <div class="d-flex align-center mt-1">
              <h4 class="mx-auto">笑顔コイン</h4>
              <v-divider vertical class="ml-2 mr-4"></v-divider>
                <div class="d-flex align-center">
                  <h4>患者</h4>
                  <v-btn class="text-none mr-2" icon color="">
                    <v-badge content="9" color="success">
                      <v-icon color="red" size="large">mdi-heart</v-icon>
                    </v-badge>
                  </v-btn>
                </div>
                <v-divider vertical class="ml-2 mr-4"></v-divider>
                <div class="d-flex align-center">
                  <h4 class="mx-auto">医療機関</h4>
                    <v-btn class="text-none mr-2" icon color="">
                      <v-badge content="10" color="success">
                        <v-icon color="red" size="large">mdi-gift</v-icon>
                      </v-badge>
                    </v-btn>
                </div>
            </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</div>
</template>
