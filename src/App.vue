<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <img
      alt="Daniel Bishop's headshot"
      width="300"
      src="@/assets/headshot.jpg"
      class="headshot"
    />
    <h1>Daniel Bishop</h1>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">About me</RouterLink>
        <RouterLink to="/cv">CV</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <a href="https://github.com/dan-kiwi/" target="_blank">
          <v-icon icon="mdi-github" />
        </a>
        <a href="https://www.linkedin.com/in/dan-kiwi/" target="_blank">
          <v-icon icon="mdi-linkedin" />
        </a>
        <a href="https://www.duolingo.com/profile/Dan-kiwi" target="_blank">
          <v-icon icon="mdi-translate-variant" />
        </a>
        <a href="mailto:career@dan-kiwi.dev">
          <v-icon icon="mdi-email" />
        </a>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  max-height: 100vh;
  place-items: center;
  margin-bottom: 2rem;
}

.headshot {
  display: block;
  margin: 0 auto 2rem;
  border-radius: 50%;
}

nav {
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1200px) {
  header {
    display: flex;
    margin: auto;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
