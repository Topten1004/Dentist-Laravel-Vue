<script setup lang="ts">
import { ref, reactive } from "vue";
import { useDisplay } from "vuetify";
import TheProfileCard from "@/mycomponents/TheProfileCard.vue";
import EngineerProfileOpen from "@/mycomponents/EngineerProfileOpen.vue";
import SatisticsGraph from "@/mycomponents/artisan-components/SatisticsGraph.vue";
import BaseTitleImageHygienist from "@/mycomponents/BaseTitleImageHygienist.vue";
import TheRevenueCardsHygienist from "@/mycomponents/hygienist-components/TheRevenueCardsHygienist.vue";

const display = useDisplay();
const page = ref({ title: "歯科衛生士 公開情報" });


  // アクセスしているユーザータイプ
const users = ref( {usertype: 'hygienist'});
const contents = reactive(
  {
    titleheader: "歯科衛生士",
    subtitle: "Check Your Hygienist !",
    url: "/patient/opinion",
    btnname: "+笑顔コイン",
  },
);
const breadcrumbs = ref([
  {
    text: "Home",
    disabled: false,
    to: "/",
  },
  {
    text: "プロフィール",
    disabled: true,
  },
]);
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
        <v-spacer></v-spacer>
      </v-col>
      </v-row>
      
    <v-row>
      <v-col cols="12" class="mb-4">
        <TheProfileCard class="rounded-0" elevation="2" />
      </v-col>
      <v-col cols="12" class="mb-4">
        <TheRevenueCardsHygienist />
      </v-col>
      <v-col cols="12" class="mb-4">
        <SatisticsGraph :usertype="users.usertype" />
      </v-col>
      <v-col cols="12" class="mb-4">
        <EngineerProfileOpen :usertype="users.usertype" />
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
      <v-col cols="12" class="mb-4">
        <TheProfileCard elevation="2" />
      </v-col>
      <v-col>
        <TheRevenueCardsHygienist />
      </v-col>
      <v-col cols="12" class="mb-4">
        <SatisticsGraph :usertype="users.usertype" elevation="2" />
      </v-col>
      <v-col cols="12" class="mb-4 rounded-0">
        <EngineerProfileOpen :usertype="users.usertype" elevation="2" />
      </v-col>
    </v-row>
  </v-container>
  </div>
  
  </template>
  