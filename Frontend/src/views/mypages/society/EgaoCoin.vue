<script setup lang="ts">
import { ref,reactive } from "vue";
import BaseTitleImageSociety from "@/mycomponents/BaseTitleImageSociety.vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import DiscriptionEgaoCoin from "@/views/mypages/common/DiscriptionEgaoCoin.vue"
import { useDisplay } from "vuetify";

// アクセスしているユーザータイプ
const users = reactive( {usertype: 'society'});
const page = ref({ title: "笑顔コインとは" });
const contents = reactive(
  {
    titleheader: "学会 団体",
    subtitle: "Check Your Members !",
    url: "/login",
    btnname: "ログイン",
  },
);
const display = useDisplay();
</script>

<template>
<!--          -->
<!--  PC用    -->
<!--          -->
<v-container>
  <BaseTitleImageSociety
    :title="page.title"
    :titleheader="contents.titleheader"
    :subtitle="contents.subtitle"
    :url="contents.url"
    :btnname="contents.btnname"
    class="mb-4">
  </BaseTitleImageSociety>

  <v-row>
    <v-col cols="12" sm="12" lg="12" >
      <DiscriptionEgaoCoin usertype="society" />
    </v-col>
  </v-row>
</v-container>
</template>
