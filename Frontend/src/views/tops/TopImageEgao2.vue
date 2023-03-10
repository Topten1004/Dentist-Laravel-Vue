<template>
    <div>
        <RouterLink to="/" class="align-center">
          <v-img
              lazy-src="../../../src/assets/images/top/lz/front_top_egaocoin2.jpg"
              height="100hv"
              class="text-center hidden-md-and-down d-md-block"
              src="../../../src/assets/images/top/front_top_egaocoin2.jpg"
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
              height="100hv"
              class="text-center hidden-md-and-up d-md-none"
              src="../../../src/assets/images/top/front_top_s_egaocoin2.jpg"
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

  </template>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>