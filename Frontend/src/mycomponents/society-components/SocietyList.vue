<script setup lang="ts">
import { ref, computed } from "vue";
import PaginationRounded2 from "@/mycomponents/PaginationRounded2.vue";
import ContactData from "./SocietyData";
const valid = ref(true);
const dialog = ref(false);
const search = ref("");
const society_classsbg = ref([
  "teal lighten-3",
  "green lighten-3",
  "cyan lighten-3",
  "light-blue lighten-3",
  "deep-purple lighten-2",
]);
const societies = ref(ContactData);
const editedIndex = ref(-1);
const editedItem = ref({
  name: "",   //登録者の氏名
  adress: "",   //登録者の住所
  society_id: "1",
  society_name: "",
  approval: "",
  society_class: "",
  society_classstatus: "",
  society_member_code: "",
});
const defaultItem = ref({
  name: "",   //登録者の氏名
  adress: "",   //登録者の住所
  society_id: "",
  society_name: "",
  approval: "",
  society_class: "",
  society_classstatus: "",
  society_member_code: "",
});
//OnMounted

//Methods
const filteredList = computed(() => {
  return societies.value.filter((user: any) => {
    return user.name.toLowerCase().includes(search.value.toLowerCase());
  });
});

function editItem(item: any) {
  editedIndex.value = societies.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  dialog.value = true;
}

function deleteItem(item: any) {
  const index = societies.value.indexOf(item);
  confirm("本当に削除してもいいですか?　削除すると経歴情報に表示されなくなります。") &&
  societies.value.splice(index, 1);
}

function close() {
  dialog.value = false;
  setTimeout(() => {
    editedItem.value = Object.assign({}, defaultItem.value);
    editedIndex.value = -1;
  }, 300);
}
function save() {
  if (editedIndex.value > -1) {
    Object.assign(societies.value[editedIndex.value], editedItem.value);
  } else {
    societies.value.push(editedItem.value);
  }
  close();
}

//Computed Property
const formTitle = computed(() => {
  return editedIndex.value === -1 ? "新規登録願い" : "所属連携登録";
});
</script>

<template>
  <v-card>
    <v-card-text class="pa-1">
      <v-row>
        <v-col cols="12" lg="4" md="6">
          <!-- 検索結果にない場合のアラートが必要 -->
          <v-text-field
            v-model="search"
            label="1.学会名検索はここに入力"
            hide-details
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="8" md="6" class="text-right">
          <v-dialog v-model="dialog">
            <template v-slot:activator="{ props }">
              <v-btn color="secondary" v-bind="props" class="ml-auto">
                <v-icon class="mr-2">mdi-account-multiple-plus</v-icon>
                リストにない場合
              </v-btn>
            </template>
            <div class="d-flex justify-center">
              <v-card width="600">
                <v-card-title class="pa-4 bg-primary">
                  <span class="title text-white">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <div class="my-4">
                    当該学会・団体が当システムを利用している場合、
                    下記フォームから申請すると、学会へ通知し学会管理者が確認後に承認マークが付与されます。<br>
                    当該学会・団体が当システムを利用していない場合は、
                    所属申請すると「自己申告」マークが付与されます。
                  </div>
                    <v-form ref="form" v-model="valid" lazy-validation>
                      <v-row>
                        <!-- 　これは不要。。
                        <v-col cols="12" sm="8">
                          <v-text-field
                            variant="outlined"
                            hide-details
                            v-model="editedItem.society_id"
                            label="Id"
                            disabled
                          ></v-text-field>
                        </v-col> 
                        -->
                        <v-col cols="12" lg="12" sm="12">
                          <v-text-field
                            variant="outlined"
                            hide-details
                            v-model="editedItem.name"
                            label="登録者氏名"
                            disabled
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" lg="12" sm="12">
                          <v-text-field
                            variant="outlined"
                            hide-details
                            v-model="editedItem.adress"
                            label="ご住所"
                            disabled
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" lg="12" sm="12">
                          <v-text-field
                            variant="outlined"
                            hide-details
                            v-model="editedItem.society_name"
                            label="学会・団体名"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12">
                          <v-text-field
                            variant="outlined"
                            hide-details
                            v-model="editedItem.society_member_code"
                            label="当該学会の貴方の会員番号を入力してください。:society_member_code"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-form>
                  
                </v-card-text>

                <v-card-actions class="mr-4 mb-4">
                  <v-spacer></v-spacer>
                  <v-btn color="error" @click="close">Cancel</v-btn>
                  <v-btn
                    color="primary"
                    :disabled="
                    editedItem.name == '' || editedItem.society_member_code == ''
                    "
                    variant="flat"
                    @click="save"
                    >2.所属登録する</v-btn
                  >
                </v-card-actions>
              </v-card>
            </div>
          </v-dialog>
        </v-col>
      </v-row>
      <v-table class="mt-5" fixed-header>
        <thead>
          <tr>
            <th class="text-left" nowrap>学会・団体名</th>
            <th class="text-left" nowrap>所属状況</th>
            <th class="text-left" nowrap>登録</th>
            <th class="text-left" nowrap>削除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredList" :key="item.society_id">
            <!-- <td nowrap>{{ item.society_id }}</td> -->
            <td nowrap>
              <div class="d-flex align-center py-4">
                <div class="">
                  <h4>{{ item.society_name }}</h4>
                </div>
              </div>
            </td>
            <td nowrap>
              <v-chip color="success" label v-if="(item.approval ==='1' )">登録済</v-chip>
              <v-chip color="default" label v-else-if="(item.approval ==='0')">未登録</v-chip>
              <v-chip color="primary" label v-else="(item.approval ==='2')">自己申告済</v-chip>
            </td>
            <td nowrap>
              <v-btn
                v-if="(item.approval ==='0')"
                class="mr-2 cursor-pointer"
                @click="editItem(item)"
                title="所属申請">
                2.所属申請
              </v-btn>
              </td>
              <td nowrap>
              <v-btn
                v-if="(item.approval ==='1' || item.approval ==='2')"
                class="mr-2 cursor-pointer"
                color="accent"
                @click="deleteItem(item)"
                title="削除">
              <v-icon
                small
                class="mr-2 cursor-pointer"
                >mdi-delete-forever</v-icon>
                削除
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
      <!-- ページネーション　10件ごと -->
      <PaginationRounded2></PaginationRounded2>
    </v-card-text>
  </v-card>
</template>
