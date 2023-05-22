<script setup lang="ts">
import type { ProgramingLanguage } from "@/assets/projectInfo";
import OpenGLIcon from "./icons/OpenGLIcon.vue";
import JavaIcon from "./icons/JavaIcon.vue";
import VueIcon from "./icons/VueIcon.vue";
import CIcon from "./icons/CIcon.vue";

const props = defineProps<{
  title: string;
  subtitle: string;
  programmingLanguage: ProgramingLanguage;
  text: string;
  internalLink: string;
  externalLink: string;
  year: string;
}>();

const programmingLogo = () => {
  switch (props.programmingLanguage) {
    case "Vue":
      return VueIcon;
    case "TypeScript":
      return "mdi-language-typescript";
    case "JavaScript":
      return "mdi-language-javascript";
    case "C":
      return CIcon;
    case "Python":
      return "mdi-language-python";
    case "Java":
      return JavaIcon;
    case "OpenGL":
      return OpenGLIcon;
  }
};

// const programmingLogo2 = () => {
//   switch (props.programmingLanguage) {
//     case "Vue":
//       return <v-icon icon="mdi-vuejs" size="x-large" />;
//   }
// };
</script>

<template>
  <div class="divCard">
    <v-card>
      <div class="header">
        <div class="titles">
          <v-card-title>{{ props.title }}</v-card-title>
          <v-card-subtitle>{{ props.subtitle }}</v-card-subtitle>
        </div>
        <div class="programmingMetadata">
          <v-card-text class="year">{{ props.year }}</v-card-text>
          <v-icon :icon="programmingLogo()" size="x-large" />
        </div>
      </div>
      <v-card-text>
        <p>
          {{ props.text }}
        </p>
      </v-card-text>
      <v-card-actions>
        <!-- <v-btn to="props.internalLink">More Information</v-btn> -->
        <v-btn :href="props.externalLink" target="_blank">Source Code</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.programmingMetadata {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
}

.year {
  font-size: 1rem;
}

.divCard {
  margin-bottom: 1rem;
}
</style>
