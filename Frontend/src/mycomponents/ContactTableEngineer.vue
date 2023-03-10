<script setup lang="ts">
import { ref, computed } from "vue";
import PaginationRounded2 from "./PaginationRounded2.vue";
const ownerscheck = ref();
const chip = ref(false);

const valid = ref(true);
const dialog = ref(false);
const search = ref("");
const name = ref("");
const phone_no = ref("");
const role = ref("");
const img = ref("/1.jpg");
const catchphrase = ref("");
const employee_egaocoins = ref("");
const tsuraicoins = ref("");
const namecard = ref("");
const fnameRules = ref([(v: any) => !!v || "Name is required"]);
const catchphraseRules = ref([
  (v: any) => !!v || "catchphrase is required",
  (v: string | any[]) =>
    (v && v.length <= 300) || "catchphrase must be less than 10 characters",
]);
const ifRules = ref([
  (v: any) => !!v || "Please fill this field",
  (v: string | any[]) =>
    (v && v.length <= 5) || "This must be less than 5 characters",
]);
const tfRules = ref([
  (v: any) => !!v || "Please fill this field",
  (v: string | any[]) =>
    (v && v.length <= 5) || "This must be less than 10 characters",
]);
const fbRules = ref([
  (v: any) => !!v || "Please fill this field",
  (v: string | any[]) =>
    (v && v.length <= 5) || "This must be less than 10 characters",
]);
const roleRules = ref([(v: any) => !!v || "Role is required"]);
const contactRules = ref([
  (v: any) => !!v || "Contact is required",
  (v: string | any[]) => (v && v.length == 10) || "Contact must be 10 digits",
]);
const contactfilter = ref([
  {
    phone_no: "(123) 456 789",
    img: "/1.jpg",
    name: "技術者の名前：スタッフ名",
    role: "Designer",
    catchphrase: " キャッチフレーズをここに記載する ",
    tsuraicoins: "12",
    employee_egaocoins: "20",
    namecard: "21",
  },
  {
    phone_no: "(234) 456 789",
    img: "/2.jpg",
    name: "Daniel Kristeen",
    role: "Developer",
    catchphrase: " キャッチフレーズをここに記載 ",
    tsuraicoins: "12",
    employee_egaocoins: "20",
    namecard: "21",
  },
  {
    phone_no: "(345) 456 789",
    img: "/3.jpg",
    name: "Julian Josephs",
    role: "Accountant",
    catchphrase: " キャッチフレーズをここに記載する ",
    tsuraicoins: "12",
    employee_egaocoins: "20",
    namecard: "21",
  },
  {
    phone_no: "(456) 456 789",
    img: "/4.jpg",
    name: "Jan Petrovic",
    role: "Designer",
    catchphrase: " ここにキャッチフレーズを記載します。 ",
    tsuraicoins: "12",
    employee_egaocoins: "20",
    namecard: "21",
  },
  {
    phone_no: "(567) 456 789",
    img: "/5.jpg",
    name: "Leanne Graham",
    role: "HR",
    catchphrase: " ここにキャッチフレーズを記載します。 ",
    tsuraicoins: "12",
    employee_egaocoins: "20",
    namecard: "21",
  },
  {
    phone_no: "(678) 456 789",
    img: "/6.jpg",
    name: "Mrs. Dennis Schulist",
    role: "Designer",
    catchphrase: "  ここにキャッチフレーズを記載します。  ",
    tsuraicoins: "12",
    employee_egaocoins: "20",
    namecard: "21",
  },
  {
    phone_no: "(123) 456 789",
    img: "/1.jpg",
    name: "Kurtis Weissnat",
    role: "Manager",
    catchphrase: "  ここにキャッチフレーズを記載します。  ",
    tsuraicoins: "12",
    employee_egaocoins: "20",
    namecard: "21",
  },
  {
    phone_no: "(234) 456 789",
    img: "/2.jpg",
    name: "Nicholas Runolfsdottir V",
    role: "Chairman",
    catchphrase: "  ここにキャッチフレーズを記載します。  ",
    tsuraicoins: "12",
    employee_egaocoins: "20",
    namecard: "21",
  },
  {
    phone_no: "(345) 456 789",
    img: "/3.jpg",
    name: "技術者の名前：：",
    role: "Designer",
    catchphrase: "  ここにキャッチフレーズを記載します。 ",
    tsuraicoins: "12",
    employee_egaocoins: "20",
    namecard: "21",
  },
]);
const form = ref();

//methods
function addContact() {
  form.value.validate();
  if (form.value.validate(true)) {
    const contact = {
      name: name.value,
      phone_no: phone_no.value,
      role: role.value,
      img: img.value,
      catchphrase: catchphrase.value,
      employee_egaocoins: employee_egaocoins.value,
      tsuraicoins: tsuraicoins.value,
      namecard: namecard.value,
    };
    contactfilter.value.unshift(contact);
    phone_no.value = "";
    name.value = "";
    role.value = "";
    img.value = "";
    catchphrase.value = "";
    employee_egaocoins.value = "";
    tsuraicoins.value = "";
    namecard.value = "";
  }
}

// Computed

