<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
      >
      氏名登録
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
      >
      名刺掲載情報登録
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">
        職場連携登録
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="4">
        所属学会登録
      </v-stepper-step>

    </v-stepper-header>

    <!--
       <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          color="grey-lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

        <v-btn variant="text">
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey-lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        <v-btn variant="text">
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey-lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Continue
        </v-btn>

        <v-btn variant="text">
          Cancel
        </v-btn>
      </v-stepper-content>
    </v-stepper-items> -->
  </v-stepper>
</template>

<script>
  export default {
    data () {
      return {
        e1: 1,
      }
    },
  }
</script>