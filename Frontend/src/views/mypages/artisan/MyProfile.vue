<script setup lang="ts">
import { ref, reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageTop from "@/mycomponents/BaseTitleImageTop.vue";
import EngineerProfile from "@/mycomponents/EngineerProfile.vue"
import EngineerNameCard from "@/mycomponents/artisan-components/EngineerNameCard.vue";
import TheRevenueCardsArtisan from "@/mycomponents/artisan-components/TheRevenueCardsArtisan.vue";
import TheProfileEngineerCard from "@/mycomponents/TheProfileEngineerCard.vue";

const display = useDisplay();
const page = ref({ title: "MyProfile" });

  // アクセスしているユーザータイプ
const users = ref( {usertype: 'artisan'});
const contents = reactive(
  {
    titleheader: "歯科技工士",
    subtitle: "Check Your Products !..",
    url: "/",
    btnname: "+笑顔コイン",
  },
);
const breadcrumbs = ref([
  {
    text: "Home",
    disabled: false,
    to: "../",
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
      <v-col cols="12" sm="12" lg="12" md="12" class="mt-3">
        <TheRevenueCardsArtisan />
      </v-col>
      <v-col cols="12" sm="12" lg="4" md="5" class="mb-8">
        <TheProfileEngineerCard />
      </v-col>
      <v-col cols="12" sm="12" lg="8" md="7" class="mb-8">
        <EngineerProfile :usertype="users.usertype" />
        <EngineerNameCard :usertype="users.usertype" class="mt-8" />
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
      :btnname="contents.btnname"
      class="mb-4">
    </BaseTitleImageTop>

    <v-container>
      <v-row>
        <v-col cols="12" sm="12">
          <TheRevenueCardsArtisan />
        </v-col>
        <v-col cols="12" sm="12" class="mb-4">
          <TheProfileEngineerCard />
        </v-col>
        <v-col cols="12" sm="12" class="mb-4">
          <EngineerProfile :usertype="users.usertype" />
        </v-col>
        <v-col cols="12" sm="12" class="mb-4">
          <EngineerNameCard :usertype="users.usertype" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
  