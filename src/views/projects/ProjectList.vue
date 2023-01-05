<script setup lang="ts">
import ProjectCardVue from "@/components/ProjectCard.vue";
</script>

<template>
  <h1>My Projects</h1>
  <ProjectCardVue
    title="Monster Fighter"
    subtitle="Game"
    text="A simple game built with Vue 3 and TypeScript. The game is a simple turn-based battle between a player and a monster. The player can attack, heal, or give up. The monster can attack or give up. The game ends when either the player or monster gives up or the player's health reaches 0."
    internalLink="/projects/monster-fighter"
    externalLink="https://github.com/dannyjb164/monster-fighter"
    programmingLanguage="Java"
  />
</template>
