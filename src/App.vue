<template>
  <v-app>
    <NavigationDrawer :menuItems="menuItems" />
    <AppBar />
    <router-view></router-view>>
  </v-app>
</template>

<script setup lang="ts">
import NavigationDrawer from "./components/NavigationDrawer.vue";
import AppBar from "./components/AppBar.vue";

const menuItems = [
  { title: "Dashboard", icon: "mdi-view-dashboard", selected: false },
  { title: "Books", icon: "mdi-book-multiple", selected: false },
  { title: "Truck", icon: "mdi-truck-check-outline", selected: true },
  { title: "Status", icon: "mdi-navigation-variant", selected: false },
  { title: "Account", icon: "mdi-account", selected: false },
  { title: "Settings", icon: "mdi-cog-outline", selected: false },
];
</script>

<style scoped>
.v-main {
  margin-left: 30px;
  padding: 50px;
} 
.v-main,
.v-toolbar {
  background-color: #f7f5f5;
}

</style>
