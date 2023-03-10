<script setup lang="ts">
import { ref } from "vue";

const plans = ref([
  {
  	highlight: false,
        title: '専用カード（名刺型）',
        price: '500',
        lot: '100枚',
        link: '/',
        linklabel: '購入する',
        features: [{
          value: '1名',
          label: '限定仕様'
        }, {
          value: '勤務先情報',
          label: '標準掲載'
        }, {
          value: '所属学会情報',
          label: '標準掲載'
        }, {
          value: '制作無料',
          label: '・税＆送料別途必要'
        }]
      }, {
        highlight: true,
        title: '笑顔創造職人 Tシャツ',
        price: '2980',
        lot: '1枚',
        link: '/',
        linklabel: '準備中',
        features: [{
          value: 'オリジナル',
          label: '商標登録済み'
        }, {
          value: 'サイズ',
          label: ' S・M・L'
        }, {
          value: 'プレゼント',
          label: '報奨用として'
        },
         {
          value: 'カラー',
          label: '随時追加予定'
        }]
      }]
);
</script>


<template>
  <v-sheet>
    <v-container class="pt-4 pt-md-8 pb-10 mt-14">
      <v-responsive max-width="700" class="mx-auto text-center">
        <div class="text-h6 text-lg-h6 text-overline mb-8 mt-10">商標登録済専用カード</div>
        <h2 class="text-h4 text-lg-h3">トレサ＆笑顔コイン発行カード</h2>
        <div class="text-h6 text-lg-h5 mt-4">歯科技工装置トレーサビリティ専用<br>
          歯科医療機関・歯科衛生士発行専用<br>
          100枚単位で製作</div>
      </v-responsive>

      <v-row class="my-16" dense>
        <v-col cols="12" lg="2"></v-col>
        <v-col
          v-for="plan in plans"
          :key="plan.title"
          cols="12"
          md="6"
          lg="4"
        >
          <v-card
            class="text-body-1"
            outlined
            light
            elevation="2"
            :class="[plan.highlight && 'pricing-highlight']"
          >
            <v-sheet class="pa-4 text-center">
              <div class="text-h6 font-weight-bold text-uppercase mb-6">{{ plan.title }}</div>
              <div class="d-flex justify-center ml-n3">
                <div class="font-weight-regular text-h4 mr-1" style="margin-top: 10px">￥</div>
                <div class="text-h1 font-weight-black text-number">{{ plan.price }}</div>
              </div>
              <div class="grey--text justify-end overline">/ {{ plan.lot }}</div>
            </v-sheet>
            <v-divider></v-divider>
            <v-sheet class="pa-4" color="grey lighten-5">
              <div class="my-6 text-h6">
                <div v-for="(feat, j) in plan.features" :key="j" class="d-flex align-center my-1">
                  <v-icon color="success" class="mr-2">mdi-check</v-icon>
                  <span v-if="feat.value" class="font-weight-black mr-1">{{ feat.value }}</span>
                  <span class="font-weight-regular">{{ feat.label }}</span>
                </div>
              </div>
              <v-btn
                x-large
                block
                outlined
                :dark="plan.highlight"
                :class="[plan.highlight && 'primary']"
                :to="plan.link"
              >{{plan.linklabel}}</v-btn>
            </v-sheet>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
