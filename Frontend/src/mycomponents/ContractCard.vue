<script setup lang="ts">
import { ref } from "vue";

const users = ref( {usertype: 'labo'});

const contracts  = ref([
{
  labo_id: "歯科技工所ID",
  labos_number: "歯科技工所会員番号",
  labo_name: "****歯科技工所",
  consent: "承諾***",
  contracted: "",
  payment_id: "1234",
  paid: "1",
  print_account: "aaaaa",
  print_password: "passwordaaa",
  created_at: "作成日時",
  updated_at: "更新日時",
  },
]);
</script>

<template>
  <v-card elevation="2" v-for="item in contracts" :key="item.labo_id">
        <v-card-item class="py-4 px-6 text-white bg-error">
          <h4 class="text-h6">ご契約状況</h4>
        </v-card-item>
        <v-card-text class="pa-4 mb-4">
          <h3 class="title">{{ item.labo_name }}様</h3>
          <p class="text-grey-darken-1 text-subtitle-1 mt-3 mb-4">
            以下、運営事務局で確認済の情報です。
          </p>
          <v-divider class="mb-4" />
          <v-row class="">
            <v-col cols="4">契約の有無</v-col>
            <v-col cols="8">
              <!-- {{ item.contracted }} (有:1 無:0) -->
              <div v-if="item.contracted === '1'">
                  <v-btn
                   variant="outlined"
                   color="success" >
                   ご契約中
                  </v-btn>
              </div>
              <div v-else>
                  <v-btn
                   variant="outlined"
                   color="error" >
                   未契約又は作業中
                  </v-btn>
              </div>
            </v-col>
              <v-divider />
            <v-col cols="4">支払情報</v-col>
            <v-col cols="8">
              
              <!-- {{ item.paid }} -->
              <div v-if="item.paid === '1'">
                  <v-btn
                   variant="outlined"
                   color="success" >
                   ご入金済です。
                  </v-btn>
              </div>
              <div v-if="item.paid === '0'">
                  <v-btn
                   variant="outlined"
                   color="error" >
                   未だお支払いの確認が取れていません。
                  </v-btn>
              </div>
              <div v-if="item.paid === '2'">
                  <v-btn
                   variant="outlined"
                   color="warning" >
                   現在保留中です。
                  </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

</template>
