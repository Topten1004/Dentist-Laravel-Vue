<script setup lang="ts">
import { ref,reactive } from "vue";
import { useDisplay } from "vuetify";
import BaseTitleImageDentist from "@/mycomponents/BaseTitleImageDentist.vue";
import SnapShotCare from "@/views/mypages/common/SnapShotCare.vue";

const display = useDisplay();
const page = ref({ title: "口腔内画像投稿" });
const contents = reactive(
  {
    titleheader: "歯科医師",
    subtitle: "Check Your Dtata !",
    url: "/mypages/dentist/carelist",
    btnname: "治療画像一覧",
  },
);
</script>
  
  <template>
    <!-- PC用表示 -->
  <v-container v-if="display.mdAndUp.value">
    <BaseTitleImageDentist
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname"
      class="mb-4">
    </BaseTitleImageDentist>

      <v-row>
        <v-col cols="12" lg="12" sm="12">
        <SnapShotCare></SnapShotCare>
        </v-col>
      </v-row>

    </v-container>

  
<!-- Mobile用表示 -->
<div v-if="display.smAndDown.value">
  <BaseTitleImageDentist
    :title="page.title"
    :titleheader="contents.titleheader"
    :subtitle="contents.subtitle"
    :url="contents.url"
    :btnname="contents.btnname">
  </BaseTitleImageDentist>

  <v-container>
    <div class="mx-md-4">
      <v-row>
        <v-col cols="12" lg="12" sm="12">
        <SnapShotCare></SnapShotCare>
        </v-col>
      </v-row>
    </div>
  </v-container>
</div>

  </template>