<script setup lang="ts">
import { ref, reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageLabo from "@/mycomponents/BaseTitleImageLabo.vue";
import TheRevenueCardsArtisan from "@/mycomponents/artisan-components/TheRevenueCardsArtisan.vue";
import TheProfileCard from "@/mycomponents/TheProfileCard.vue";
import LaboProfileOpen from "@/mycomponents/LaboProfileOpen.vue";
import SatisticsGraph from "@/mycomponents/artisan-components/SatisticsGraph.vue";
import TheRevenueCardsLabo1 from "@/mycomponents/labo-components/TheRevenueCardsLabo1.vue";

const display = useDisplay();
const page = ref({ title: "製作担当企業" });

  // アクセスしているユーザータイプ
const users = ref( {usertype: 'labo'});
const contents = reactive(
  {
    titleheader: "歯科技技工所",
    subtitle: "Check Your Productor's Labo !",
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
            :btnname="contents.btnname">
          </BaseTitleImageLabo>
        <v-spacer></v-spacer>
      </v-col>
      </v-row>
      
    <v-row>
      <v-col cols="12" class="mb-4">
        <TheProfileCard />
      </v-col>

      <v-col cols="12" class="mb-4">
        <LaboProfileOpen :usertype="users.usertype" />
      </v-col>

      <v-col cols="12" class="mb-4">
        <TheRevenueCardsLabo1 />
      </v-col>
      <v-col cols="12" class="mb-4">
        <SatisticsGraph :usertype="users.usertype" />
      </v-col>

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
      <v-col cols="12" class="mb-4">
        <TheProfileCard />
      </v-col>

      <v-col cols="12" class="mb-4">
        <LaboProfileOpen :usertype="users.usertype" />
      </v-col>

      <v-col>
        <TheRevenueCardsLabo1 />
      </v-col>
      <v-col cols="12" class="mb-4">
        <SatisticsGraph :usertype="users.usertype" />
      </v-col>

    </v-row>
  </v-container>
  </div>
  
  </template>
  