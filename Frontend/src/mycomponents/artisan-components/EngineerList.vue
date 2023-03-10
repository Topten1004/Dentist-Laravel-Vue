<script setup lang="ts">
import { ref, computed } from "vue";
import EngineerData from "./EngineerData";
import PaginationRounded2 from "../PaginationRounded2.vue";
const search = ref("");
// const valid = ref(true);
// const dialog = ref(false);
// const rolesbg = ref([
//   "teal lighten-3",
//   "green lighten-3",
//   "cyan lighten-3",
//   "light-blue lighten-3",
//   "deep-purple lighten-2",
// ]);
const desserts = ref(EngineerData);
const editedIndex = ref(-1);
const editedItem = ref({
  id: "",
  avatar: "1.jpg",
  name: "",
  usermail: "",
  egaocoin: "",
  tsuraicoin: "",
  created_at: "",
  role: "",
});
const defaultItem = ref({
  id: "",
  avatar: "1.jpg",
  name: "",
  usermail: "",
  egaocoin: "",
  tsuraicoin: "",
  created_at: "",
  role: "",
});
//OnMounted

//Methods
const filteredList = computed(() => {
  return desserts.value.filter((user: any) => {
    return user.name.toLowerCase().includes(search.value.toLowerCase());
  });
});
</script>

<template>
  <v-card elevation="2">
    <v-card-text class="pa-0">
      <div class="bg-secondary pa-4">
        <h2 class="">所属スタッフ一覧</h2>
        <h4 class="font-weight-light">Check Your NameCard !</h4>
      </div>
      <h5 class="subtitle ma-4">所属医療機関（技工所・歯科医院）スタッフのコイン獲得・発行状況</h5>
      <v-divider class="mb-4"></v-divider>
      <v-row class="ma-4">
        <v-col cols="12" lg="4" md="6">
          <v-text-field
            density="compact"
            v-model="search"
            label="スタッフを検索する"
            hide-details
            variant="outlined"
          ></v-text-field>
        </v-col>
      </v-row>
      <div class="text-subtitle-2 mt-5 mx-4 hidden-sm-and-up">
          全て表示するには、右から左にスライする。
      </div>
      <v-table class="mx-2">
        <thead>
          <tr>
            <!-- IDは管理者のみ表示する。
              <th v-if owners... >Id</th> 
            -->
            <th nowrap>名前</th>
            <th nowrap>役職・部門</th>
            <th nowrap>笑顔コイン（総数）</th>
            <th nowrap>つら〜いコイン（総数）</th>
            <th nowrap>登録日</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredList" :key="item.id">
            <!-- IDは管理者のみ表示する。
              <td v-if owners... >{{ item.id }}</td>
             -->
            <td nowrap>
              <div class="d-flex align-center py-4">
                <div>
                  <v-img
                    :src="`/assets/images/users/${item.avatar}`"
                    width="45px"
                    class="rounded-circle img-fluid"
                  ></v-img>
                </div>

                <div class="ml-5">
                  <h4>{{ item.name }}</h4>
                  <!-- Emailは管理者のみ表示する。スタッフ同士では非公開とする。
                    <div v-if="{{owners}}">
                  <span class="subtitle-2 d-block font-weight-regular">{{
                    item.usermail
                  }}</span>
                  </div> 
                    -->
                </div>
              </div>
            </td>
            <td nowrap>
              <!-- rolestatus がDB上にないので　工夫が必要。共通の単色でも良いかも。。 -->
              <v-chip :color="item.rolestatus" label>{{ item.role }}</v-chip>
            </td>
            <td nowrap class="text-center">{{ item.egaocoin }}</td>
            <td nowrap class="text-center">{{ item.tsuraicoin }}</td>
            <td nowrap>{{ item.created_at }}</td>
          </tr>
        </tbody>
        <PaginationRounded2 />
      </v-table>
    </v-card-text>
  </v-card>
</template>
