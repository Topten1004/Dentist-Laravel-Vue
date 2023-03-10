<script setup lang="ts">
  import { ref } from "vue";
  import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
  import BaseCard from "@/components/BaseCard.vue";
  import BaseCard2 from "@/views/mypages/common/BaseCard2.vue";
  import CardInquiry from "@/views/mypages/common/form/CardInquiry.vue";
  import SideBannerCard from "@/mycomponents/SideBannerCard.vue";
  import { useDisplay } from "vuetify";

  const display = useDisplay();
  const page = ref({ title: "各種問合せ" });
  const breadcrumbs = ref([
    {
      text: "Home",
      disabled: false,
      to: "/",
    },
    {
      text: "各種問い合わせ",
      disabled: true,
    },
  ]);
  </script>
  
  <template>
    <v-container>

    <BaseBreadcrumb
      :title="page.title"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>

    <v-row>

      <v-col cols="12" sm="12" lg="8" class="d-flex align-items-stretch">
        <BaseCard2 heading="問合せフォーム">
          <CardInquiry></CardInquiry>
        </BaseCard2>
      </v-col>

      <v-col cols="12" sm="12" lg="4">
      <SideBannerCard/>
      </v-col>

    </v-row>

  </v-container>
  </template>
  
  
  