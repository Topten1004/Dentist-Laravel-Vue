<script setup lang="ts">
  import { ref } from "vue";
  import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
  import BaseCard from "@/components/BaseCard.vue";
  import CardInquiry from "@/views/mypages/common/form/CardInquiry.vue";
  //import TheProfileCard from "@/mycomponents/TheProfileCard.vue";
  import { useDisplay } from "vuetify";

  const display = useDisplay();
  const page = ref({ title: "各種問合せ" });
  const breadcrumbs = ref([
    {
      text: "Home",
      disabled: false,
      to: "../",
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
      <v-col cols="12" lg="9" class="d-flex align-items-stretch">
        <BaseCard heading="問合せフォーム">
          <CardInquiry></CardInquiry>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="3" v-if="display.mdAndUp.value">
      <!-- <TheProfileCard></TheProfileCard> -->
      </v-col>

    </v-row>
  </v-container>
  </template>
  
  
  