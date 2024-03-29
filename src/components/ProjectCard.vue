<script setup lang="ts">
import type { ProgramingLanguage } from "@/assets/projectInfo";
import OpenGLIcon from "./icons/OpenGLIcon.vue";
import JavaIcon from "./icons/JavaIcon.vue";
import VueIcon from "./icons/VueIcon.vue";
import CIcon from "./icons/CIcon.vue";
import ReactIcon from "./icons/ReactIcon.vue";

const props = defineProps<{
  title: string;
  subtitle: string;
  programmingLanguages: ProgramingLanguage[];
  text: string[];
  internalLink: string;
  sourceCode: string | null;
  externalLink: string | null;
  year: string;
  archived: boolean;
}>();

const programmingLogo = (programmingLanguage: ProgramingLanguage) => {
  switch (programmingLanguage) {
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
    case "Next.js":
      return ReactIcon;
  }
};
</script>

<template>
  <div class="divCard">
    <v-card>
      <div class="header">
        <div class="firstRow">
          <v-card-title>{{ props.title }}</v-card-title>
          <div class="programmingMetadata">
            <v-chip v-if="props.archived" color="red">Archived</v-chip>
            <v-chip v-else color="primary">Active</v-chip>
            <v-card-text class="year">{{ props.year }}</v-card-text>
            <v-icon
              v-for="(language, index) in props.programmingLanguages"
              :key="index"
              :icon="programmingLogo(language)"
              size="x-large"
            />
          </div>
        </div>
        <div class="secondRow">
          <v-card-subtitle>{{ props.subtitle }}</v-card-subtitle>
        </div>
      </div>
      <v-card-text>
        <div class="paragraph">
          <p v-for="paragraph in props.text" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
      </v-card-text>
      <v-card-actions v-if="props.sourceCode || props.externalLink">
        <v-btn
          v-if="props.sourceCode"
          v-bind:href="props.sourceCode"
          target="_blank"
          >Source Code</v-btn
        >
        <v-btn
          v-if="props.externalLink"
          :href="props.externalLink"
          target="_blank"
          >Live Demo</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.firstRow {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.secondRow {
  align-self: flex-start;
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

.paragraph {
  display: grid;
  gap: 1rem;
}
</style>
