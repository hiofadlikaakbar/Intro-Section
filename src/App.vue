<template>
  <HeaderPage :images="images" />
  <HeroPage
    description="Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar."
    button-text="Learn more"
    :hero-images="heroImages"
    :client-logo="clientLogo"
  />
</template>

<script setup>
import HeaderPage from "./components/HeaderPage.vue";
import HeroPage from "./components/HeroPage.vue";
import mobileHero from "../src/assets/image-hero-mobile.png";
import desktopHero from "../src/assets/image-hero-desktop.png";
import databiz from "../src/assets/client-databiz.svg";
import audiophile from "../src/assets/client-audiophile.svg";
import meet from "../src/assets/client-meet.svg";
import maker from "../src/assets/client-maker.svg";
import todo from "../src/assets/icon-todo.svg";
import calendar from "../src/assets/icon-calendar.svg";
import reminders from "../src/assets/icon-reminders.svg";
import planning from "../src/assets/icon-planning.svg";
const heroImages = [
  {
    src: mobileHero,
    alt: "mobile hero",
  },
  {
    src: desktopHero,
    alt: "desktop hero",
  },
];
const clientLogo = [
  {
    src: databiz,
    alt: "databiz",
  },
  {
    src: audiophile,
    alt: "audiophile",
  },
  {
    src: meet,
    alt: "meet",
  },
  {
    src: maker,
    alt: "maker",
  },
];
const images = [
  {
    src: todo,
    alt: "list",
    text: "Todo List",
  },
  {
    src: calendar,
    alt: "calendar",
    text: "Calendar",
  },
  {
    src: reminders,
    alt: "reminders",
    text: "Reminders",
  },
  {
    src: planning,
    alt: "planning",
    text: "Planning",
  },
];
</script>
