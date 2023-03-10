<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageClinic from "@/mycomponents/BaseTitleImageClinic.vue";
import BaseCard2 from "../common/BaseCard2.vue";
import RegistClinicDetail from "../common/form/RegistClinicDetail.vue";


const display = useDisplay();
const page = ref({ title: "2.詳細登録" });
const contents = reactive(
  {
    titleheader: "歯科医療機関",
    subtitle: "Check Your Details !..",
    url: "/mypages/clinic/regist/societies",
    btnname: "次へ",
  },
);

</script>


<template>
  <v-container v-if="display.mdAndUp.value">
    <BaseTitleImageClinic
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname"
      class="mb-4">
    </BaseTitleImageClinic>

  <v-row justify="center">
    <v-col cols="12" lg="12" sm="12" class="d-flex align-items-stretch">
      <BaseCard2 heading="2.歯科医療機関 詳細登録">
        <RegistClinicDetail />
      </BaseCard2>
    </v-col>
  </v-row>
  </v-container>

<!-- Mobile用 -->
  <div v-if="display.smAndDown.value">
    <BaseTitleImageClinic
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
    </BaseTitleImageClinic>

    <v-container>
        <v-row justify="center">
          <v-col cols="12" lg="12" sm="12" class="d-flex align-items-stretch no-ellipsis">
            <BaseCard2 heading="歯科医療機関 情報 詳細登録" class="no-ellipsis">
              <RegistClinicDetail />
            </BaseCard2>
          </v-col>
      </v-row>
    </v-container>
  </div>
  
</template>


