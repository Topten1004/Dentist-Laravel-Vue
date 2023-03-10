<template>
  <v-card color="yellow-lighten-4">
    <!-- 
    <img src="@/assets/images/background/login-register.jpg" class="w-100" />
    <div class="d-flex justify-center mt-n15">
      <v-avatar size="100">
        <img src="@/assets/images/users/1.jpg" width="100" alt="user" />
      </v-avatar>
    </div> -->
    <v-card-text>
      <div class="text-center">
        <h2 class="mb-0 mt-4 font-weight-regular">ご利用登録はこちら</h2>
        <small>Dental Worker &amp; Executive</small><br />
        <v-btn
          to="/regist"
          rounded
          color="error"
          dark
          x-large
          class="mt-3 px-4 mr-2">
          新規登録
        </v-btn>
        <v-btn
          to="/login"
          rounded
          color="primary"
          dark
          x-large
          class="mt-3 px-4 ml-2">
          ログイン
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>
