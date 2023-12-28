<script setup lang="ts">
import ProjectCardVue from "@/components/ProjectCard.vue";
import projectInfo from "@/assets/projectInfo";
</script>

<template>
  <main>
    <h1>My Projects</h1>
    <ProjectCardVue
      v-for="project in projectInfo.sort(
        (a, b) => b.date.getTime() - a.date.getTime()
      )"
      :key="project.title"
      :title="project.title"
      :subtitle="project.subtitle"
      :programmingLanguages="project.programmingLanguages"
      :text="project.text"
      :internalLink="project.internalLink"
      :sourceCode="project.sourceCode"
      :externalLink="project.externalLink ?? null"
      :year="
        project.date.toLocaleString('default', { month: 'long' }) +
        ' ' +
        project.date.getFullYear().toString()
      "
      :archived="project.archived"
    />
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 1rem;
}
</style>
