<script setup lang="ts">
import { ref } from "vue";

// 下記は例です。ルールは２箇所に適応願います。
const rules = ref([
  (v: string | any[]) => v.length <= 4 || "ご記入いただいた番号での回答はすでに登録済です。記入した番号に間違いがないか確認してください。",
]);

// 入力番号タイプ分岐
const qs1 = ref("");

// 笑顔の増減
const qs2 = ref({
  items: ['増えた。', '減った。', '変わらない。'],
  value: ['1','2','3'],
    }
);
// お食事状況
const qs3 = ref({
  items: ['美味しく食べられる様になった。', '美味しく食べられなくなった。', '変わらない。'],
  value: ['1','2','3'],
    }
);
// 嚥下状況
const qs4 = ref({
  items: ['良くなった。', '悪くなった。', '変わらない。'],
  value: ['1','2','3'],
    }
);
// 発音発声関連
const qs5 = ref({
  items: ['良くなった。', '悪くなった。', '変わらない。'],
  value: ['1','2','3'],
    }
);
// 認知症関連
const qs6 = ref({
  items: ['少し良くなった', 'かなり良くなった', '変わらない。','対象外'],
  value: ['1','2','3','4'],
    }
);
// 笑顔コイン関連
const egaocoin = ref({
  items: ['10枚 (10/10 最大) ありがとうございます！！', '9枚 (9/10)', '8枚 (8/10)','7枚 (7/10)','6枚 (6/10)','5枚 (5/10)','4枚 (4/10)','3枚 (3/10)','2枚 (2/10)','1枚 (1/10 最小) がんばります！'],
  value: ['10','9','8','7','6','5','4','3','2','1'],
    }
);

</script>

