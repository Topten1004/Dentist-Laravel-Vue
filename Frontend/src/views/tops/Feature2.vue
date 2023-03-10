<template>
  <v-container class="py-16 mt-8 mb-16">
    <h1 class="mb-8">プロジェクトの特徴</h1>
    <v-divider class="mb-8"></v-divider>
    <v-row>
      <v-col v-for="(item, i) in features" :key="i" cols="12" md="6">
        <div class="d-flex">
          <div class="mr-2">
            <v-sheet outlined rounded class="pa-2 elevation-1">
              <v-icon>{{ item.icon }}</v-icon>
            </v-sheet>
          </div>
          <div>
            <div class="text-h5">{{ item.title }}</div>
            <div class="text-h6 font-weight-light mt-1">{{ item.description }}</div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      features: [{
        icon: 'mdi-account-check-outline',
        title: 'Future2222 Verification',
        description: 'Featur2_   Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam aliquam. Autem assumenda'
      }, {
        icon: 'mdi-lifebuoy',
        title: 'Dedicated Support',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam aliquam. Autem assumenda'
      }, {
        icon: 'mdi-email-open-multiple-outline',
        title: 'Email Integration',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam aliquam. Autem assumenda'
      }, {
        icon: 'mdi-clock-outline',
        title: 'Save Time',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam aliquam. Autem assumenda'
      }]
    }
  }
}
</script>
