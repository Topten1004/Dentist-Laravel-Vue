<template>
    <div>
        <RouterLink to="/" class="align-center">
          <v-img
              lazy-src="../../../src/assets/images/top/lz/front_top_p1.jpg"
              height="100hv"
              class="text-center hidden-md-and-down d-md-block"
              src="../../../src/assets/images/top/front_top_p1.jpg"
          >
              <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0 justify-center"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  :size="70"
                  :width="7"
                  color="green"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-img
              lazy-src="../../../src/assets/images/top/lz/front_top_s1.jpg"
              height="100hv"
              class="text-center hidden-md-and-up d-md-none"
              src="../../../src/assets/images/top/front_top_s1.jpg"
          >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0 justify-center"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    :size="70"
                    :width="7"
                    color="green"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
        </RouterLink>
    </div>

    <v-sheet>
      <v-container class="py-6 pt-lg-8 text-center">
        <!-- <h1><img src="https://smile24.org/src/assets/images/logos/front_logo1.png"></h1> -->
        <h2 class="text-h6 text-sm-h5 mt-8 w-full w-md-8-12 w-xl-half mx-auto">
          歯科医療の高度な技術への評価に<span class="hidden-md-and-up"><br></span>笑顔コインをご利用下さい。
        </h2>
        <div class="mt-8 pt-8 text-center">
          <v-btn size="x-large" dark rounded class="h3 my-3 w-full w-sm-auto" color="warning" variant="elevated" elevation="1" to="/egaocoin">
            <v-icon left dark> mdi-emoticon</v-icon>笑顔コインとは</v-btn><br>
          <v-btn size="x-large" dark rounded class="h3 my-3 w-full w-sm-auto" color="error" to="/patient">
            <v-icon left dark> mdi-heart</v-icon>患者さん</v-btn><br>
          <v-btn size="x-large" dark rounded class="h3 my-3 mx-4 mx-sm-4 w-full w-sm-auto" color="primary" to="/artisan">
            <v-icon left dark> mdi-run-fast</v-icon>歯科技工士</v-btn>
          <v-btn size="x-large" dark rounded class="h3 my-3 mx-4 mx-sm-4 w-full w-sm-auto" color="primary" to="/dentist">
            <v-icon left dark> mdi-tooth</v-icon>歯科医師</v-btn>
          <v-btn size="x-large" dark rounded class="h3 my-3 mx-4 mx-sm-4 w-full w-sm-auto" color="primary" to="/hygienist">
            <v-icon left dark> mdi-account-multiple</v-icon>歯科衛生士</v-btn><br>
          <v-btn size="x-large" dark rounded class="h3 my-3 mx-4 mx-sm-4 w-full w-sm-auto" color="secondary" to="/clinic">
            <v-icon left dark> mdi-hospital-marker</v-icon>歯科医療機関</v-btn>
          <v-btn size="x-large" dark rounded class="h3 my-3 mx-4 mx-sm-4 w-full w-sm-auto" color="secondary" to="/labo">
            <v-icon left dark> mdi-flask</v-icon>歯科技工所</v-btn>
          <v-btn size="x-large" dark rounded class="h3 my-3 mx-4 mx-sm-4 w-full w-sm-auto" color="secondary" to="/society">
            <v-icon left dark> mdi-school</v-icon>学会・団体</v-btn>
        </div>
      </v-container>
    </v-sheet>
  </template>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>