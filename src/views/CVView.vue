<script setup lang="ts">
import { ref } from "vue";
import VuePdfEmbed from "vue-pdf-embed";
let isLoading = ref(true);
const pdfSource =
  "https://cdn.jsdelivr.net/gh/dan-kiwi/public_files@main/CV_3_8_23.pdf";
const handleDocumentRender = (args: any) => {
  console.log(args);
  isLoading.value = false;
};
</script>

<template>
  <main>
    <div class="CVContainer">
      <VuePdfEmbed
        :source="pdfSource"
        width="600"
        @rendered="handleDocumentRender"
      />
    </div>

    <v-progress-circular v-if="isLoading" indeterminate color="primary" />
    <div v-else>
      <h4>Last updated: 21/05/2023</h4>
      <v-btn
        class="download-button"
        :href="pdfSource"
        download="Daniel Bishop's CV"
        color="primary"
        block
      >
        Download
      </v-btn>
    </div>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
}
v-btn {
  width: 100%;
}
main {
  padding-top: 0;
  place-items: center;
}
.CVContainer {
  width: 600px;
  margin: 0 auto;
}
</style>
