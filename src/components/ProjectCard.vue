<script setup lang="ts">
const props = defineProps<{
  title: string;
  subtitle: string;
  programmingLanguage: ProgramingLanguage;
  text: string;
  internalLink: string;
  externalLink: string;
}>();

const programmingLogo = () => {
  switch (props.programmingLanguage) {
    case "Vue":
      return "mdi-vuejs";
    case "TypeScript":
      return "mdi-language-typescript";
    case "JavaScript":
      return "mdi-language-javascript";
    case "C":
      return "mdi-language-c";
    case "Python":
      return "mdi-language-python";
    case "Java":
      return "mdi-language-java";
  }
};

type ProgramingLanguage =
  | "Vue"
  | "TypeScript"
  | "JavaScript"
  | "C"
  | "Python"
  | "Java";
</script>

<template>
  <v-card>
    <div class="header">
      <div class="titles">
        <v-card-title>{{ props.title }}</v-card-title>
        <v-card-subtitle>{{ props.subtitle }}</v-card-subtitle>
      </div>
      <div class="programming-language">
        <v-card-text>{{ props.programmingLanguage }}</v-card-text>
        <v-icon :icon="programmingLogo()" />
      </div>
    </div>
    <v-card-text>
      <p>
        {{ props.text }}
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn to="props.internalLink">More Information</v-btn>
      <v-btn text>Source Code</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.programming-language {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
