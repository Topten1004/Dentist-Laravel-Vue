<script setup lang="ts">
import { ref, computed } from "vue";
import ClinicsData from "./ClinicsData";
const valid = ref(true);
const dialog = ref(false);
const search = ref("");
const divisionsbg = ref([
  "green lighten-3",
  "blue lighten-3",
  "red lighten-4",
]);
const users = ref(ClinicsData);
const clinics = ref(ClinicsData);
const labos = ref(ClinicsData);
const editedIndex = ref(-1);
// const editedItem = ref({
//   engineer_id: "",
//   avatar: "1.jpg",
//   userinfo: "",
//   usermail: "",
//   affiliation_id: "",
//   clinics_id: "",
//   labos_id: "",
//   name: "",
//   namecard_consent_flag: "",
//   created_at: "",
//   division: "",
//   divisionstatus: "",
// });
// const defaultItem = ref({
//   engineer_id: "",
//   avatar: "1.jpg",
//   userinfo: "",
//   usermail: "",
//   affiliation_id: "",
//   clinics_id: "",
//   labos_id: "",
//   name: "",
//   namecard_consent_flag: "",
//   created_at: "",
//   division: "",
//   divisionstatus: "",
// });
//OnMounted

//Methods
const filteredList = computed(() => {
  return users.value.filter((user: any) => {
    return user.userinfo.toLowerCase().includes(search.value.toLowerCase());
  });
});


// function editItem(item: any) {
//   editedIndex.value = users.value.indexOf(item);
//   editedItem.value = Object.assign({}, item);
//   dialog.value = true;
// }
// function deleteItem(item: any) {
//   const index = users.value.indexOf(item);
//   confirm("本当に削除してもいいですか? 削除しても関連するデータは残ります。") &&
//     users.value.splice(index, 1);
// }


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
      </v-row>
      <v-table class="mt-5">
        <thead>
          <tr>
            <th>歯科医療機関ID</th>
            <th>名称/メール</th>
            <th>住所</th>
            <th>支払状況</th>
            <th>入金日</th>
            <th>登録日</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredList" :key="item.clinics_id">
            <td>{{ item.clinics_id }}</td>
            <td>
              <div class="d-flex align-center py-4">
                <div>
                  <v-img
                    :src="`/assets/images/users/${item.avatar}`"
                    width="45px"
                    class="rounded-circle img-fluid"
                  ></v-img>
                </div>
                <div class="ml-4">
                  <v-btn
                    to="/mypages/clinic/profile"
                    variant="text"
                    class="pa-0 ma-0">
                    <span class="subtitle-2 d-block font-weight-regular">{{ item.name }}</span>
                  </v-btn>
                  <span class="subtitle-2 d-block font-weight-regular">{{
                    item.usermail
                  }}</span>
                </div>
              </div>
            </td>
            <td>
              <h5>{{ item.address }}</h5>
            </td>
            <td v-if="item.paid === '0' || item.paid === ''">
              <v-chip color="blue-grey" label>未入金</v-chip>
            </td>
            <td v-else-if="item.paid === '1'">
              <v-chip color="light-blue" label >入金済</v-chip>
            </td>
            <td v-else-if="item.paid === '2'">
              <v-chip color="red" label >保留中</v-chip>
            </td> 
            <td>{{ item.paid_day }}</td>
            <td>{{ item.created_at }}</td>
            <td>
              <v-btn
                variant="plain"
                icon="mdi-pencil"
                color="secondary"
                to="./users_editer">
              </v-btn>
              <!-- <v-icon
                small
                class="text-error cursor-pointer"
                title="Delete"
                @click="deleteItem(item)"
                >mdi-delete
              </v-icon> -->
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>
