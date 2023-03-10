<script setup lang="ts">
import { ref, computed } from "vue";
import LabosData from "./LabosData";
const valid = ref(true);
const dialog = ref(false);
const search = ref("");
const search2 = ref("");
const search3 = ref("");
const divisionsbg = ref([
  "green lighten-3",
  "blue lighten-3",
  "red lighten-4",
]);
const users = ref(LabosData);
const clinics = ref(LabosData);
const labos = ref(LabosData);
const editedIndex = ref(-1);
const editedItem = ref({
  engineer_id: "",
  avatar: "1.jpg",
  userinfo: "",
  usermail: "",
  affiliation_id: "",
  clinics_id: "",
  labos_id: "",
  name: "",
  namecard_consent_flag: "",
  jdate: "",
  division: "",
  divisionstatus: "",
});
const defaultItem = ref({
  engineer_id: "",
  avatar: "1.jpg",
  userinfo: "",
  usermail: "",
  affiliation_id: "",
  clinics_id: "",
  labos_id: "",
  name: "",
  namecard_consent_flag: "",
  jdate: "",
  division: "",
  divisionstatus: "",
});
//OnMounted

//Methods
const filteredList = computed(() => {
  return users.value.filter((user: any) => {
    return user.userinfo.toLowerCase().includes(search.value.toLowerCase());
  });
});
//Methods2 歯科医療機関IDで検索
const filteredList2 = computed(() => {
  return clinics.value.filter((clinic: any) => {
    return clinic.clinics_id.toLowerCase().includes(search2.value.toLowerCase());
  });
});
//Methods3　歯科技工所IDで検索
const filteredList3 = computed(() => {
  return labos.value.filter((labo: any) => {
    return labo.labos_id.toLowerCase().includes(search3.value.toLowerCase());
  });
});

function editItem(item: any) {
  editedIndex.value = users.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  dialog.value = true;
}
function deleteItem(item: any) {
  const index = users.value.indexOf(item);
  confirm("本当に削除してもいいですか? 削除しても関連するデータは残ります。") &&
    users.value.splice(index, 1);
}


//【注意】
// 複数検索の　javascript は記載していません。作成願います。
// 歯科医療機関IDや歯科技工所IDで検索する目的は、同じ職場の従業員を抽出するためです。


// function close() {
//   dialog.value = false;
//   setTimeout(() => {
//     editedItem.value = Object.assign({}, defaultItem.value);
//     editedIndex.value = -1;
//   }, 300);
// }
// function save() {
//   if (editedIndex.value > -1) {
//     Object.assign(users.value[editedIndex.value], editedItem.value);
//   } else {
//     users.value.push(editedItem.value);
//   }
//   close();
// }

//Computed Property
// const formTitle = computed(() => {
//   return editedIndex.value === -1 ? "New Member" : "Edit Menber";
// });
</script>

<template>
  <v-card>
    <v-card-text class="pa-5">
      <v-row>
        <v-col cols="12" lg="6" md="6">
          <v-text-field
            density="compact"
            v-model="search"
            label="ユーザー名検索"
            hide-details
            variant="outlined">
          </v-text-field>
        </v-col>
        <v-col cols="12" lg="3" md="3" class="text-right">
          <v-text-field
            density="compact"
            v-model="search2"
            label="歯科医療機関ID検索"
            hide-details
            variant="outlined">
          </v-text-field>
        </v-col>
        <v-col cols="12" lg="3" md="3" class="text-right">
          <v-text-field
            density="compact"
            v-model="search3"
            label="歯科技工所ID検索"
            hide-details
            variant="outlined">
          </v-text-field>
        </v-col>
      </v-row>
      <v-table class="mt-5">
        <thead>
          <tr>
            <th>engineer_id</th>
            <th>名前/メール</th>
            <th>所属ID-[医院ID]-[技工所ID]<br>職場名</th>
            <th>区分(division)</th>
            <th>名刺確認</th>
            <th>登録日</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredList" :key="item.engineer_id">
            <td>{{ item.engineer_id }}</td>
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
            <td>
              <!-- 所属IDは最新のものを採用する -->
              <h5>{{ item.affiliation_id }}-[{{ item.clinics_id }}]-[{{ item.labos_id }}]</h5>
              <!-- 歯科医療機関clinic の場合は、以下を表示。　Laboの場合は、/mypages/labo/profile/123 -->
              <v-btn
                to="/mypages/clinic/profile"
                variant="text"
                class="pa-0 ma-0">
                <span class="subtitle-2 d-block font-weight-regular">{{ item.name }}</span>
              </v-btn>
              </td>
            <td>
              <v-chip :color="item.divisionstatus" label>{{ item.division }}</v-chip>
            </td>
            <td class="text-center">
              <v-icon
                v-if = "item.namecard_consent_flag === '1'"
                small
                class="mr-2 text-primary cursor-pointer"
                title="承認済">
                mdi-check
              </v-icon>
            </td>
            <td>{{ item.jdate }}</td>
            <td>
              <v-btn
                variant="plain"
                icon="mdi-pencil"
                color="secondary"
                to="./users_editer">
              </v-btn>
              <v-icon
                small
                class="text-error cursor-pointer"
                title="Delete"
                @click="deleteItem(item)"
                >mdi-delete
              </v-icon>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>
