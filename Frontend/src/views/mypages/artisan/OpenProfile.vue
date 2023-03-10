<script setup lang="ts">
import { ref, reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageTop from "@/mycomponents/BaseTitleImageTop.vue";
import EngineerNameCard from "@/mycomponents/artisan-components/EngineerNameCard.vue";
import TheRevenueCardsArtisan from "@/mycomponents/artisan-components/TheRevenueCardsArtisan.vue";
import TheProfileEngineerCard from "@/mycomponents/TheProfileEngineerCard.vue";
import TheProfileCard from "@/mycomponents/TheProfileCard.vue";
import EngineerProfileOpen from "@/mycomponents/EngineerProfileOpen.vue";
import SatisticsGraph from "@/mycomponents/artisan-components/SatisticsGraph.vue";

// アクセスしているユーザータイプ
const users = ref( {usertype: 'artisan'});

const display = useDisplay();
const page = ref({ title: "技工製作 担当" });
const contents = reactive(
  {
    titleheader: "歯科技工士",
    subtitle: "Check Your Productor !",
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
        <BaseTitleImageTop
          :title="page.title"
          :titleheader="contents.titleheader"
          :subtitle="contents.subtitle"
          :url="contents.url"
          :btnname="contents.btnname">
        </BaseTitleImageTop>
          <v-spacer></v-spacer>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="12" class="mb-4">
          <TheProfileCard />
        </v-col>
        <v-col cols="12" class="mb-4">
          <TheRevenueCardsArtisan class="rounded-0" />
        </v-col>
        <v-col cols="12" class="mb-4">
          <SatisticsGraph :usertype="users.usertype" class="rounded-0" elevation="2" />
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

    <BaseTitleImageTop
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
    </BaseTitleImageTop>

  <v-container>
    <v-row>
      <v-col cols="12" class="mb-4">
        <TheProfileCard elevation="2" />
      </v-col>
      <v-col>
        <TheRevenueCardsArtisan />
      </v-col>
      <v-col cols="12" class="mb-4">
        <SatisticsGraph :usertype="users.usertype" elevation="2" />
      </v-col>
      <v-col cols="12" class="mb-4">
        <EngineerProfileOpen :usertype="users.usertype" elevation="2" />
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>
  