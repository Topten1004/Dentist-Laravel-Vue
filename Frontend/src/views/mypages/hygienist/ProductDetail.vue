<script setup lang="ts">
import { ref, reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageHygienist from "@/mycomponents/BaseTitleImageHygienist.vue";
import BaseTitleImageTop from "@/mycomponents/BaseTitleImageTop.vue";
import ProductDetailTopCard from "@/mycomponents/ProductDetailTopCard.vue";
import CommentClinicCards from "@/mycomponents/CommentClinicCards.vue"
import CommentDentistCards from "@/mycomponents/CommentDentistCards.vue"
import CommentPatientCards from "@/mycomponents/CommentPatientCards.vue"
import CommentLaboCards from "@/mycomponents/CommentLaboCards.vue";
import CommentArtisanCards from "@/mycomponents/CommentArtisanCards.vue";
import CommentHygienistCards from "@/mycomponents/CommentHygienistCards.vue";
import ProductImages from "../common/ProductImages.vue";
import ProductEngineer2 from "../common/ProductEngineer2.vue";

const display = useDisplay();

// アクセスしているユーザータイプ
const users = ref( {usertype: 'hygienist'});

const page = ref({ title: "技工装置 詳細" });
const contents = reactive(
  {
    titleheader: "歯科衛生士",
    subtitle: "Check Your Products !",
    url: "/mypages/hygienist/egaocoin",
    btnname: "笑顔コイン",
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
        <BaseTitleImageHygienist
          :titleheader="contents.titleheader"
          :title="page.title"
          :subtitle="contents.subtitle"
          :url="contents.url"
          :btnname="contents.btnname"
          class="mb-4">
        </BaseTitleImageHygienist>
      </v-col>
    </v-row>
    
    <v-row>
      <v-col cols="12" sm="12" lg="12" md="12" class="mt-3">
        <ProductDetailTopCard />
      </v-col>
      <v-col cols="12" sm="12" lg="6" md="6" class="mb-4">
        <ProductImages />
      </v-col>
      <v-col cols="12" sm="12" lg="6" md="6" class="mb-4">
        <ProductEngineer2 />
      </v-col>
    </v-row>
    <v-divider class="mt-4 mb-8"></v-divider>
    <v-row>
      <v-col cols="12" class="mb-4">
        <CommentPatientCards :usertype="users.usertype" />
      </v-col>
      <v-col cols="12" class="mb-4">
        <CommentHygienistCards :usertype="users.usertype" class="mb-6" />
        <CommentClinicCards :usertype="users.usertype" class="mb-6" />
        <CommentDentistCards :usertype="users.usertype" class="mb-6" />
        <CommentLaboCards :usertype="users.usertype" class="mb-6" />
        <CommentArtisanCards :usertype="users.usertype" class="mb-6" />
      </v-col>
    </v-row>
</v-container>


<!--          -->
<!-- スマホ表示 -->
<!--          -->
<div v-if="display.smAndDown.value">
  <BaseTitleImageHygienist
    :titleheader="contents.titleheader"
    :title="page.title"
    :subtitle="contents.subtitle"
    :url="contents.url"
    :btnname="contents.btnname">
  </BaseTitleImageHygienist>

  <v-container>
    <v-row>
      <v-col cols="12" sm="12">
        <ProductDetailTopCard />
      </v-col>
      <v-col cols="12" sm="12" lg="8" class="mb-8">
        <ProductImages />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" lg="6" class="mb-4">
        <ProductEngineer2 />
      </v-col>
      <v-col cols="12" sm="12" lg="6" class="mb-4">
        <CommentPatientCards :usertype="users.usertype" />
      </v-col>
      <v-col cols="12" sm="12" lg="6" class="mb-4">
        <CommentHygienistCards :usertype="users.usertype" class="mb-6" />
        <CommentClinicCards :usertype="users.usertype" class="mb-6" />
        <CommentDentistCards :usertype="users.usertype" class="mb-6" />
        <CommentLaboCards :usertype="users.usertype" class="mb-6" />
        <CommentArtisanCards :usertype="users.usertype" class="mb-6" />
      </v-col>
    </v-row>
  </v-container>
</div>

</template>
