<template>
  <v-card rounded="0" flat>
    <v-toolbar color="#f7f5f5">
      <v-select
        class="dropdown-input"
        v-model="selectedOption"
        :items="options"
        plain
      ></v-select>
      <span><h4> / Shipments</h4></span>
      <v-spacer></v-spacer>
      <v-text-field
        class="search-input"
        variant="solo"
        color="white"
        placeholder="Quickly find what you need"
        type="text"
      ></v-text-field>
      <v-btn icon class="rocket-launch">
        <v-icon>mdi-rocket-launch</v-icon>
      </v-btn>

      <v-btn class="account" icon> <v-icon>mdi-account</v-icon></v-btn>
    </v-toolbar>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
const options = ["Location"];
const selectedOption = ref("Location");
</script>

<style scoped>
.v-app-bar.v-toolbar:not(.v-toolbar--flat) {
  box-shadow: none !important;
}
.search-input {
  max-width: 400px;
  margin-top: 30px;
  margin-right: 200px;
}
.dropdown-input {
  max-width: 200px;
  margin-left: 100px;
}
</style>
