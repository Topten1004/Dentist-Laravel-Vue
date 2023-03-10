<template>
    <v-row>
      <v-col>

          
            <v-date-picker
              :is-dark="customizer.darktheme"
              is-expanded
              v-model="date"
              :rows="2"
              :step="1"
            />
          

      </v-col>
    </v-row>
</template>

<script setup lang="ts">
import "v-calendar/dist/style.css";
import { ref } from "vue";
import { useCustomizerStore } from "@/stores/customizer";

const date = ref(new Date());
const timezone = ref("");
const customizer = useCustomizerStore();
const range = ref({
  start: new Date(2022, 0, 1),
  end: new Date(2022, 0, 5),
});
</script>