const validName = computed(() => {
  return name.value.length > 0;
});
const contactgrids = computed(() => {
  return contactfilter.value.filter(
    (contactgrid) =>
      contactgrid.name
        .toLowerCase()
        .includes(search.value.toLowerCase()) ||
      contactgrid.role.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<template>
  <v-card class="mb-7">
    <v-card-text class="pa-5">
      <v-row justify="space-between">
        <v-col cols="12" lg="4">
          <v-text-field
            v-model="search"
            prepend-inner-icon="mdi-magnify"
            label="検索する"
            variant="outlined"
            size="compact"
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="4" class="justify-end align-center d-flex">
          <v-dialog v-model="dialog" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
              <v-btn color="secondary" v-bind="props">検索</v-btn>
            </template>
            <v-card>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-card-title class="pa-4 bg-secondary">
                  <span class="title text-white">検索</span>
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" sm="12" lg="12">
                      <v-text-field
                        label="フルネーム"
                        :rules="fnameRules"
                        v-model="name"
                        variant="outlined"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" lg="12">
                      <v-text-field
                        type="string"
                        label="会員番号"
                        :rules="contactRules"
                        :counter="10"
                        v-model="phone_no"
                        variant="outlined"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" lg="12">
                      <v-text-field
                        label="役職名"
                        :rules="roleRules"
                        v-model="role"
                        variant="outlined"
                        required
                      ></v-text-field>
                    </v-col>
                    
                  </v-row>
                </v-card-text>
                <v-card-actions class="pa-4 pt-0">
                  <v-spacer></v-spacer>
                  <v-btn color="error" @click="dialog = false">閉じる</v-btn>
                  <v-btn
                    color="success"
                    :disabled="catchphrase == ''"
                    @click="addContact"
                    variant="tonal"
                    >検索する</v-btn
                  >
                </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-card-text>

    <div class="ma-2">
      <p class="ml-2">毎月1回(月末迄)、スタッフに笑顔コインを
        <v-btn color="green" variant="tonal" size="small" rounded="pill" elevation="2">
          <v-icon start icon="mdi-server-plus"></v-icon>
           笑顔コイン付与
        </v-btn>
        ボタンから1枚付与できます。頑張っている人をみんなで応援しましょう。</p>
      <v-chip class="ma-2" close color="info" label text-color="white">
        <v-icon start icon="mdi-database" class="mr-2"></v-icon>
        笑顔コイン獲得枚数
      </v-chip>
      <v-chip class="ma-2" close color="error" label text-color="white">
        <v-icon start icon="mdi-weather-pouring" class="mr-2"></v-icon>
        つら〜いコイン発行枚数
      </v-chip>
      <v-chip class="ma-2" close color="blue" label text-color="white">
        <v-icon start icon="mdi-account-box" class="mr-2"></v-icon>
        名刺発行枚数
      </v-chip>
    </div>

  </v-card>

  <v-row justify="center">
    <v-col
      cols="12"
      sm="6"
      lg="4"
      v-for="(contactgrid, index) in contactgrids"
      :key="index"
    >
      <v-card>
        <v-card-text class="pa-5 text-center">
          <div class="d-flex justify-center">
            <v-avatar size="90">
              <v-img
                :src="'/src/assets/images/users' + contactgrid.img"
                alt="user"
                class="rounded-circle"
              ></v-img>
            </v-avatar>
          </div>
          <h4 class="title h4 mt-3 mb-0">{{ contactgrid.name }}</h4>
          <small class="">役職：{{ contactgrid.role }}</small>

            <!-- 従業員間で行われる毎月の笑顔コイン付与 Dialogにするか、設置しやすい方法を採用。 -->
              <div class="text-center mt-3">
                <v-chip v-if="!chip" close color="green darken-4" elevation="3"
                  @click="chip = true">
                  <v-icon start icon="mdi-server-plus"></v-icon>
                  笑顔コイン付与
                </v-chip>
                <v-chip v-if="chip" class="ma-2" closable 
                  @click:close="chip = false">
                  笑顔コイン付与済
                </v-chip>
              </div>

          <div class="mt-3 pt-3">
            <address class="subtitle-2">
              {{ contactgrid.catchphrase }}
            </address>
          </div>
        </v-card-text>

        <!-- 電話番号は技工所管理者・歯科医療機関管理者・総合管理者の場合のみ表示する。 -->
        <div class="pa-3 blue lighten-4 text-center
          d-flex align-center justify-center"
          v-if="ownerscheck">
          <vue-feather class="mr-2" type="phone"></vue-feather>
          {{ contactgrid.phone_no }}
        </div>

        <v-card-text class="px-4 py-3">
          <v-row>
            <v-col cols="4" class="text-left">
              <v-chip class="ma-2" close color="info" label text-color="white">
                <!-- 笑顔コイン獲得枚数 -->
                <v-icon start icon="mdi-database" class="mr-2"></v-icon>
                {{ contactgrid.employee_egaocoins }}
              </v-chip>
            </v-col>
            <v-col cols="4" class="text-center">
              <v-chip class="ma-2" close color="error" label text-color="white">
                <!-- つらいコイン発行枚数 -->
                <v-icon start icon="mdi-weather-pouring" class="mr-2"></v-icon>
                {{ contactgrid.tsuraicoins }}
              </v-chip>
            </v-col>
            <v-col cols="4" class="text-right">
              <v-chip class="ma-2" close color="blue" label text-color="white">
                <!-- 名刺発行枚数 -->
                <v-icon start icon="mdi-account-box" class="mr-2"></v-icon>
                {{ contactgrid.namecard }}
              </v-chip>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <PaginationRounded2 />
</template>

