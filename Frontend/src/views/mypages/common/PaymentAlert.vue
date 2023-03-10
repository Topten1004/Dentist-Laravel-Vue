<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";

const payments = ref ({ paid: "0"});  //未入金：0　入金済：1　保留中：2 

</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Payment Alert 　未入金：0　入金済：1　保留中：2 　-->
  <!-- ----------------------------------------------------------------------------- -->
<div class="mb-4">
  <!-- 未入金の場合  -->
  <v-card
    v-if="payments.paid === '0'"
    elevation="2">
    <v-alert type="error">支払い未確認</v-alert>
    <v-card-text class="pa-5">
      未入金か支払状況の確認中です。
      <div>
        <v-btn 
          to=""
          variant="outlined"
          color="error"
          elevation="2">
          <v-icon>mdi-cart</v-icon>
          未入金の方はこちら
        </v-btn>
      </div>
    </v-card-text>
  </v-card>

  <!-- 入金済の場合  -->
  <v-card
    v-if="payments.paid === '1'"
    elevation="2">
    <v-alert type="success">ご契約中</v-alert>
    <v-card-text class="pa-5">
      ご利用開始日：2023/3/31 〜<br>
      1年単位での更新となります。
    </v-card-text>
  </v-card>

  <!-- 保留中の場合  -->
  <v-card
    v-if="payments.paid === '2'"
    elevation="2">
    <v-alert type="warning">保留中</v-alert>
    <v-card-text class="pa-5">
      ご契約に関して確認中又は保留中です。
    </v-card-text>
  </v-card>
</div>
</template>