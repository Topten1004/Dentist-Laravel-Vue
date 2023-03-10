<script setup lang="ts">

import { ref } from "vue";

const steps = ref({
  items: ['step1', 'step2', 'step3','step4'],
  rules: ['step1_error', 'step2_error', 'step3v_error','step4_error'],
});
// const rules = ref([
//   (v: string | any[]) => v.length <= 4 || "（これはルールのサンプルです。）入力された番号での登録された情報がありません。番号を確かめてご入力ください。",
// ]);

</script>

<!-- ----------------------------------------------------------------------------- -->
<!-- Form Stepper  by cs24 2022.10.10 -->
<!-- ----------------------------------------------------------------------------- -->

 <template>
  <v-stepper>
    <v-stepper-header>

      <v-stepper-step v-model="steps">
        {{ steps.items }}1.Ad unit details
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step>
        {{ steps.rules }}
        <small>Alert message</small>
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step>Ad sizes</v-stepper-step>
    </v-stepper-header>
  </v-stepper>
</template>

