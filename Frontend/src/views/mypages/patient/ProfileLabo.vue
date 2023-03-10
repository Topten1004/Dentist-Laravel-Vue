<!-- 　　　　　　　　　　　　　　　　　　　　　 -->
<!-- 患者が表示する医療従事者プロフィール画面 -->
<!--  　　　　　　　　　　　　　　　　　　　　　-->

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImagePatient from "@/mycomponents/BaseTitleImagePatient.vue";
import BaseTitleImageTop from "@/mycomponents/BaseTitleImageTop.vue";
import TheProfileLaboCard from "@/mycomponents/TheProfileLaboCard.vue";
import TheProfileLaboOpenCard from "@/mycomponents/TheProfileLaboOpenCard.vue";
import LaboProfileOpen from "@/mycomponents/LaboProfileOpen.vue";
import TheRevenueCardsLabo1 from "@/mycomponents/labo-components/TheRevenueCardsLabo1.vue";

const display = useDisplay();
const page = ref({ title: "歯科技工所 情報" });

  // アクセスしているユーザータイプ
const users = ref( {usertype: 'patient'});
const contents = reactive(
  {
    titleheader: "患者さん",
    subtitle: "Check Your Productor !",
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
      <BaseTitleImagePatient
        :title="page.title"
        :titleheader="contents.titleheader"
        :subtitle="contents.subtitle"
        :url="contents.url"
        :btnname="contents.btnname"
        class="mb-4">
      </BaseTitleImagePatient>
      <v-row>        
        <v-col cols="12">
          <TheRevenueCardsLabo1 />
        </v-col>
        <v-col cols="12" class="mb-4">
          <TheProfileLaboOpenCard usertype="patient" />
        </v-col>
        <v-col cols="12" sm="12" class="mb-4">
          <LaboProfileOpen usertype="patient" />
        </v-col>
      </v-row>
    </v-container>
  
  <!--          -->
  <!-- スマホ表示 -->
  <!--          -->
  <div v-if="display.smAndDown.value">
    <BaseTitleImagePatient
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
    </BaseTitleImagePatient>

    <v-container>
      <v-row>
        <v-col cols="12" sm="12">
          <TheRevenueCardsLabo1 />
        </v-col>
        <v-col cols="12" sm="12" class="mb-2">
          <TheProfileLaboCard usertype="patient" />
        </v-col>
        <v-col cols="12" sm="12" class="mb-2">
          <LaboProfileOpen  usertype="patient" />
        </v-col>
      </v-row>
    </v-container>
  </div>
  
  </template>
  