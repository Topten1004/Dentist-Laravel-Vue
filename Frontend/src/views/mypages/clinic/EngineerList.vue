<script setup lang="ts">
import { ref,reactive, computed } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageClinic from "@/mycomponents/BaseTitleImageClinic.vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import EngineerData from "./components/EngineerDataClinic";
import PaginationRounded2 from "@/mycomponents/PaginationRounded2.vue";
import Flex from "../../style-animation/Flex.vue";

const page = ref({ title: "{{::歯科医療機関名}} 所属スタッフ一覧" });
const contents = reactive(
  {
    titleheader: "歯科医療機関",
    subtitle: "Check Your Products !..",
    url: "/login",
    btnname: "ログイン",
  },
);

const display = useDisplay();

const valid = ref(true);
const dialog = ref(false);
const search = ref("");
const rolesbg = ref([
  "teal lighten-3",
  "green lighten-3",
  "cyan lighten-3",
  "light-blue lighten-3",
  "deep-purple lighten-2",
]);
const desserts = ref(EngineerData);
const editedIndex = ref(-1);
const editedItem = ref({
  id: "",
  avatar: "1.jpg",
  userinfo: "",
  usermail: "",
  phone: "",
  jdate: "",
  role: "",
  rolestatus: "",
});
const defaultItem = ref({
  id: "",
  avatar: "1.jpg",
  userinfo: "",
  usermail: "",
  phone: "",
  jdate: "",
  role: "",
  rolestatus: "",
});
//OnMounted

//Methods
const filteredList = computed(() => {
  return desserts.value.filter((user: any) => {
    return user.userinfo.toLowerCase().includes(search.value.toLowerCase());
  });
});

function editItem(item: any) {
  editedIndex.value = desserts.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  dialog.value = true;
}
function deleteItem(item: any) {
  const index = desserts.value.indexOf(item);
  confirm("Are you sure you want to delete this item?") &&
    desserts.value.splice(index, 1);
}

function close() {
  dialog.value = false;
  setTimeout(() => {
    editedItem.value = Object.assign({}, defaultItem.value);
    editedIndex.value = -1;
  }, 300);
}
function send() {
  if (editedIndex.value > -1) {
    Object.assign(desserts.value[editedIndex.value], editedItem.value);
  } else {
    desserts.value.push(editedItem.value);
  }
  close();
}

//Computed Property
//技工所や歯科医療機関管理者による編集可能項目は、メールアドレスと役職項目のみとする。
const formTitle = computed(() => {
  return editedIndex.value === -1 ? "スタッフ新規追加" : "スタッフ情報の編集";
});
</script>

<style>
.big {
	transform: scale(1.4);
}
</style>

<template>
<!--          -->
<!-- PC表示 スマホ表示なし   -->
<!--          -->
<v-container>
    <BaseTitleImageClinic
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname"
      class="mb-4">
    </BaseTitleImageClinic>

  <v-card>
    <v-card-text class="pa-5">
      <v-row>
        <v-col cols="12" lg="4" md="6">
          <v-text-field
            density="compact"
            v-model="search"
            label="Search Engineers"
            hide-details
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="8" md="6" class="text-right">
          <v-dialog v-model="dialog">
            <template v-slot:activator="{ props }">
              <v-btn color="primary" v-bind="props" class="ml-auto">
                <v-icon class="mr-2">mdi-account-multiple-plus</v-icon>
                管理者によるスタッフ追加
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
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          variant="outlined"
                          hide-details
                          v-model="editedItem.id"
                          label="スタッフの会員番号"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          variant="outlined"
                          hide-details
                          v-model="editedItem.userinfo"
                          label="スタッフの氏名"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          variant="outlined"
                          hide-details
                          v-model="editedItem.usermail"
                          label="登録済の同メールアドレス"
                          type="email"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          variant="outlined"
                          hide-details
                          v-model="editedItem.phone"
                          label="携帯電話番号"
                          type="phone"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          variant="outlined"
                          hide-details
                          v-model="editedItem.jdate"
                          label="登録申請日"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          variant="outlined"
                          hide-details
                          v-model="editedItem.role"
                          label="役割・役職名"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12">
                        <v-select
                          variant="outlined"
                          hide-details
                          :items="rolesbg"
                          v-model="editedItem.rolestatus"
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
                  variant="flat"
                  @click="send"
                  >送信</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
      <v-table class="mt-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>ユーザー情報</th>
            <th>携帯電話番号</th>
            <th>登録日</th>
            <th>役割・役職</th>
            <th>承認</th>
            <th>編集・削除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredList" :key="item.id">
            <td>{{ item.id }}</td>
            <td>
              <div class="d-flex align-center py-4">
                <div>
                  <v-img
                    :src="`/assets/images/users/${item.avatar}`"
                    width="45px"
                    class="rounded-circle img-fluid"
                  ></v-img>
                </div>

                <div class="ml-5">
                  <h4>{{ item.userinfo }}</h4>
                  <span class="subtitle-2 d-block font-weight-regular">{{
                    item.usermail
                  }}</span>
                </div>
              </div>
            </td>
            <td>{{ item.phone }}</td>
            <td>{{ item.jdate }}</td>
            <td>
              <v-chip :color="item.rolestatus" label>{{ item.role }}</v-chip>
            </td>
            <td>
              <!-- 従業員であることの承認用チェックボックス -->
              <v-checkbox
                color="success"
                value="1"
                title="承認"
                class="items-center big d-flex align-top flex-shrink"
                ></v-checkbox>

                <!--  状況に応じて　icon 対応に変更した方が良いかも用に下記残す。。 -->
                <!-- 
                <v-icon
                small
                class="mr-2 text-info cursor-pointer"
                @click="approvedItem(item)"
                title="承認済"
                >mdi-check</v-icon> 
                -->

            </td>
            <td>
              <v-icon
                small
                class="mr-2 text-info cursor-pointer"
                @click="editItem(item)"
                title="Edit"
                >mdi-pencil</v-icon
              >
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
</v-container>
</template>
