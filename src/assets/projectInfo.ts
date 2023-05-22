export type ProgramingLanguage =
  | "Vue"
  | "TypeScript"
  | "JavaScript"
  | "C"
  | "Python"
  | "Java"
  | "OpenGL";

export type ProjectProps = {
  title: string;
  subtitle: string;
  programmingLanguage: ProgramingLanguage;
  text: string;
  internalLink: string;
  externalLink: string;
  date: Date;
};

export const monsterFighter: ProjectProps = {
  title: "Monster Fighter",
  subtitle: "Game",
  text: "A simple game built with Vue 3 and TypeScript. The game is a simple turn-based battle between a player and a monster. The player can attack, heal, or give up. The monster can attack or give up. The game ends when either the player or monster gives up or the player's health reaches 0.",
  internalLink: "/projects/monster-fighter",
  externalLink: "https://github.com/dan-kiwi/monster-fighter",
  programmingLanguage: "Java",
  date: new Date(2022, 4),
};

export const pong: ProjectProps = {
  title: "Pong",
  subtitle: "Game",
  text: "A simple game built with C to be used on the UC fun kit. The game is a simple pong game where the player can move the paddle up and down to hit the ball back to the opponent. The game ends when either the player or opponent misses the ball.",
  internalLink: "/projects/pong",
  externalLink: "https://github.com/dan-kiwi/pong-uc-project",
  programmingLanguage: "C",
  date: new Date(2022, 9),
};

export const personalWebsite: ProjectProps = {
  title: "Personal Website",
  subtitle: "Website",
  text: "This website was built with Vue 3 and TypeScript. The website is a single page application that uses Vue Router to navigate between pages. The website is hosted on GitHub pages.",
  internalLink: "/projects/personal-website",
  externalLink: "https://github.com/dan-kiwi/personal-website",
  programmingLanguage: "Vue",
  date: new Date(2023, 0),
};

export const onTheFarm: ProjectProps = {
  title: "On The Farm",
  subtitle: "3D graphics",
  text: "A 3D graphics project built with OpenGL and C++. The project is a simple 3D scene of a farm with a sheep, water trough, and a hay bale. The user can move the camera around the scene and the user can make the sheep move around the scene.",
  internalLink: "/projects/on-the-farm",
  externalLink: "https://github.com/dan-kiwi/on-the-farm",
  programmingLanguage: "OpenGL",
  date: new Date(2023, 4),
};

export default [personalWebsite, monsterFighter, pong, onTheFarm];
