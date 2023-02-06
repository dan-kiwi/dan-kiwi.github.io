<script setup lang="ts">
import ProjectCardVue from "@/components/ProjectCard.vue";
import projectInfo from "@/assets/projectInfo";
</script>

<template>
  <main>
    <h1>My Projects</h1>
    <ProjectCardVue
      v-for="project in projectInfo"
      :key="project.title"
      :title="project.title"
      :subtitle="project.subtitle"
      :programmingLanguage="project.programmingLanguage"
      :text="project.text"
      :internalLink="project.internalLink"
      :externalLink="project.externalLink"
      :year="project.year"
    />
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 1rem;
}
</style>
