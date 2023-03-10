<script setup lang="ts">
import { ref, reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageDentist from "@/mycomponents/BaseTitleImageDentist.vue";
import TheProfileCard from "@/mycomponents/TheProfileCard.vue";
import EngineerProfileOpen from "@/mycomponents/EngineerProfileOpen.vue";
import SatisticsGraph from "@/mycomponents/dentist-components/SatisticsGraph.vue";
import TheRevenueCardsDentist from "@/mycomponents/dentist-components/TheRevenueCardsDentist.vue";

const display = useDisplay();
const page = ref({ title: "プロフィール" });

  // アクセスしているユーザータイプ
const users = ref( {usertype: 'dentist'});
const contents = reactive(
  {
    titleheader: "歯科医師",
    subtitle: "Check Your Dentsit !",
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
          <BaseTitleImageDentist
            :title="page.title"
            :titleheader="contents.titleheader"
            :subtitle="contents.subtitle"
            :url="contents.url"
            :btnname="contents.btnname"
            class="mb-0">
          </BaseTitleImageDentist>
      </v-col>
      </v-row>
      
    <v-row>
      <v-col cols="12" class="mb-4">
        <TheProfileCard elevation="2" />
      </v-col>
      <v-col cols="12" class="mb-4">
        <TheRevenueCardsDentist />
      </v-col>
      <v-col cols="12" class="mb-4">
        <SatisticsGraph :usertype="users.usertype" elevation="2" />
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
    <BaseTitleImageDentist
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
    </BaseTitleImageDentist>

  <v-container>
    <v-row>
      <v-col cols="12" class="mb-4">
        <TheProfileCard elevation="2" />
      </v-col>
      <v-col cols="12" class="mb-4">
        <TheRevenueCardsDentist />
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
  