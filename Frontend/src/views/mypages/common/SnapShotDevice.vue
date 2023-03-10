<script setup lang="ts">
  import { ref, reactive } from "vue";
  import { useDisplay } from "vuetify";
  import SelectionControlsChkLabos from "@/mycomponents/labo-components/SelectionControlsChkLabos.vue";
  import FileInputsValidation from "@/mycomponents/FileInputsValidation.vue";
  
  const display = useDisplay();
  const dialog = ref(false);
  const search = ref("");

  </script>
  
  <template>
  
    <v-card elevation="2" class="">     
        <div class="ma-4" v-if="display.mdAndUp.value">
          スマートフォンのカメラ機能を用いて、{{ "engineer.name" }}（又は labo_name）さんが
          製作した技工装置（単体推奨）を撮影しアップロードします。（最大2MB）<br>
          <small>※明らかに個人を特定できる画像をUPする場合は、必ず患者さんの事前承諾を得てください。</small>
        </div>
        <div class="ma-2" v-if="display.smAndDown.value">
          カメラ機能で製作した技工装置（単体推奨）を撮影アップロードする。
          最大2MB。
        </div>

        <v-alert
          icon="mdi-alert-outline"
          outlined
          variant="tonal"
          type="error"
          class="my-2 mb-3 caption pa-3"
          >ここにアラートを表示。 画像は最低でも１件の登録が必要です。
        </v-alert>

        <v-row class="mx-4">
          <v-col col="12" lg="12" class="mx-1">
            <h2>1.取引先選択</h2>
              当該技工装置の発注元を選択します。選択リストに無ければ技工所管理画面から追加してください。
          </v-col>
        
          <v-col cols="12" lg="8" sm="12" class="mx-4 mb-4">
                <v-text-field
                  v-model="search"
                  label="取引先名検索はここに入力"
                  hide-details
                  variant="outlined">
                </v-text-field>

              <!-- 取引先選択 -->
              <selection-controls-chk-labos class="mr-8" />

              <!-- 診察券番号　patient_ticket_number -->
              <v-text-field label="診察券番号を入力（推奨）" variant="outlined" class="mr-8"></v-text-field>
              <small>※個人情報保護の配慮から医療機関から当該患者の診察券番号の通知を受けてください。</small>
          </v-col>
          
            <v-divider class="mb-8"></v-divider>
          <v-col col="12" lg="12" class="mx-1">
            <h2 class="ml-4">2.画像撮影＆UP(注意：設計上は３件、当初は１件UPする仕様を採用する。)</h2>
              <!-- 以下だとファイル名が皆同じになるので注意。設計上はは最大２件。当初実務では１件でスタートする -->
              <FileInputsValidation></FileInputsValidation>
              <!-- <FileInputsValidation></FileInputsValidation> -->

              <v-divider class="mb-8"></v-divider>
              <!-- 備考欄　remarks -->
              <div>
                <v-text-field
                  label="備考欄 : 外注先等があれば記載"
                  name="remarks"
                  variant="outlined"
                  class="mr-8">
                </v-text-field>
              </div>
              
              <v-btn color="secondary" class="ml-8 mt-4 mb-8 text-capitalize" size="small" variant="outlined">
                クリア
              </v-btn>
              <v-btn 
                @click="dialog = true"
                color="error" 
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
