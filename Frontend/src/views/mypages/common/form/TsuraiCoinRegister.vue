<script>
  export default {
    data: () => ({
      tpm: 0,
      interval: null,
      isPlaying: false,
    }),

    computed: {
      color () {
        if (this.tpm < 2.5) return 'indigo'
        if (this.tpm < 5.0) return 'teal'
        if (this.tpm < 7.5) return 'green'
        if (this.tpm < 9.0) return 'orange'
        return 'red'
      },
      animationDuration () {
        return `${10 / this.tpm}s`
      },
    },
    // 注意：マイナスの時、０以下は設定しない。小数点以下は１桁までに制御する。例：1.9　無理なら整数でも可　← とりあえずstepを１に設定した。
    methods: {
      decrement () {
        this.tpm--
      },
      increment () {
        this.tpm++
      },
      toggle () {
        this.isPlaying = !this.isPlaying
      },
    },
  }
</script>

<template>
  <v-card
    class="mx-auto"
    max-width="600"
    elevation="2"
    id="regist"
  >
    <v-toolbar
      flat
      dense
      color="purple darken-4"
    >
      <v-toolbar-title>
        <span class="text-subheading">今月のつら〜いコイン登録</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <div class="mb-2">
            従業員や経営担当者は、毎月登録してください。登録された数値は、職場内や取引先で共有され業務改善に活用します。登録操作を行わない場合は、初期値の０となります。一度登録すると変更できません。
          </div>
      <v-row
        class="mb-4"
        justify="space-between"
      >
        <v-col class="text-center">
          <v-fade-transition>
            <v-avatar
              :color="color"
              :style="{
                animationDuration: animationDuration
              }"
              class="mb-1 v-avatar--metronome"
              size="60">
                <v-icon size="50" dark color="white">
                  mdi-emoticon-dead
                </v-icon>
            </v-avatar>
          </v-fade-transition>
        </v-col>
        <v-col class="text-right">
          <!-- 注意：stepを0.1にすると、小数点以下の桁数が増える場合がある。どのように制御すべきか要検討。とりあえずstepは１にしておく。 -->
          <span
            class="text-h2 font-weight-light"
            v-text="tpm"
          ></span>
          <span class="subheading font-weight-light mr-1">TPM(辛/月)</span>
        </v-col>
      </v-row>

      <v-slider
        v-model="tpm"
        :color="color"
        track-color="grey"
        min="0"
        max="10.0"
        :step="1"
      >
        <template v-slot:prepend>
          <v-btn
            v-if="tpm > 1"
            size="small"
            variant="text"
            icon="mdi-minus"
            :color="color"
            @click="decrement"
          ></v-btn>
        </template>

        <template v-slot:append>
          <v-btn
            v-if="tpm < 10"
            size="small"
            variant="text"
            icon="mdi-plus"
            :color="color"
            @click="increment"
          ></v-btn>
        </template>
      </v-slider>
      <div class="d-flex justify-center">
        <!-- Dialogで登録終了表示する。 -->
        <v-dialog transition="dialog-top-transition">
          <template v-slot:activator="{ props }">
            <!-- 毎月登録する。登録済の場合は、 disabled -->
            <v-btn v-bind="props" class="mt-4" color="pink darken-4" size="x-large">
              今月は、この値で登録する。
            </v-btn>
          </template>

          <template v-slot:default="{ isActive }">
              <div class="d-flex justify-center">
              <v-card width="400">
                <v-img
                  class=""
                  height="160"
                  src="https://smile24.org/src/assets/images/background/tsuraicard1.jpg"
                  cover
                >
                  <v-card-title>つら〜いコイン登録完了</v-card-title>
                </v-img>
                <!-- <v-toolbar color="secondary" class="px-4">つら〜いコイン登録完了</v-toolbar> -->
                <v-card-item class="d-flex justify-center">
                  <div class="text-h3 pa-12">頑張ったね!</div>
                  <div class="d-flex justify-center">
                    <v-btn size="x-large"
                    icon="mdi-thumb-up"
                    color="success"
                    ></v-btn>
                  </div>
                </v-card-item>
                <v-card-actions class="justify-end">
                  <v-btn variant="flat" @click="isActive.value = false" color="error">
                    <v-icon icon="mdi-close"></v-icon>
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
              </div>
          </template>
        </v-dialog>

      </div>
    </v-card-text>
  </v-card>
</template>


<style>
  @keyframes metronome-example {
    from {
      transform: scale(.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-name: metronome-example;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
</style>