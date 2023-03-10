<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    menus: [
      { title: 'マイページ', icon: 'mdi-home', url: '/mypages/clinic', bg:'primary'},
      { title: '一覧', icon: 'mdi-web', url: '/mypages/clinic/productlist', bg:'primary' },
      // { title: '撮影', icon: 'mdi-camera-plus-outline', url: '/mypages/clinic/snapshot', bg:'primary'},
      { title: 'コイン', icon: 'mdi-database-plus', url: '/mypages/clinic/egaocoin', bg:'primary' },
      { title: '設定', icon: 'mdi-cog-outline', url: '/mypages/clinic/regist/detail', bg:'primary' }
    ]
  })
}
</script>


<template>
<!-- ボトムナビゲーション -->
  <v-bottom-navigation app class="px-2">
    <v-btn v-for="menu in menus" :key="menu.title" :to="menu.url">
      <v-icon :color="menu.bg">{{ menu.icon }}</v-icon>
      <span>{{ menu.title }}</span>
    </v-btn>
  </v-bottom-navigation>
</template>