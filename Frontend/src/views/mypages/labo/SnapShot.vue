<script setup lang="ts">
  import { ref,reactive } from "vue";
  import BaseTitleImageLabo from "@/mycomponents/BaseTitleImageLabo.vue";
  import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
  import BaseCard from "@/components/BaseCard.vue";
  import FileInputsValidation from "@/mycomponents/FileInputsValidation.vue";
  
  import { useDisplay } from "vuetify";
  
  const page = ref({ title: "スナップショット投稿（::歯科技工所名）" });
  const contents = reactive(
  {
    titleheader: "歯科技技工所",
    subtitle: "Check Your Labo Prolile !",
    url: "/",
    btnname: "+笑顔コイン",
  },
);
  const breadcrumbs = ref([
    {
      text: "マイページ",
      disabled: false,
      to: "/mypages/labo",
    },
    {
      text: "統計データ（::歯科技工所名）",
      disabled: false,
      to: "/mypages/statistics",
    },
    {
      text: "スナップショット投稿",
      disabled: true,
    },
  ]);
  const display = useDisplay();
  </script>
  
  <template>
  <v-container>
    <BaseTitleImageLabo
      :title="page.title"
      :titleheader="contents.titleheader"
      :subtitle="contents.subtitle"
      :url="contents.url"
      :btnname="contents.btnname">
    </BaseTitleImageLabo>
  

    <v-row>
      <v-col cols="12" lg="12" sm="12">
      <BaseCard heading="画像アップロード - Validationあり">
        <FileInputsValidation class="ml-4"></FileInputsValidation>
        <FileInputsValidation class="ml-4"></FileInputsValidation>
        <FileInputsValidation class="ml-4"></FileInputsValidation>
      </BaseCard>
      </v-col>
    </v-row>
  </v-container>
  </template>
  