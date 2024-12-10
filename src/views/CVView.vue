<script setup lang="ts">
import { ref } from "vue";
import VuePdfEmbed from "vue-pdf-embed";
// import pdfFile from "@/assets/cv.pdf";
let isLoading = ref(true);
const handleDocumentRender = (args: any) => {
  console.log(args);
  isLoading.value = false;
};
// const pdfData = ref(pdfFile);
</script>

<template>
  <main>
    <div class="CVContainer">
      <!-- <VuePdfEmbed
        :source="pdfData"
        width="600"
        @rendered="handleDocumentRender"
      />
    </div>

    <v-progress-circular v-if="isLoading" indeterminate color="primary" />
    <div v-else>
      <h4>Last updated: 31/10/2023</h4>
      <v-btn
        class="download-button"
        :href="pdfData"
        download="Daniel Bishop's CV"
        color="primary"
        block
      >
        Download
      </v-btn> -->
      
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
