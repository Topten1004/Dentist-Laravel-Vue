<template>
  <v-card>
    <v-card-text class="pa-5">
      <h2 class="title text-h6 font-weight-medium">Recent Comments</h2>
      <h5 class="subtitle">Latest Comments on users from Material</h5>
    </v-card-text>
    <v-card-text class="pa-0">
      <div class="d-md-flex align-items-center">
        <perfect-scrollbar style="height: 550px">
          <div
            v-for="comment in comments"
            :comment="comment"
            :key="comment.username"
          >
            <!-- Comment Row -->
            <div
              class="d-flex flex-row comment-row mt-0 pa-3"
              :class="[comment.activeClass]"
            >
              <div class="pa-2">
                <v-avatar size="50">
                  <img
                    :src="`/assets/images/users/${comment.img}`"
                    alt="user"
                    width="50"
                  />
                </v-avatar>
              </div>
              <div class="comment-text w-100 pa-3">
                <div class="d-flex align-center">
                  <h3 class="title">{{ comment.username }}<br /></h3>
                  <v-chip
                    class="ml-2"
                    :color="comment.badgebg"
                    size="x-small"
                    >{{ comment.status }}</v-chip
                  >
                </div>
                <span class="d-block my-2 subtitle-2 font-weight-regular">{{
                  comment.desc
                }}</span>
                <div class="d-flex">
                  <v-btn size="small" :color="comment.badgebg">Read More</v-btn>
                  <small class="text-muted ml-auto">{{ comment.date }}</small>
                </div>
              </div>
            </div>
          </div>
        </perfect-scrollbar>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const comments = ref([
  {
    img: "/1.jpg",
    activeClass: "",
    username: "James Anderson",
    desc: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    date: "April 14, 2022",
    badgebg: "secondary",
    status: "Pending",
  },
  {
    img: "/2.jpg",
    activeClass: "active",
    username: "Michael Jorden",
    desc: "Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.",
    date: "April 14, 2022",
    badgebg: "success",
    status: "Approved",
  },
  {
    img: "/3.jpg",
    activeClass: "",
    username: "Johnathan Doeting",
    desc: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    date: "April 14, 2022",
    badgebg: "error",
    status: "Rejected",
  },
  {
    img: "/4.jpg",
    activeClass: "",
    username: "James Anderson",
    desc: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    date: "April 14, 2022",
    badgebg: "info",
    status: "Pending",
  },
]);
const props = defineProps({
  comment: Object,
});
</script>
