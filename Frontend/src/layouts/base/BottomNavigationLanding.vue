<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    menus: [
      { title: 'Top', icon: 'mdi-home', url: '/patient', bg:'primary' },
      { title: 'ログイン', icon: 'mdi-login', url: '/login', bg:'primary' },
      { title: 'アンケート', icon: 'mdi-comment-text', url: '/patient/opinion', bg:'primary' },
      { title: '笑顔コイン', icon: 'mdi-emoticon', url: '/egaocoin', bg:'primary' }
    ]
  })
}
</script>


<template>
<!-- ボトムナビゲーション ::背景の設定ができない？ -->
  <v-bottom-navigation app class="px-2">
    <v-btn v-for="menu in menus" :key="menu.title" :to="menu.url">
      <v-icon :color="menu.bg">{{ menu.icon }}</v-icon>
      <span>{{ menu.title }}</span>
    </v-btn>
  </v-bottom-navigation>
</template>