<!--                                   -->
<!-- 患者が表示する医療従事者プロフィール画面 -->
<!--                                   -->
<script setup lang="ts">
import { ref, reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImagePatient from "@/mycomponents/BaseTitleImagePatient.vue";
import BaseTitleImageTop from "@/mycomponents/BaseTitleImageTop.vue";
import EngineerNameCard from "@/mycomponents/artisan-components/EngineerNameCard.vue";
import TheRevenueCardsArtisan from "@/mycomponents/artisan-components/TheRevenueCardsArtisan.vue";
import TheProfileEngineerCard from "@/mycomponents/TheProfileEngineerCard.vue";
import TheProfileCard from "@/mycomponents/TheProfileCard.vue";
import EngineerProfileOpen from "@/mycomponents/EngineerProfileOpen.vue";

const display = useDisplay();
const page = ref({ title: "治療・製作 担当者情報" });
const contents = reactive(
  {
    titleheader: "患者さん",
    subtitle: "Check Your Productor !",
    url: "/patient/opinion",
    btnname: "+笑顔コイン",
  },
);

// アクセスしているユーザータイプ
const users = ref( {usertype: 'patient'});

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
      <v-col cols="12" sm="12" lg="5" md="5" class="mb-8">
        <TheProfileCard />
      </v-col>
      <v-col cols="12" sm="12" lg="7" md="7" class="mb-8">
        <EngineerProfileOpen :usertype="users.usertype" />
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
          <v-card elevation="2">
            <BaseTitleImageTop
              :title="page.title"
              :subtitle="contents.subtitle"
              :url="contents.url"
              :btnname="contents.btnname">
            </BaseTitleImageTop>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" class="mb-4">
          <TheProfileCard />
        </v-col>
        <v-col cols="12" sm="12" class="mb-4">
          <EngineerProfileOpen :usertype="users.usertype" />
        </v-col>
      </v-row>
    </v-container>
  </div>
  
  </template>
  