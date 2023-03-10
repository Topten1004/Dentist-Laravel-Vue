<script setup lang="ts">
import { ref, reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageLabo from "@/mycomponents/BaseTitleImageLabo.vue";
import ProductDetailPatientTop from "@/mycomponents/ProductDetailPatientTop.vue";
import ProductDetailTopCard from "@/mycomponents/ProductDetailTopCard.vue";
import CommentClinicCards from "@/mycomponents/CommentClinicCards.vue"
import CommentPatientCards from "@/mycomponents/CommentPatientCards.vue"
import CommentLaboCards from "@/mycomponents/CommentLaboCards.vue";
import CommentArtisanCards from "@/mycomponents/CommentArtisanCards.vue";
import CareImages from "@/views/mypages/common/CareImages.vue";
import ProductEngineer from "@/views/mypages/common/ProductEngineer.vue";

const display = useDisplay();

// アクセスしているユーザータイプ
const users = ref( {usertype: 'labo'});

const page = ref({ title: "治療記録 詳細" });
const contents = reactive(
  {
    titleheader: "歯科技工所",
    subtitle: "歯科衛生士による治療記録",
    url: "/patient/opinion",
    btnname: "+笑顔コイン",
  },
);

</script>

<template>
  <!--          -->
  <!-- PC表示    -->
  <!--          -->
  <v-container v-if="display.mdAndUp.value">
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12">
        <BaseTitleImageLabo
          :title="page.title"
          :titleheader="contents.titleheader"
          :subtitle="contents.subtitle"
          :url="contents.url"
          :btnname="contents.btnname"
          class="mb-4">
        </BaseTitleImageLabo>
    </v-col>
    </v-row>
    
    <v-row>
    <v-col cols="12" sm="12" lg="12" md="12" class="mt-3">
      <ProductDetailPatientTop />
    </v-col>
    <v-col cols="12" sm="12" lg="6" md="6" class="mb-8">
      <CareImages />
    </v-col>
    <v-col cols="12" sm="12" lg="6" md="6" class="mb-8">
      <ProductEngineer />
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12" sm="12" lg="12" class="mb-4">
      <CommentPatientCards :usertype="users.usertype" />
    </v-col>

    <!-- //以下は、患者には非表示 -->
    <v-col cols="12" sm="12" lg="6">
      <CommentClinicCards v-if="!(users.usertype === 'patient')" />
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <CommentLaboCards v-if="!(users.usertype === 'patient')" />
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <CommentArtisanCards v-if="!(users.usertype === 'patient')" />
    </v-col>
    <!-- ここまで、患者には非表示 // -->
  </v-row>
</v-container>

<!--          -->
<!-- スマホ表示 -->
<!--          -->
<div v-if="display.smAndDown.value">
  <BaseTitleImageLabo
    :title="page.title"
    :titleheader="contents.titleheader"
    :subtitle="contents.subtitle"
    :url="contents.url"
    :btnname="contents.btnname">
  </BaseTitleImageLabo>

<v-container>
  <v-row>
    <v-col cols="12" sm="12">
      <ProductDetailTopCard />
    </v-col>
    <v-col cols="12" sm="12">
      <CareImages />
    </v-col>
    <v-col cols="12" sm="12" lg="6" md="6">
      <ProductEngineer />
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <CommentPatientCards :usertype="users.usertype" />
    </v-col>

    <!-- //以下は、患者には非表示 -->
    <v-col cols="12" sm="12" lg="6">
      <CommentClinicCards v-if="!(users.usertype === 'patient')" />
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <CommentLaboCards v-if="!(users.usertype === 'patient')" />
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <CommentArtisanCards v-if="!(users.usertype === 'patient')" />
    </v-col>
    <!-- ここまで、患者には非表示 // -->
  </v-row>
</v-container>
</div>

</template>