<template>
  <div class="mx-lg-4 mx-sm-0">
    <v-row>
      <v-col cols="12" lg="12" sm="12">
        <h5 class="text-subtitle-1 text-grey-darken-1 px-4">
          治療後に「美しい歯で美味しく食べられているか」等の状況を担当者へ通知しましょう。
          今回の治療に関する評価や担当者への支援として、笑顔コインを担当者に付与することができます。
          利用登録なしでも回答できますが利用登録（推奨）をした場合は、
          履歴の参照が可能となります。
        </h5>
          <v-btn
            size="small"
            color="success"
            variant="outlined"
            class="ml-4 mb-8"
            to="/regist">新規利用登録する方はこちら
          </v-btn>
      </v-col>
    </v-row>
      <v-divider></v-divider>

    <v-card-text class="mt-4 pa-4">
      <h2 class="mb-2">項目選択</h2>
        <h3 class="px-2">名刺の裏面に記載されている項目①が 製造登録番号か治療登録番号かを選択してください。</h3>
        <h5 class="pl-2 pb-2">※製造番号は歯科技工士、治療番号は歯科衛生士が主に発行しています。</h5>
          <v-alert
            icon="mdi-alert-outline"
            outlined
            variant="tonal"
            type="error"
            class="mb-4 caption pa-3"
            >
            ここにアラート等を記載する.  :rules  <br>
            例：ご記入いただいたコードでの回答はすでに登録済です。記入した番号に間違いがないか確認してください。
          </v-alert>
        <v-radio-group v-model="qs1" :mandatory="false">
        <v-row class="mt-0">
          <v-col cols="12" xs="6" sm="5" md="4" lg="3" class="center-text">
            <v-radio label="項目①：製造登録番号" value="product_no" color="success"></v-radio>
          </v-col>
          <v-col cols="12" xs="6" sm="5" md="4" lg="3" class="center-text">
            <v-radio label="項目①：治療登録番号" value="photo_no" color="red"></v-radio>
          </v-col>
        </v-row>
      </v-radio-group>
          
          <v-row>
            <v-col cols="12" sm="12" lg="6" v-if="qs1 === 'product_no'" >
              <!-- <p><strong class="text-red-lighten-1">名刺裏面の製品登録番号を正しく記入してください。</strong></p> -->
              <v-text-field label="①製造登録番号(※1.) : product_number" variant="outlined" :rules="rules"></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" lg="6" v-if="qs1 === 'photo_no'" >
              <!-- <p><strong class="text-red-lighten-1">名刺裏面の治療登録番号を正しく記入してください。</strong></p> -->
              <v-text-field label="①治療登録番号(※1.) (口腔内撮影) : snapshot_number" variant="outlined" :rules="rules"></v-text-field>
            </v-col>

            <v-col cols="12" sm="12" lg="7">
              <!-- <p><strong class="text-red-lighten-1">名刺裏面のアクセスコードを正しく記入してください。</strong></p> -->
              <v-text-field label="②アクセスコード(必須)  : showpassword" variant="outlined" :rules="rules"></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" lg="7">
              <v-text-field label="診察券番号(推奨) : patient_ticket_number" variant="outlined"></v-text-field>
            </v-col>
            </v-row>

            <!-- 上記、アクセスコードが正しく入力されたら、担当者のアバター画像を表示する。 -->
            <v-row>
              <v-col cols="12" lg="12" sm="12">
                <div class="d-flex justify-center">
                  <v-avatar size="120">
                    <img src="@/assets/images/users/user1.jpg" width="140" alt="user" />
                  </v-avatar>
                </div>
                <div class="text-center">
                  <small>今回担当した笑顔創造職人</small><br>
                  <div class="mb-2 font-weight-regular">[::名前::name]さん</div>
                </div>
              </v-col>
            </v-row>

            
            <v-divider class="mb-4"></v-divider> 
            <v-row>
            <v-col cols="12" sm="12" lg="7">
              <h2 class="mb-4">アンケート項目</h2>
              <p class="mb-4">該当項目を選択してください。</p>
              <v-select
                value=""
                :items="qs2.items"
                chips
                label="Q.治療後の笑顔の増減は？"
                outlined
              ></v-select>
              <v-select
                value=""
                :items="qs3.items"
                chips
                label="Q.お食事状況は？"
                outlined
              ></v-select>
              <v-select
                value=""
                :items="qs4.items"
                chips
                label="Q.嚥下(飲み込み)状況は？"
                outlined
              ></v-select>
              <v-select
                value=""
                :items="qs5.items"
                chips
                label="Q.発音・発声について"
                outlined
              ></v-select>
              <v-select
                value=""
                :items="qs6.items"
                chips
                label="Q.認知症関連について"
                outlined
              ></v-select>

              <!-- 投げ銭未使用の場合のみ表示する。  -->
              <!-- <div v-if 投げ銭未使用の場合> -->
              <v-divider class="mb-8"></v-divider>
              <h2 class="mb-4">笑顔コイン 付与</h2>
              <h3 class="mb-4">
                今回の治療に関して、笑顔コインを10枚進呈しています。
                担当者への支援や評価に投げ銭方式で付与してください。
                付与後の変更はできません。
                <v-btn
                  size="x-small"
                  color="error"
                  variant="outlined"
                  class="ml-4"
                  >
                  笑顔コインとは
                  <v-tooltip activator="parent" anchor="top">
                    笑顔コインは、<br>担当した歯科医療技術者の<br>支援に使えるコインです。
                  </v-tooltip>
                </v-btn>
              </h3>
              <v-select
                value=""
                :items="egaocoin.items"
                chips
                label="笑顔コインの投げ銭枚数は？"
                outlined
              ></v-select>
              <!-- </div> -->

            </v-col>
            <v-divider></v-divider>
            <v-col cols="12" sm="12" lg="12" class="mb-4">
              <h2 class="mb-4">コメント</h2>
              <p class="text-11 mb-4">
                ※コメントは、各医療機関管理者と担当者に届きます。<br>
                ※個人情報の入力及び社会規範を逸脱する投稿はご遠慮ください。<br>
                <strong>※急な治療や相談が必要な場合は、速やかにお電話等で当該医療機関にご連絡ください。</strong><br>
                <strong>※担当者からの返信はございません。ご了承ください。</strong></p>
            <v-textarea
            label="その他コメント等 : comment"
            variant="outlined"
            rows="5"
           >
           </v-textarea>
            </v-col>
          </v-row>

    </v-card-text>
    
    <div class="pa-5 border-top text-center">
      <v-btn color="primary" class="mr-2 text-capitalize"><v-icon left dark> mdi-mail</v-icon>送信する</v-btn>
    </div>
  </div>
</template>


