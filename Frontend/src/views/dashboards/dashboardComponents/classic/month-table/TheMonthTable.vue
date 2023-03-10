<template>
  <v-card>
    <v-card-text class="pa-5">
      <div class="">
        <h2 class="title text-h6 font-weight-medium">Project Data</h2>
        <h5 class="subtitle">Table data</h5>
      </div>
      <v-table class="month-table mt-7 mb-5">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="font-weight-bold">Assigned</th>
              <th class="font-weight-bold">Name</th>
              <th class="font-weight-bold">Priority</th>
              <th class="font-weight-bold">Budget</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in monthtable"
              :key="item.leadname"
              :class="item.activestate"
              class="month-item"
            >
              <td>
                <div class="d-flex align-center">
                  <v-avatar size="40">
                    <img
                      :src="`/assets/images/users/${item.img}`"
                      alt="user"
                      width="45"
                    />
                  </v-avatar>
                  <div class="mx-4">
                    <h4 class="">
                      {{ item.leadname }}
                    </h4>
                    <h6 class="">
                      {{ item.leademail }}
                    </h6>
                  </div>
                </div>
              </td>
              <td>
                <h5>
                  {{ item.projectname }}
                </h5>
              </td>
              <td>
                <v-chip
                  class="ma-2"
                  :color="item.statuscolor"
                  size="x-small"
                  label
                  >{{ item.statustext }}</v-chip
                >
              </td>
              <td>
                <h4 class="">{{ item.money }}</h4>
              </td>
            </tr>
          </tbody>
        </template>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const select = ref({ state: "January", abbr: "FL" });
const items = ref([
  { state: "January", abbr: "FL" },
  { state: "February", abbr: "GA" },
  { state: "March", abbr: "NE" },
  { state: "April", abbr: "CA" },
]);
const monthtable = ref([
  {
    img: "1.jpg",
    activestate: "",
    leadname: "Sunil Joshi",
    leademail: "Web Designer",
    projectname: "Elite Admin",
    statuscolor: "success",
    statustext: "Low",
    money: "$3.9K",
  },
  {
    img: "2.jpg",
    activestate: "active",
    leadname: "Andrew",
    leademail: "Project Manager",
    projectname: "Real Homes",
    statuscolor: "info",
    statustext: "Medium",
    money: "$23.9K",
  },
  {
    img: "3.jpg",
    activestate: "",
    leadname: "Bhavesh patel",
    leademail: "Developer",
    projectname: "MedicalPro Theme",
    statuscolor: "deep-purple accent-2 white--text",
    statustext: "High",
    money: "$12.9K",
  },
  {
    img: "4.jpg",
    activestate: "",
    leadname: "Nirav Joshi",
    leademail: "Frontend Eng",
    projectname: "Elite Admin",
    statuscolor: "error",
    statustext: "Low",
    money: "$10.9K",
  },
  {
    img: "5.jpg",
    activestate: "",
    leadname: "Micheal Doe",
    leademail: "Content Writer",
    projectname: "Helping Hands",
    statuscolor: "warning",
    statustext: "High",
    money: "$12.9K",
  },
]);
</script>
