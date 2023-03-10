<script setup lang="ts">
import { ref } from "vue";
const messages = ref([
  {
    title: "You have 4 pending tasks",
    avatar: "1.jpg",
    avatarstatus: "success",
    desc: "To: Pawan deep",
  },
  {
    title: "Server #1 overloaded",
    avatar: "2.jpg",
    avatarstatus: "error",
    desc: "To: pamela",
  },
  {
    title: "New order received.",
    avatar: "3.jpg",
    avatarstatus: "warning",
    desc: "To: Arijit.com",
  },
  {
    title: "New user registered",
    avatar: "4.jpg",
    avatarstatus: "success",
    desc: "To: kat@gmail.com",
  },
]);
function href() {
  return undefined;
}
</script>
<template>
  <v-card>
    <v-card-text class="pb-1">
      <h2 class="title">Feeds</h2>
      <h5 class="font-weight-light">Checkout the new feeds</h5>
    </v-card-text>
    <v-list>
      <perfect-scrollbar style="height: 300px">
        <v-list-item v-for="(item, i) in messages" :key="i" @click="href">
          <v-list-item-title class="px-4">
            <div class="d-flex align-center py-3">
              <div class="mr-3">
                <v-badge
                  bordered
                  bottom
                  :color="item.avatarstatus"
                  dot
                  offset-x="0"
                  offset-y="0"
                >
                  <v-avatar size="40">
                    <img
                      :src="`/assets/images/users/${item.avatar}`"
                      :alt="item.title"
                      width="40"
                    />
                  </v-avatar>
                </v-badge>
              </div>
              <div class="mx-3">
                <h4 class="font-weight-medium">{{ item.title }}</h4>
                <h6 class="truncate-text">{{ item.desc }}</h6>
              </div>
            </div>
          </v-list-item-title>
        </v-list-item>
      </perfect-scrollbar>
    </v-list>
  </v-card>
</template>
