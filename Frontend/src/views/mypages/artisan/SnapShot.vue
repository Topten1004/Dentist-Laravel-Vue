<script setup lang="ts">
  import { ref, reactive } from "vue";
  import { useDisplay } from "vuetify";
import SnapShotDevice from "@/views/mypages/common/SnapShotDevice.vue";
import BaseTitleImageTop from "@/mycomponents/BaseTitleImageTop.vue";

const display = useDisplay();
const page = ref({ title: "画像投稿" });
const contents = reactive(
  {
    titleheader: "歯科技工士",
    subtitle: "Take Your Products Picture !",
    url: "/mypages/artisan/accesscodelist",
    btnname: "画像一覧へ",
  },
);
</script>
  
  <template>
  <!--          -->
  <!-- PC表示    -->
  <!--          -->
  <v-container v-if="display.mdAndUp.value">
    <div>
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
        <v-col cols="12" lg="12" sm="12">
        <SnapShotDevice></SnapShotDevice>
        </v-col>
      </v-row>
    </div>
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
        <v-col cols="12" lg="12" sm="12">
          <SnapShotDevice></SnapShotDevice>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

  