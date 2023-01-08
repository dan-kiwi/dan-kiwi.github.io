<script setup lang="ts">
import VuePdfEmbed from "vue-pdf-embed";
</script>

<template>
  <div class="about">
    <VuePdfEmbed source="src/assets/CV.pdf" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
