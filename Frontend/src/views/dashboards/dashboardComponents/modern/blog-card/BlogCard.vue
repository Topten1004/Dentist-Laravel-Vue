<script setup lang="ts"></script>

<template>
  <v-card>
    <img style="width: 100%" src="@/assets/images/background/blog-bg-2x.jpg" />
    <v-card-text>
      <h3 class="font-weight-medium d-flex align-center">
        <vue-feather type="clock" size="20" class="mr-1"></vue-feather>
        22 March, 2021
      </h3>
      <h5 class="title font-weight-medium mb-2 mt-5 text-h6">
        Super awesome, Vue 3 is coming soon!
      </h5>
      <v-chip class="mr-2" label size="small" color="primary"> Medium </v-chip>
      <v-chip class="mr-2" label size="small" color="error"> Low </v-chip>
      <v-divider class="mt-7"></v-divider>
      <div class="d-flex align-center mt-4">
        <v-avatar size="40">
          <img width="40" src="@/assets/images/users/1.jpg" alt="John" />
        </v-avatar>
        <v-avatar size="40" class="ml-2">
          <img width="40" src="@/assets/images/users/2.jpg" alt="John" />
        </v-avatar>
        <v-avatar size="40" class="ml-2">
          <img width="40" src="@/assets/images/users/3.jpg" alt="John" />
        </v-avatar>
        <div class="ml-auto">
          <v-btn icon color="inherit">
            <vue-feather
              type="message-circle"
              class="text-grey-darken-1"
              size="22"
            ></vue-feather>
          </v-btn>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>
