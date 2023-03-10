<!-- 注意：                 -->
<!-- 従業員登録は、要検討です。以下はサンプルです。 -->
<!--                       -->
<script setup lang="ts">
import { ref, computed } from "vue";
import { useDisplay } from "vuetify";
import EngineerData from "@/mycomponents/society-components/EngineerData";
import PaginationRounded2 from "@/mycomponents/PaginationRounded2.vue";


const page = ref({ title: "所属 会員（申告） 一覧（{{::学会名}}）" });
const breadcrumbs = ref([
  {
    text: "マイページ",
    disabled: false,
    to: "/maypages/labo",
  },
  {
    text: "会員（申告） 一覧",
    disabled: false,
    to: "/maypages/labo/engineerlist",
  },
]);

const display = useDisplay();

const member_code = ref(true);
const dialog = ref(false);
const search = ref("");

const engineers = ref(EngineerData);
const editedIndex = ref(-1);
const editedItem = ref({
  member_code: "",
  avatar: "1.jpg",
  userinfo: "",
  usermail: "",
  address: "",
  phone: "",
  affiliation: "",
});
const defaultItem = ref({
  member_code: "",
  avatar: "1.jpg",
  userinfo: "",
  usermail: "",
  address: "",
  phone: "",
  affiliation: "",
});
//OnMounted

//Methods
const filteredList = computed(() => {
  return engineers.value.filter((user: any) => {
    return user.userinfo.toLowerCase().includes(search.value.toLowerCase());
  });
});

function editItem(item: any) {
  editedIndex.value = engineers.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  dialog.value = true;
}
function deleteItem(item: any) {
  const index = engineers.value.indexOf(item);
  confirm("本当にこの従業員を従業員リストから削除してもよろしいですか?  ここで削除しても従業員の過去履歴は残ります。") &&
    engineers.value.splice(index, 1);
}

function close() {
  dialog.value = false;
  setTimeout(() => {
    editedItem.value = Object.assign({}, defaultItem.value);
    editedIndex.value = -1;
  }, 300);
}
// function send() {
//   if (editedIndex.value > -1) {
//     Object.assign(engineers.value[editedIndex.value], editedItem.value);
//   } else {
//     engineers.value.push(editedItem.value);
//   }
//   close();
// }

//Computed Property
//以下編集機能は不要。
const formTitle = computed(() => {
  return editedIndex.value === -1 ? "新規追加" : "情報の編集";
});
</script>

<style>
.big {
	transform: scale(1.4);
}
</style>

<template>
  <v-card>
    <v-card-item class="py-4 px-6 text-white bg-secondary">
          <h4 class="text-h6">承認登録</h4>
        </v-card-item>
    <div class="ma-4">
      <h3>
        貴会会員の自己申告により、{****学会}の会員である事の確認通知が届きます。<br>
        {****学会}の管理者は速やかに会員名簿と照合して、会員であれば「承認」にチェックを入れてください。<br>
        会員でない場合は、削除してください。（削除すると自己申告自体が取り消されます。）
      </h3>
    </div>
    <v-card-text class="pa-5">
      <v-row>
        <v-col cols="12" lg="4" md="6">
          <v-text-field
            density="compact"
            v-model="search"
            label="会員名検索"
            member_code-details
            variant="outlined"
          ></v-text-field>
        </v-col>
        <!-- 以下、編集機能は不要
          <v-col cols="12" lg="8" md="6" class="text-right">
          <v-dialog v-model="dialog">
            <template v-slot:activator="{ props }">
              <v-btn color="primary" v-bind="props" class="ml-auto">
                <v-icon class="mr-2">mdi-account-multiple-plus</v-icon>
                管理者による追加
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="pa-4 bg-secondary">
                <span class="title text-white">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <div class="mb-4">
                    スタッフは事前に個人登録が必要です。<br>
                    個人登録後に発行される<strong>会員番号</strong>と登録時に用いた<strong>メールアドレス</strong>を
                    下記フォーム入力・送信すると当該スタッフ宛に仮登録メールが届きますので
                    内容を確認して各自承認してください。
                  </div>
                  <v-form ref="form" v-model="valmember_code" lazy-valmember_codeation>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          variant="outlined"
                          hmember_codee-details
                          v-model="editedItem.member_code"
                          label="スタッフの会員番号"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          variant="outlined"
                          hmember_codee-details
                          v-model="editedItem.userinfo"
                          label="スタッフの氏名"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          variant="outlined"
                          hmember_codee-details
                          v-model="editedItem.usermail"
                          label="登録済の同メールアドレス"
                          type="email"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          variant="outlined"
                          hmember_codee-details
                          v-model="editedItem.phone"
                          label="携帯電話番号"
                          type="phone"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          variant="outlined"
                          hmember_codee-details
                          v-model="editedItem.address"
                          label="登録申請日"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          variant="outlined"
                          hmember_codee-details
                          v-model="editedItem.affiliation"
                          label="役割・役職名"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12">
                        <v-select
                          variant="outlined"
                          hmember_codee-details
                          :items="affiliationsbg"
                          v-model="editedItem.affiliationstatus"
                          label="役割・役職名の背景色"
                        ></v-select>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-container>
              </v-card-text>

              <v-card-actions class="pa-4">
                <v-spacer></v-spacer>
                <v-btn color="error" @click="close">Cancel</v-btn>
                <v-btn
                  color="secondary"
                  :disabled="
                    editedItem.userinfo == '' || editedItem.usermail == ''
                  "
                  variant="tonal"
                  @click="send"
                  >送信</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col> 
        -->
      </v-row>

      <!-- 注意 -->
      <!-- 未承認が最上位に表示されるようにソートする。 -->
      <v-table class="mt-5">
        <thead>
          <tr>
            <th>会員番号</th>
            <th>ユーザー情報</th>
            <th>住所</th>
            <th>電話番号</th>
            <th>所属・職場名</th>
            <th>承認</th>
            <th nowrap>削除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredList" :key="item.member_code">
            <td>{{ item.member_code }}</td>
            <td>
              <div class="d-flex align-center py-4">
                <div>
                  <v-img
                    :src="`/assets/images/users/${item.avatar}`"
                    width="45px"
                    class="rounded-circle img-flumember_code"
                  ></v-img>
                </div>

                <div class="ml-5">
                  <h4>{{ item.userinfo }}</h4>
                  <span class="subtitle-2 d-block font-weight-regular">{{
                    item.usermail
                  }}</span>id
                </div>
              </div>
            </td>
            <td>{{ item.address }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.affiliation }}</td>
            <td nowrap>
              <!-- 会員であることの承認用チェックボックス -->
              <v-checkbox
                color="success"
                value="1"
                title="承認"
                class="items-center big d-flex align-top flex-shrink"
                ></v-checkbox>
            </td>
            <td nowrap>
              <!-- <v-icon
                small
                class="mr-2 text-info cursor-pointer"
                @click="editItem(item)"
                title="Edit"
                >mdi-pencil</v-icon
              > -->
              <v-icon
                small
                class="text-error cursor-pointer"
                title="Delete"
                @click="deleteItem(item)"
                >mdi-delete</v-icon
              >
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
    <PaginationRounded2 />
  </v-card>
</template>
