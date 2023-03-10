<script setup lang="ts">
import { ref } from "vue";

const plans = ref([
  {
        title: 'Basic',
        price: '1980',
        comment:'名刺発行登録者数2名までの小規模歯科技工所及び一般歯科医院・診療所向け',
        featured: true,
        features: [{
          value: '2名迄',
          label: '従業員登録・利用可能'
        }, {
          value: '名刺デザイン作成',
          label: '初回無料'
        }, {
          value: '笑顔コイン',
          label: '発行無料'
        }, {
          value: '治療登録数',
          label: '制限なし'
        },{
          value: 'DBIZ SNS',
          label: 'ビジネス利用可'
        }]
      }, {
        title: 'Standerd',
        price: '4980',
        comment:'名刺発行登録者数5名までの小規模歯科技工所及び一般歯科医院・診療所向け',
        featured: true,
        features: [{
          value: '最大５名迄',
          label: '利用可能'
        }, {
          value: '名刺デザイン作成',
          label: '初回無料'
        }, {
          value: '笑顔コイン',
          label: '発行無料'
        }, {
          value: '治療登録数',
          label: '制限なし'
        },{
          value: 'DBIZ SNS',
          label: 'ビジネス利用可'
        }]
      },{
        title: 'Medium20',
        price: '8980',
        comment:'名刺発行登録者数20名までの中規模歯科技工所及び一般歯科医院・診療所向け',
        features: [{
          value: '最大20名迄',
          label: '利用可能'
        }, {
          value: '名刺デザイン作成',
          label: '初回無料'
        }, {
          value: '笑顔コイン',
          label: '発行無料'
        }, {
          value: '治療登録数',
          label: '制限なし'
        },{
          value: 'DBIZ SNS',
          label: 'ビジネス利用可'
        }]
      },{
        title: 'Medium30',
        price: '12980',
        comment:'名刺発行登録者数30名までの中規模歯科技工所及び歯科医療機関向け',
        features: [{
          value: '最大30名迄',
          label: '利用可能'
        }, {
          value: '名刺デザイン作成',
          label: '初回無料'
        }, {
          value: '笑顔コイン',
          label: '発行無料'
        }, {
          value: '治療登録数',
          label: '制限なし'
        },{
          value: 'DBIZ SNS',
          label: 'ビジネス利用可'
        }]
      },{
        title: 'Medium50',
        price: '29800',
        comment:'名刺発行登録者数50名までの大規模歯科技工所及び歯科医療機関向け',
        features: [{
          value: '最大50名迄',
          label: '利用可能'
        }, {
          value: '名刺デザイン作成',
          label: '初回無料'
        }, {
          value: '笑顔コイン',
          label: '発行無料'
        }, {
          value: '治療登録数',
          label: '制限なし'
        },{
          value: 'DBIZ SNS',
          label: 'ビジネス利用可'
        }]
      }, {
        title: 'Enterprise',
        price: '**',
        comment:'大規模な技工所及び医療機関の方は、オンプレミスやクラウド対応等別途ご相談ください。',
        features: [{
          value: '50名以上',
          label: '利用可能'
        }, {
          value: '各種カスタマイズ',
          label: '対応可能'
        }, {
          value: '独自の笑顔コイン',
          label: '発行可能'
        }, {
          value: '個別システム',
          label: '運用可能'
        },{
          value: 'DBIZ SNS',
          label: 'ビジネス利用可'
        }]
      }]
      );
</script>


<template>
  <v-container id="pricing" class="pt-10 pt-md-12 pb-14 my-16">
    <v-responsive max-width="1200" class="mx-auto text-center">
      <h2 class="text-h3 mb-2">ご利用価格</h2>
      <div class="text-h6 text-lg-h5">
        患者様は無料でご利用いただけます。<br>
        歯科医療機関は、規模に応じて価格設定が異なります。<br>
      </div>
      <v-btn variant="outlined" color="error" size="x-large" class="mt-4">
        <h2>キャンペーン実施中</h2>
      </v-btn>
    </v-responsive>

    <v-row class="mt-10">
      <v-col
        v-for="(plan, i) in plans"
        :key="i"
        cols="12"
        lg="4"
      >
        <v-card
          class="text-body-1 pa-4"
          outlined
          elevation="2"
        >
          <div class="d-flex justify-space-between">
            <div class="mr-2">
              <div class="d-flex align-center">
                <div class="text-h4 font-weight-black">{{ plan.title }}</div>
                <div v-if="plan.featured" class="ml-2">
                  <v-chip x-small color="red" class="font-weight-black">推奨</v-chip>
                </div>
              </div>
              <div class="mt-1">{{ plan.comment }}</div>
            </div>
            <div class="text-right">
              <div class="d-flex align-center">
                <div class="text-h6 font-weight-light mr-1">￥</div>
                <div class="text-h5 text-number font-weight-black">{{ plan.price }}</div>
              </div>
              <div class="justify-end overline">/月</div>
            </div>
          </div>

          <v-divider class="my-4"></v-divider>

          <div class="text-h6">
            <div v-for="(feat, j) in plan.features" :key="j" class="d-flex align-center justify-space-between my-1">
              <div>
                <span v-if="feat.value" class="font-weight-black mr-1">{{ feat.value }}</span>
                <span class="text-truncate font-weight-regular">{{ feat.label }}</span>
              </div>
              <v-icon color="primary">mdi-check</v-icon>
            </div>
          </div>
          <v-divider class="my-4"></v-divider>
          <span v-if="plan.price == '**'">
          <v-btn
            x-larg
            block
            :outlined="!plan.featured"
            :color="plan.featured ? 'success' : ''"
            to="/inquiry"
          >
            問合せへ
          </v-btn></span>
          <span v-else>
          <v-btn
            x-larg
            block
            :outlined="!plan.featured"
            :color="plan.featured ? 'success' : ''"
            to="/regist"
          >
            申し込む
          </v-btn></span>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
