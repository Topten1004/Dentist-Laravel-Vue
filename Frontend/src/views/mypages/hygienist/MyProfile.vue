<script setup lang="ts">
import { ref, reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageHygienist from "@/mycomponents/BaseTitleImageHygienist.vue";
import EngineerProfile from "@/mycomponents/EngineerProfile.vue"
import EngineerNameCard from "@/mycomponents/EngineerNameCard.vue";
import TheRevenueCardsHygienist from "@/mycomponents/hygienist-components/TheRevenueCardsHygienist.vue";
import TheProfileEngineerCard from "@/mycomponents/TheProfileEngineerCard.vue";

const display = useDisplay();
const page = ref({ title: "プロフィール（個人版）" });

  // アクセスしているユーザータイプ
const users = ref( {usertype: 'hygienist'});
const contents = reactive(
  {
    titleheader: "歯科衛生士",
    subtitle: "Check Your Products !..",
    url: "/mypages/hygienist/egaocoin",
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
        <TheRevenueCardsHygienist />
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
    <BaseTitleImageHygienist
      :titleheader="contents.titleheader"
      :title="page.title"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
    </BaseTitleImageHygienist>

    <v-container>
      <v-row>
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
  