<script setup lang="ts">
import { ref, computed } from "vue";
import PaginationRounded2 from "./PaginationRounded2.vue";
const ownerscheck = ref();
const chip = ref(false);

const valid = ref(true);
const dialog = ref(false);
const search = ref("");
const name = ref("");
const engineer_type = ref("");
const img = ref("/1.jpg");
const workspace = ref("");
const employee_egaocoins = ref("");
const tsuraicoins = ref("");
const namecard = ref("");
const fnameRules = ref([(v: any) => !!v || "Name is required"]);
const workspaceRules = ref([
  (v: any) => !!v || "workspace is required",
  (v: string | any[]) =>
    (v && v.length <= 300) || "workspace must be less than 10 characters",
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
const engineer_typeRules = ref([(v: any) => !!v || "engineer_type is required"]);
const contactRules = ref([
  (v: any) => !!v || "Contact is required",
  (v: string | any[]) => (v && v.length == 10) || "Contact must be 10 digits",
]);
const contactfilter = ref([
  {
    img: "/1.jpg",
    name: "スタッフ名：山田太郎",
    engineer_type: "歯科技工士",
    workspace: "AAAA歯科技工所",
    tsuraicoins: "1",
    employee_egaocoins: "20",
    namecard: "21",
  },
  {
    img: "/2.jpg",
    name: "Daniel Kristeen",
    engineer_type: "歯科衛生士",
    workspace: "＊＊＊歯科医院",
    tsuraicoins: "10",
    employee_egaocoins: "20",
    namecard: "21",
  },
  {
    img: "/3.jpg",
    name: "Julian Josephs",
    engineer_type: "歯科医師",
    workspace: "＊＊＊歯科医院",
    tsuraicoins: "9",
    employee_egaocoins: "20",
    namecard: "21",
  },
  {
    img: "/4.jpg",
    name: "Jan Petrovic",
    engineer_type: "歯科技工士",
    workspace: " ＊＊＊歯科医院 ",
    tsuraicoins: "8",
    employee_egaocoins: "20",
    namecard: "21",
  },
  {
    img: "/5.jpg",
    name: "Leanne Graham",
    engineer_type: "歯科衛生士",
    workspace: " ＊＊＊歯科医院 ",
    tsuraicoins: "4",
    employee_egaocoins: "20",
    namecard: "21",
  },
  {
    img: "/6.jpg",
    name: "Mrs. Dennis Schulist",
    engineer_type: "歯科技工士",
    workspace: "  ＊＊＊歯科技工所  ",
    tsuraicoins: "6",
    employee_egaocoins: "20",
    namecard: "21",
  },
  {
    img: "/1.jpg",
    name: "Kurtis Weissnat",
    engineer_type: "歯科医師",
    workspace: " あ＊＊＊歯科医院 ",
    tsuraicoins: "3",
    employee_egaocoins: "20",
    namecard: "21",
  },
  {
    img: "/2.jpg",
    name: "Nicholas Runolfsdottir V",
    engineer_type: "Chairman",
    workspace: "＊＊＊歯科医院",
    tsuraicoins: "7",
    employee_egaocoins: "20",
    namecard: "21",
  },
  {
    img: "/3.jpg",
    name: "技術者の名前：：",
    engineer_type: "Designer",
    workspace: "  ＊＊＊歯科医院 ",
    tsuraicoins: "9",
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
      engineer_type: engineer_type.value,
      img: img.value,
      workspace: workspace.value,
      employee_egaocoins: employee_egaocoins.value,
      tsuraicoins: tsuraicoins.value,
      namecard: namecard.value,
    };
    contactfilter.value.unshift(contact);
    name.value = "";
    engineer_type.value = "";
    img.value = "";
    workspace.value = "";
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
      contactgrid.engineer_type.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<template>
  <v-card class="mb-7">
    <v-card-text class="pa-5">
      <h2>歯科医療技術者の「専任」とは</h2>
    </v-card-text>

    <div class="ma-2">
      <p class="ml-6">
        名刺を受け取った患者さんが担当した歯科医療技術者を「専任」することで、<br>
        1.担当者の意欲向上に寄与します。<br>
        2.継続した治療に役立ちます。<br>
        3.信頼できる歯科医療技術者からのサポートが得られます。<br>
      </p>
      <v-chip class="ma-2" close color="info" label text-color="white">
        <v-icon start icon="mdi-database" class="mr-2"></v-icon>
        今月の笑顔コイン獲得枚数
      </v-chip>
      <v-chip class="ma-2" close color="error" label text-color="white">
        <v-icon start icon="mdi-weather-pouring" class="mr-2"></v-icon>
        今月のつら〜いコイン発行枚数
      </v-chip>
      <v-chip class="ma-2" close color="blue" label text-color="white">
        <v-icon start icon="mdi-account-box" class="mr-2"></v-icon>
        今月の名刺発行枚数
      </v-chip>
    </div>

  </v-card>

  <v-row justify="center">
    <v-col
      cols="12"
      sm="6"
      lg="4"
      v-for="(contactgrid, index) in contactgrids"
      :key="index">
      <v-card>
        <v-card-text class="pa-5 text-center">
          <!-- アバター画像は公開用プロフィールへリンク -->
          <router-link to="/mypages/artisan/profile">
            <div class="d-flex justify-center mb-4">
              <v-avatar size="90">
                <v-img
                  :src="'/src/assets/images/users' + contactgrid.img"
                  alt="user"
                  class="rounded-circle">
                </v-img>
              </v-avatar>
            </div>
          </router-link>
          <small>職種：{{ contactgrid.engineer_type }}</small>
          <h4 class="title h4 mb-0">{{ contactgrid.name }}</h4>
            <div class="pt-3">
              <address class="subtitle-2">
                {{ contactgrid.workspace }}
              </address>
            </div>

            <!-- 専任済・解除ボタン -->
            <div class="text-center mt-3">
                <v-btn v-if="!chip" close color="error" text-color="white" rounded="pill" elevation="2"
                  @click="chip = true">
                  <v-icon start icon="mdi-account-star"></v-icon>
                  専任通知済
                </v-btn>
                <v-chip v-if="chip" class="ma-2" closable rounded="pill" 
                  @click:close="chip = false">
                  貴方の専任にする。
                </v-chip>
              </div>
              <div class="mt-4">
                <v-btn color="primary" text-color="white" rounded="pill" elevation="2">
                  <v-icon start icon="mdi-account-check"></v-icon>
                  詳細へ
                </v-btn>
              </div>
        </v-card-text>

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
