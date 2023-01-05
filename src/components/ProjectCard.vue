<script setup lang="ts">
const props = defineProps<{
  title: string;
  subtitle: string;
  programmingLanguage: ProgramingLanguage;
  text: string;
  internalLink: string;
  externalLink: string;
}>();

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
    <v-card-title>{{ props.title }}</v-card-title>
    <v-card-subtitle>{{ props.subtitle }}</v-card-subtitle>
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
