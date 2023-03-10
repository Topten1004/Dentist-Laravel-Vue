<template>
  <div style="background-color: #eef3f7;">
  <v-container class="pt-8 pb-8 mb-8">
    <v-row>
      <v-col
        v-for="(item, i) in stats"
        :key="i"
        cols="12"
        sm="6"
        lg="3"
      >
        <div class="text-center mb-8">
          <div class="text-h2 text-number font-weight-light">{{ item.value }}</div>
          <v-responsive max-width="360" class="mx-auto">
            <div class="text-h5 text-lg-h4">{{ item.title }}</div>
            <div class="font-weight-regular my-2">{{ item.explanation }}</div>
          </v-responsive>
        </div>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stats: [
      //患者が医療従事者宛に発行した笑顔コインの総数。
      // {
      //   title: '笑顔コイン',
      //   value: '4,253',
      //   explanation: '笑顔創造職人が獲得した笑顔コイン。患者さんには「笑顔コイン」を10枚進呈。使い方はこちら。'
      // }, 
      {
        title: '歯科医療機関',
        value: '31,234',
        explanation: 'このシステムを通じて歯科技工士の技術をサポートしている歯科医療機関はこちら'
      }, {
        title: '歯科技工所',
        value: '348',
        explanation: '現在登録済みの歯科技工士が働いている先進的な取り組みをしている歯科技工所はこちら。'
      }, {
        title: '歯科技工士',
        value: '1,283',
        explanation: '現在登録済みの歯科技工士。技術の研鑽に日々努力している技工士さんをお探しの方はこちら'
      }, {
        title: '歯科衛生士',
        value: '1,234',
        explanation: '現在登録済みの歯科衛生士。当システムを採用している歯科医療機関検索はこちら'
      }]
    }
  }
}
</script>
