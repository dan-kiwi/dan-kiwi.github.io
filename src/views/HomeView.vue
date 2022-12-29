<script setup lang="ts">
type item = {
  title: string;
  to: string;
  subtitle?: string;
};
const items: item[] = [
  { title: "Home", to: "/", subtitle: "Welcome to the home page" },
  { title: "About", to: "/about" },
];
</script>

<template>
  <main>
    <v-list lines="one">
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :title="item.title"
        :to="item.to"
        :subtitle="item.subtitle"
        link
      ></v-list-item>
    </v-list>
    <!-- <v-icon icon="mdi-github" ></v-icon> -->
    
  </main>
</template>
