<script setup lang="ts">
import VuePdfEmbed from "vue-pdf-embed";
</script>

<template>
  <main>
    <VuePdfEmbed source="src/assets/CV.pdf" width="600 " />
    <h4>Last updated: 01/01/2022</h4>
    <v-btn
      class="download-button"
      href="src/assets/CV.pdf"
      download="Daniel Bishop's CV"
      color="primary"
      block
    >
      Download
    </v-btn>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
}
v-btn {
  width: 100%;
}
</style>
