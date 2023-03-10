<script setup lang="ts">
  import { ref } from "vue";
  import { useDisplay } from "vuetify";
  import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
  import BaseCard2 from "@/views/mypages/common/BaseCard2.vue";
  import CardSearch from "@/views/mypages/common/form/CardSearch.vue";
  import SideBannerCard from "@/mycomponents/SideBannerCard.vue";

  const display = useDisplay();
  const page = ref({ title: "歯科医療機関検索（参考資料です）" });
  const breadcrumbs = ref([
    {
      text: "Home",
      disabled: false,
      to: "/",
    },
    {
      text: "検索",
      disabled: true,
      to: "#",
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

      <v-col cols="12" sm="12" lg="8" class="">
        <BaseCard2 heading="歯科医療機関 検索フォーム(参考資料)" class="mb-8">
          <CardSearch />
        </BaseCard2>

        <BaseCard2 heading="検索結果一覧">
          <CardSearch />
        </BaseCard2>
      </v-col>

      <v-col cols="12" sm="12" lg="4">
      <SideBannerCard/>
      </v-col>

    </v-row>

  </v-container>
  </template>
  
  
  