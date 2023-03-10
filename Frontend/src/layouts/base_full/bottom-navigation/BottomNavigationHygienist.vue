<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    menus: [
      { title: 'トップ', icon: 'mdi-home', url: '/mypages/hygienist', bg:'primary' },
      { title: '一覧', icon: 'mdi-web', url: '/mypages/hygienist/productlist', bg:'primary' },
      { title: '撮影', icon: 'mdi-camera-plus-outline', url: '/mypages/hygienist/snapshot', bg:'primary'},
      { title: 'コイン', icon: 'mdi-database-plus', url: '/mypages/hygienist/egaocoin', bg:'primary'},
      { title: '設定', icon: 'mdi-cog-outline', url: '/mypages/hygienist/regist/detail', bg:'primary' }
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