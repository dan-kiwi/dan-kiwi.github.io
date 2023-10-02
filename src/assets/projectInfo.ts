export type ProgramingLanguage =
  | "Vue"
  | "TypeScript"
  | "JavaScript"
  | "C"
  | "Python"
  | "Java"
  | "OpenGL"
  | "Next.js";

export type ProjectProps = {
  title: string;
  subtitle: string;
  programmingLanguage: ProgramingLanguage;
  text: string[];
  internalLink: string;
  sourceCode: string | null;
  externalLink?: string;
  date: Date;
};

export const monsterFighter: ProjectProps = {
  title: "Monster Fighter",
  subtitle:
    "Single Player Java Game - Software Engineering I - University of Canterbury",
  text: [
    "A simple GUI game built with Java and Swing. The game is a simple turn-based battle between a player and a monster. The player can attack, heal, or give up. The monster can attack or give up. The game ends when either the player or monster gives up or the player's health reaches 0.",
  ],
  internalLink: "/projects/monster-fighter",
  sourceCode: "https://github.com/dan-kiwi/monster-fighter",
  programmingLanguage: "Java",
  date: new Date(2022, 4),
};

export const pong: ProjectProps = {
  title: "Pong",
  subtitle:
    "Embedded System's Game - Embedded Systems - University of Canterbury",
  text: [
    "A simple game built with C to be used on two UC fun kit (a microcontroller). The game is a simple pong game with a ball on one of the microcontroller's LED screen, the player can use the joystick to move the paddle left and right to hit the ball back to the opponent. The game ends when either the player or opponent misses the ball.",
  ],
  internalLink: "/projects/pong",
  sourceCode: "https://github.com/dan-kiwi/pong-uc-project",
  programmingLanguage: "C",
  date: new Date(2022, 9),
};

export const personalWebsite: ProjectProps = {
  title: "Personal Website",
  subtitle: "Personal website to display my projects and CV",
  text: [
    "This website was built with Vue 3 and TypeScript. This website is used to showcase my projects and acheivements. It is a single page application that uses Vue Router to navigate between pages and uses the Vuetify component library",
  ],
  internalLink: "/projects/personal-website",
  sourceCode: "https://github.com/dan-kiwi/personal-website",
  programmingLanguage: "Vue",
  date: new Date(2023, 0),
};

export const onTheFarm: ProjectProps = {
  title: "On The Farm",
  subtitle:
    "OpenGL graphics of a farm - Computer Graphics - University of Nottingham",
  text: [
    "A 3D graphics project built with OpenGL and C++. The project is a simple 3D scene of a farm with a sheep, water trough, and a hay bale. The user can move the camera around the scene and the user can make the sheep move around the scene.",
  ],
  internalLink: "/projects/on-the-farm",
  sourceCode: "https://github.com/dan-kiwi/on-the-farm",
  programmingLanguage: "OpenGL",
  date: new Date(2023, 4),
};

export const pastureMarket: ProjectProps = {
  title: "Pasture Market",
  subtitle:
    "Marketplace for farmers to view prices (WIP) - UC Enterprise Challenge - Startup",
  text: [
    "At the moment, the website serves to display the current market price of farm commodities. However, it's still under development, with numerous bugs and does not accurately reflect current market prices.",
    "Initially, this project began as a Minimum Viable Product (MVP) for the University of Canterbury's Enterprise Challenge, which is a start-up accelerator program. Through the program, the long-term vision for the site was to evolve into an online marketplace where farmers can trade commodities such as grains and livestock.",
  ],
  internalLink: "/projects/pasture-market",
  programmingLanguage: "Next.js",
  sourceCode: "https://github.com/dan-kiwi/farm_prices",
  externalLink: "https://farm-prices.vercel.app/",
  date: new Date(2023, 5),
};

export default [
  personalWebsite,
  monsterFighter,
  pong,
  onTheFarm,
  pastureMarket,
];
