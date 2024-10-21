<template>
  <v-navigation-drawer
    class="left-side"
    app
    permanent
    rail
    width="200px"
    color="grey-lighten-3"
  >
    <v-list-item>
      <img src="../assets/viya-logo.png" alt="Viya-logo" />
    </v-list-item>

    <v-list-item class="custom-list-item-icon extra-margin">
      <v-icon color="#2392a4">mdi-plus</v-icon>
    </v-list-item>

    <v-divider class="custom-divider"></v-divider>

    <v-list compact class="extra-margin">
      <v-list-item-group active-class="primary--text">
        <v-list-item
          class="custom-list-item left-sidebar-icon"
          v-for="(item, index) in menuItems"
          :key="index"
        >
          <v-list-item-icon
            :class="
              item.selected == true
                ? 'selected custom-list-item-icon'
                : 'custom-list-item-icon'
            "
          >
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface MenuItem {
  title: string;
  icon: string;
  selected: boolean;
}
// Define props
const props = defineProps<{
  menuItems: MenuItem[]; 
}>();
</script>

<style scoped>
.left-side {
  width: 75px !important;
  padding-top: 10px;
}
.custom-list-item-icon {
  font-size: 1.5em !important;
  margin-top: 10px !important;
}
.custom-list-item {
  margin-top: 20px;
}
.custom-divider {
  width: 30px;
  margin: auto;
}
.extra-margin {
  padding-top: 50px;
}
.selected {
  color: #2392a4;
}


.left-sidebar-icon:hover {
  border: 0.2px solid #d4dbe2;
  background-color: #d4dbe2;
  border-radius: 100%;
  color:#2392a4;
  cursor: pointer;
}
</style>
