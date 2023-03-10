<script setup lang="ts">
import { ref, reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageDentist from "@/mycomponents/BaseTitleImageDentist.vue";
import BaseTitleImageTop from "@/mycomponents/BaseTitleImageTop.vue";
import EngineerProfile from "@/mycomponents/EngineerProfile.vue"
import EngineerNameCard from "@/mycomponents/artisan-components/EngineerNameCard.vue";
import TheRevenueCardsArtisan from "@/mycomponents/artisan-components/TheRevenueCardsArtisan.vue";
import TheProfileEngineerCard from "@/mycomponents/TheProfileEngineerCard.vue";

const display = useDisplay();
const page = ref({ title: "MyProfile" });
const contents = reactive(
  {
    titleheader: "歯科医師",
    subtitle: "Check Your works !",
    url: "/mypages/dentist/egaocoin",
    btnname: "笑顔コイン",
  },
);
  // アクセスしているユーザータイプ
const users = ref( {usertype: 'dentist'});

</script>
  
  <template>
    <!--          -->
    <!-- PC表示    -->
    <!--          -->
    <v-container v-if="display.mdAndUp.value">
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="12">
          <BaseTitleImageDentist
            :title="page.title"
            :titleheader="contents.titleheader"
            :subtitle="contents.subtitle"
            :url="contents.url"
            :btnname="contents.btnname"
            class="mb-4">
          </BaseTitleImageDentist>
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
    <BaseTitleImageDentist
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
    </BaseTitleImageDentist>

  <v-container>
    <v-row>
      <v-col cols="12" sm="12" class="mb-4">
        <TheProfileEngineerCard />
      </v-col>
      <v-col cols="12" sm="12">
          <TheRevenueCardsArtisan />
      </v-col>

      <v-col cols="12" sm="12">
        <EngineerProfile :usertype="users.usertype" />
      </v-col>
      <v-col cols="12" sm="12">
        <EngineerNameCard :usertype="users.usertype" />
      </v-col>
    </v-row>
  </v-container>
  </div>
  
  </template>
  