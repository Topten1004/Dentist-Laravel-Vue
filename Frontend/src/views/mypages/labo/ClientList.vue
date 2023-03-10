<!--                                   -->
<!-- Labo（外注先）とClinic（発注元）の連携 -->
<!--                                   -->
<script setup lang="ts">
import { ref,reactive, computed } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageLabo from "@/mycomponents/BaseTitleImageLabo.vue";
import ClientData from "@/mycomponents/labo-components/ClientData";
import PaginationRounded2 from "@/mycomponents/PaginationRounded2.vue";

const page = ref({ title: "顧客一覧・連携登録（{{::歯科技工所名}}）" });
const contents = reactive(
  {
    titleheader: "歯科技技工所",
    subtitle: "Check Your Suppliers !",
    url: "/",
    btnname: "+笑顔コイン",
  },
);
const breadcrumbs = ref([
  {
    text: "マイページ",
    disabled: false,
    to: "/mypages/labo",
  },
  {
    text: "顧客一覧",
    disabled: false,
    to: "/mypages/labo/clientlist",
  },
]);

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
const clients = ref(ClientData);
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
  return clients.value.filter((user: any) => {
    return user.userinfo.toLowerCase().includes(search.value.toLowerCase());
  });
});

function editItem(item: any) {
  editedIndex.value = clients.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  dialog.value = true;
}
function deleteItem(item: any) {
  const index = clients.value.indexOf(item);
  confirm("Are you sure you want to delete this item?") &&
    clients.value.splice(index, 1);
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
    Object.assign(clients.value[editedIndex.value], editedItem.value);
  } else {
    clients.value.push(editedItem.value);
  }
  close();
}

//Computed Property
//技工所の取引先歯科医療機関をリスト表示する。編集可能項目は、顧客であるか否か。
//取引先が当該技工所を取引先登録したら、一覧に仮表示される。
const formTitle = computed(() => {
  return editedIndex.value === -1 ? "顧客新規追加" : "顧客情報の編集";
});
</script>

<style>
.big {
	transform: scale(1.4);
}
</style>

<template>
  <v-container>
    <BaseTitleImageLabo
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname"
      class="mb-4">
    </BaseTitleImageLabo>

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
          <!-- 【注意】ER図及びDB物理設計書の「取引先」を参照 -->
          <!-- Type１.取引先登録用のPDFをシステムから生成する -->
            <v-btn color="error" class="mr-4">
                <v-icon class="mr-2">mdi-file-pdf-box</v-icon>
                導入案内状 PDF作成
            </v-btn>
          <!-- Type２.自身のメーラーを使い、ログインしているユーザーのメールアドレスから送信させる -->
            <v-btn color="primary" class="mr-4">
                <v-icon class="mr-2">mdi-mail</v-icon>
                メールソフトを立ち上げる
            </v-btn>
          <!-- Type３.取引先登録用のPDFをシステムから生成する -->
          <v-dialog v-model="dialog">
            <template v-slot:activator="{ props }">
              <v-btn color="secondary" v-bind="props" class="ml-auto">
                <v-icon class="mr-2">mdi-account-multiple-plus</v-icon>
                メールによる顧客の追加
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="pa-4 bg-secondary">
                <span class="title text-white">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <div class="mb-4">
                    ご利用頂くには、取引先歯科医療機関を連携登録する必要があります。
                    下記フォームからメールで案内するか、<strong>導入案内PDF（推奨）</strong>を印刷して
                    取引先歯科医療機関にご案内の上、連携登録していただくようお願いしてください。
                  </div>
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-row>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          variant="outlined"
                          hide-details
                          v-model="editedItem.id"
                          label="医療機関の名称"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          variant="outlined"
                          hide-details
                          v-model="editedItem.userinfo"
                          label="代表者の氏名"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          variant="outlined"
                          hide-details
                          v-model="editedItem.usermail"
                          label="医療機関のメールアドレス"
                          type="email"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-container>
              </v-card-text>

              <v-card-actions class="pa-4 d-flex justify-center">
                <!-- <v-spacer></v-spacer> -->
                <v-btn
                 class="mr-8"
                 color="error"
                 @click="close">
                 Cancel
                </v-btn>
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
            <th>取引先情報</th>
            <th>電話番号</th>
            <th>登録日</th>
            <th>連携済</th> 
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
                <!--  icon 対応：連携済であることのチェック表示。編集不可 -->
                <v-icon
                small
                class="mr-2 text-info cursor-pointer"
                @click=""
                title="連携済"
                >mdi-check</v-icon> 
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
    <PaginationRounded2 />
  </v-card>
</v-container>
</template>
