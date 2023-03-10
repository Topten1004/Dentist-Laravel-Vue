<script setup lang="ts">
  import { ref, reactive } from "vue";
  import { useDisplay } from "vuetify";
  import SelectionControlsChkLabos from "@/mycomponents/labo-components/SelectionControlsChkLabos.vue";
  import FileInputsValidation from "@/mycomponents/FileInputsValidation.vue";
  
  const page = ref({ title: "口腔内画像投稿" });
  const display = useDisplay();
  const dialog = ref(false);
  const contents = reactive(
  {
    subtitle: "Check Your Cares !",
    url: "././carelist",
    btnname: "治療画像一覧",
  },
);
  </script>
  
  <template>
    <v-card elevation="2" class="">
        <div class="ma-4" v-if="display.mdAndUp.value">
          スマートフォンのカメラ機能を用いて、{{ "engineer.name" }}（又は clinic_name）さんが担当した患者さんの口腔内記録を撮影しアップロードします。
          （2MB迄）<br>
          <small>※氏名の記載など明らかに個人を特定できる画像をUPする場合は、必ず患者さんの事前承諾を得てください。</small>
        </div>
        <div class="ma-2" v-if="display.smAndDown.value">
          カメラ機能で撮影した口腔内画像をアップロードする。
          最大2MB迄。
        </div>

        <v-alert
          icon="mdi-alert-outline"
          outlined
          variant="tonal"
          type="error"
          class="my-2 mb-3 caption pa-3"
          >ここにアラートを表示。 画像は最低でも１件の登録が必要です。
        </v-alert>

      <v-row class="mx-2">
          <v-col col="12" lg="12" class="mx-0">
            <h2>1.患者情報登録</h2>
              診察券番号を登録。患者氏名不要。
          </v-col>

          <v-col cols="12" class="mx-0">
            <v-text-field label="診察券番号を入力（推奨）" variant="outlined" class="mr-8"></v-text-field>
          </v-col>

          <v-divider class="mb-4"></v-divider>

          <v-col col="12" class="mx-0">
            <h2>2.画像撮影＆アップロード</h2>
              <!-- 以下だとファイル名が皆同じになるので注意。設計上はは最大３件。実務では１件で -->
              <FileInputsValidation></FileInputsValidation>
              <!-- <FileInputsValidation></FileInputsValidation>
              <FileInputsValidation></FileInputsValidation> -->

              <v-btn color="secondary" class="ml-8 mt-4 mb-8 text-capitalize" size="small" variant="outlined">
                クリア
              </v-btn>
              <v-btn 
                @click="dialog = true"
                color="red-darken-1" 
                class="ml-4 mt-4 mb-8 text-capitalize" 
                size="x-large">
                登録する
              </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <v-dialog v-model="dialog" scrollable>
      <div class="d-flex justify-center">
        <v-card elevation="2" max-width="635">
          <v-img
            src="https://smile24.org/src/assets/images/top/popupheader.png"
            height="122px"
            cover
          ></v-img>
          <v-card-title class="bg-red">以下を名刺に記入してください！</v-card-title>
          <v-card-text style="height: 240px" class="overflow-auto">
            <div column>
            <div class="mb-2">
              <h5>①製品番号</h5>
              <div class="text-h5 ml-8">{{ "product_number" }}</div>
              <v-divider></v-divider>
            </div>
            <div class="mb-2">
              <h5>②アクセスコード</h5>
              <div class="text-h5 ml-8">{{ "showpassword" }}</div>
              <v-divider></v-divider>
            </div>
            <div class="mb-2">
              <h5>診察券番号(※)</h5>
              <div class="text-h5 ml-8">{{ "patient_tiket_number" }}</div>
              <v-divider></v-divider>
            </div>
            </div>
            <p class="text-10">※又は患者氏名(承諾済の場合に限る)</p>
            
          </v-card-text>
          <v-card-actions>
            <v-btn
            @click="dialog = false"
            color="error"
            class="mx-auto mt-4"
            variant="tonal"
            >
            閉じる</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-dialog>

  </template>
