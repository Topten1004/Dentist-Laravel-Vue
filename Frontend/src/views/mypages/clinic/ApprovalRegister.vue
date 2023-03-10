<script setup lang="ts">
import { ref, computed } from "vue";
import { useDisplay } from "vuetify";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import ApprovalStaffsCard from "../common/ApprovalStaffsCard.vue";

const page = ref({ title: "承認完了画面" });
const display = useDisplay();

</script>


<template>
  <v-container>

  <BaseBreadcrumb
    v-if="display.smAndUp.value"
    :title="page.title"
  ></BaseBreadcrumb>

    <v-row class="d-flex justify-center">
      <v-col cols="12" lg="6">

        <ApprovalStaffsCard />
      
      </v-col>
    </v-row>
  </v-container>
</template>