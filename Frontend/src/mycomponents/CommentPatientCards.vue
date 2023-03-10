<script setup lang="ts">
import { ref } from "vue";
import OpinionForm from "@/views/mypages/common/form/OpinionForm.vue"
import TitleImage5 from "@/assets/images/bg/title5.jpg"
const dialog = ref(false);

// アクセスしているユーザータイプで　投稿ボタンを非表示化。
const users = defineProps({
    usertype: String,
  });

const panel = ref([0,1,2,3,4,5]);
const disabled = ref(false);
const ansers = ref(
  {
    qs1: "",
    qs2: "増えた。",
    qs3: "美味しく食べられる様になった。",
    qs4: "変わらない。",
    qs5: "良くなった。",
    qs6: "かなり良くなった",
    egaocoin: "8",
  });
  const rating = ref(8);

</script>


<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Comment Patient -->
  <!-- 投稿は1回のみ　更新は無し -->
  <!-- ----------------------------------------------------------------------------- -->

  <v-card elevation="2">
    <v-img
      class="align-start text-white"
      height="110"
      :src="TitleImage5"
      cover
    >
    <v-card-title class="mt-2 no-ellipsis">アンケート結果・笑顔コイン</v-card-title>

    <!-- Dialog Form -->
      <div class="text-center mt-2">
      <v-dialog v-model="dialog" persistent>
        
        <template v-slot:activator="{ props }">
          <v-btn
            v-if = "usertype === 'patient'"
            v-bind="props"
            color="red"
            rounded
            variant="flat"> 
            回答投稿＆笑顔コイン付与
          </v-btn>
        </template>
        <v-card style="height: auto;width:auto;" class="overflow-auto ma-4 px-6 pb-6">
            <div class="d-flex justify-space-between mt-4">
              <div class="text-h5">笑顔コイン付与＆コメント投稿</div>
              <div>
                <v-btn color="error" @click="dialog = false" variant="text" rounded="pill" class="d-flex justify-end">
                  ×閉じる
                </v-btn>
              </div>
            </div>
            <div class="mb-3 text-subtitle-2">
              担当者への応援や使用感等を投稿してください。投稿内容は関係者に届きます。
            </div>

            <OpinionForm></OpinionForm>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" @click="dialog = false" variant="flat" class="mr-4">
                  閉じる
                </v-btn>
                <!-- <v-btn color="success" @click="dialog = false" variant="tonal" prepend-icon="mdi-cloud-upload">
                    投稿する
                </v-btn> -->
              </v-card-actions>
        </v-card>
      </v-dialog>
      </div>
    </v-img>

    <div class="ma-4 text-body-2">
      <h2 class="mt-8">治療後のアンケート回答 結果</h2>
      <small class="mr-4 d-flex justify-end">回答日 : 2023/1/15</small>
    
      <v-divider class="mt-0 mb-4"></v-divider>

        <v-card class="mx-auto" variant="outlined"
          color="#26c6da"
          >
          <v-card-item class="py-4 px-6 text-white bg-secondary">
            <h4 class="text-h6">
              <v-icon>mdi-account-circle</v-icon>
              患者さんのコメント
            </h4>
          </v-card-item>
          <v-card-text class="pa-6">
            <h5 class="text-h6 title">治療及び製作の担当者さんへ</h5>
            <p class="text-grey-darken-4 text-18 lineh150 mt-3">
              <!-- 患者さんが投稿した内容をここに記載します。{{ comment }} -->
              患者さんが投稿した内容をここに記載します。
              患者さんが投稿した内容をここに記載します。
              患者さんが投稿した内容をここに記載します。
            </p>
          </v-card-text>
            <v-card-actions>
              <v-list-item class="w-120">
                <!-- 下記アバターは、はめ込みを使用しますので固定です。 -->
                <template v-slot:prepend>
                  <v-avatar
                    color="grey-darken-3"
                    image="https://smile24.org/src/assets/images/users/p-avater1.jpg"
                  ></v-avatar>
                </template>

                <template v-slot:append>
                  <div class="text-10">患者氏名：＊＊＊＊</div>
                  <div class="ml-2">
                    <v-icon class="mr-1" icon="mdi-heart" color="red"></v-icon>
                    <span class="subheading mr-2">笑顔コイン: *枚</span>
                  </div>
                </template>

              </v-list-item>
            </v-card-actions>
        </v-card>
      
      <!-- 投稿前の表示 -->
      <v-alert prominent type="error" variant="tonal" class="my-2">
        ただいまコメントはありません。
      </v-alert>

      <!-- 投稿後の追加表示 -->
      <v-alert prominent type="success" variant="elevated" class="my-2 text-h6">
        ご投稿ありがとうございました。
      </v-alert>

      <v-card-subtitle>※投稿内容は、担当したすべての歯科医療関係者で共有されます。</v-card-subtitle>
    </div>
    <v-divider class="my-8"></v-divider>

    <!-- アンケートの回答内容及び笑顔コイン付与数表示 -->
    <div>
      <div class="ml-4 my-6 d-flex justify-center">
        <v-badge
            color="pink lighten-2"
            bordered
            icon="mdi-lock"
            overlap
          >
        <v-btn
          to="/egaocoin"
          color="error"
          dark
          variant="flat"
          prepend-icon="mdi-thumb-up"
          elevation="2"
          size="x-large"
        >
            獲得した笑顔コイン：　<span class="text-h3">9</span>/10
        </v-btn></v-badge>
      </div>
      <div class="d-flex justify-center mx-4">
          <small>※治療（技工装置含む）で発行した名刺1枚に対して笑顔コイン10枚付与がされます。</small>
      </div>
      <div class="mx-6 mr-6 my-6">

      <v-expansion-panels v-model="panel" :disabled="disabled" multiple>
        <v-expansion-panel
          title="Q. 治療後の笑顔の増減は？"
          :text="ansers.qs2"
        >
        </v-expansion-panel>
        <v-expansion-panel
          title="Q. お食事状況は？"
          :text="ansers.qs3"
        ></v-expansion-panel>
        <v-expansion-panel
          title="Q. 嚥下(飲み込み)状況は？"
          :text="ansers.qs4"
        ></v-expansion-panel>
        <v-expansion-panel
          title="Q. 発音・発声について"
          :text="ansers.qs5"
        ></v-expansion-panel>
        <v-expansion-panel
          title="Q. 認知症関連について"
          :text="ansers.qs6"
        ></v-expansion-panel>
      </v-expansion-panels>
      </div>
    </div>

  </v-card>
</template>
