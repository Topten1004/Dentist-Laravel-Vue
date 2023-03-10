<script setup lang="ts">
  import { ref,reactive } from "vue";
  import BaseTitleImagePatient from "@/mycomponents/BaseTitleImagePatient.vue";
  import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
  import BaseCard from "@/components/BaseCard.vue";
  import CardInquiry from "../form/CardInquiry.vue";
  import SideBannerCard from "@/mycomponents/SideBannerCard.vue";
  import { useDisplay } from "vuetify";

  const display = useDisplay();
  const page = ref({ title: "各種問合せ" });
  const contents = reactive(
  {
    titleheader: "患者さん",
    subtitle: "About Egaocoin",
    url: "/patient/opinion",
    btnname: "+笑顔コイン",
  },
);
  </script>
  
  <template>
    <!-- PC用表示 -->
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
      <v-col cols="12" sm="12" lg="8" class="d-flex align-items-stretch">
        <BaseCard heading="問合せフォーム">
          <CardInquiry></CardInquiry>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="4">
      <SideBannerCard/>
      </v-col>
    </v-row>
  </v-container>

  <!-- Mobile用表示 -->
  <div v-if="display.smAndDown.value">
    <BaseTitleImagePatient
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname"
      class="mb-4">
    </BaseTitleImagePatient>

    <v-container>
      <v-row>
        <v-col cols="12" sm="12" lg="8" class="d-flex align-items-stretch">
          <BaseCard heading="問合せフォーム">
            <CardInquiry></CardInquiry>
          </BaseCard>
        </v-col>
        <v-col cols="12" sm="12" lg="4">
        <SideBannerCard/>
        </v-col>
      </v-row>
    </v-container>
  </div>
  </template>
  
  
  