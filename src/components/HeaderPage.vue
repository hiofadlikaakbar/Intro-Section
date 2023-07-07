<template>
  <header class="pb-10 2xl:pb-0 md:container md:mx-auto xl:px-10">
    <nav class="pt-8 px-3 xs:px-5 md:px-10 lg:px-0">
      <div class="flex items-center justify-between">
        <div class="flex gap-14">
          <img :src="snap" alt="snap logo" />
          <ul v-auto-animate class="hidden lg:flex items-center gap-8">
            <li
              class="flex gap-3 group cursor-pointer relative items-center"
              @click="toggleDropdown(0)"
            >
              <p
                class="text-mediumGray text-base group-hover:text-almBlack ease-in-out duration-200"
              >
                Features
              </p>
              <i
                :class="{
                  'fa-solid fa-chevron-up text-sm md:text-base text-mediumGray group-hover:text-almBlack ease-in-out duration-200':
                    activeDropdownIndex === 0,
                  'fa-solid fa-chevron-down text-sm md:text-base text-mediumGray group-hover:text-almBlack ease-in-out duration-200':
                    activeDropdownIndex !== 0,
                }"
              ></i>
              <div class="absolute top-12 right-0">
                <div
                  v-if="activeDropdownIndex === 0"
                  class="px-5 py-4 rounded-lg bg-white shadow-lg"
                >
                  <span
                    v-for="image in images"
                    :key="image.alt"
                    class="flex gap-4 py-2 px-3 items-center"
                  >
                    <img :src="image.src" :alt="image.alt" class="scale-125" />
                    <p
                      class="text-mediumGray text-base lg:text-lg hover:text-almBlack ease-in-out duration-200"
                    >
                      {{ image.text }}
                    </p>
                  </span>
                </div>
              </div>
            </li>
            <li
              class="flex gap-3 cursor-pointer group relative items-center"
              @click="toggleDropdown(1)"
            >
              <p
                class="text-mediumGray text-base group-hover:text-almBlack ease-in-out duration-200"
              >
                Company
              </p>
              <i
                :class="{
                  'fa-solid fa-chevron-up text-sm md:text-base text-mediumGray group-hover:text-almBlack ease-in-out duration-200':
                    activeDropdownIndex === 1,
                  'fa-solid fa-chevron-down text-sm md:text-base text-mediumGray group-hover:text-almBlack ease-in-out duration-200':
                    activeDropdownIndex !== 1,
                }"
              ></i>
              <div class="absolute top-12 left-0">
                <div
                  v-if="activeDropdownIndex === 1"
                  class="px-8 py-5 rounded-lg bg-white shadow-lg"
                >
                  <p
                    class="text-mediumGray text-base hover:text-almBlack ease-in-out duration-200 lg:text-lg mb-3"
                  >
                    History
                  </p>
                  <p
                    class="text-mediumGray text-base hover:text-almBlack ease-in-out duration-200 lg:text-lg whitespace-nowrap mb-3"
                  >
                    Our Team
                  </p>
                  <p
                    class="text-mediumGray text-base hover:text-almBlack ease-in-out duration-200 lg:text-lg"
                  >
                    Blog
                  </p>
                </div>
              </div>
            </li>
            <li class="cursor-pointer">
              <p
                class="text-mediumGray text-base duration-200 ease-in-out hover:text-almBlack"
              >
                Carrers
              </p>
            </li>
            <li class="cursor-pointer">
              <p
                class="text-mediumGray text-base duration-200 ease-in-out hover:text-almBlack"
              >
                About
              </p>
            </li>
          </ul>
        </div>
        <div class="gap-8 hidden lg:flex items-center">
          <p
            class="text-base cursor-pointer text-mediumGray duration-200 ease-in-out hover:text-almBlack"
          >
            Login
          </p>
          <button
            type="button"
            class="text-base py-2 px-5 border-2 cursor-pointer rounded-xl hover:border-almBlack duration-200 ease-in-out hover:text-almBlack border-mediumGray text-mediumGray"
          >
            Register
          </button>
        </div>
        <div class="relative z-[200] block lg:hidden">
          <button @click="toggleNav" class="block lg:hidden focus:outline-none">
            <img :src="nav" alt="burger" ref="burger" />
          </button>
        </div>
      </div>

      <!-- mobile nav -->
      <ul
        v-auto-animate
        :class="showMenu ? ' grid right-0' : ' -right-[100%] grid opacity-0'"
        class="h-screen w-[60%] md:w-1/2 fixed z-50 duration-300 lg:hidden ease-in-out content-center font-pops space-y-8 md:space-y-12 top-0 right-0 pl-[1.19rem] xs:pl-6 md:pl-12 bg-white"
      >
        <li class="flex gap-4 items-center" @click="toggleDropdown(0)">
          <p class="text-mediumGray text-base md:text-lg">Features</p>
          <i
            :class="{
              'fa-solid fa-chevron-up text-sm md:text-base text-mediumGray':
                activeDropdownIndex === 0,
              'fa-solid fa-chevron-down text-sm md:text-base text-mediumGray':
                activeDropdownIndex !== 0,
            }"
          ></i>
        </li>
        <span
          v-if="activeDropdownIndex === 0"
          v-for="image in images"
          :key="image.alt"
          class="flex gap-4 pl-7 items-center"
        >
          <img :src="image.src" :alt="image.alt" class="scale-125" />
          <p class="text-mediumGray text-base lg:text-lg">{{ image.text }}</p>
        </span>
        <li class="flex gap-4 items-center" @click="toggleDropdown(1)">
          <p class="text-mediumGray text-base md:text-lg">Company</p>
          <i
            :class="{
              'fa-solid fa-chevron-up text-sm md:text-base text-mediumGray':
                activeDropdownIndex === 1,
              'fa-solid fa-chevron-down text-sm md:text-base text-mediumGray':
                activeDropdownIndex !== 1,
            }"
          ></i>
        </li>
        <span v-if="activeDropdownIndex === 1" class="flex-col flex pl-7 gap-5">
          <p class="text-mediumGray text-base md:text-lg">History</p>
          <p class="text-mediumGray text-base md:text-lg">Our Team</p>
          <p class="text-mediumGray text-base md:text-lg">Blog</p>
        </span>
        <li>
          <p class="text-mediumGray text-base md:text-lg">Careers</p>
        </li>
        <li>
          <p class="text-mediumGray text-base md:text-lg">About</p>
        </li>
        <li class="text-center">
          <a href="#" class="text-mediumGray">Login</a>
        </li>
        <li class="text-center">
          <a
            href="#"
            class="text-mediumGray border border-mediumGray rounded-xl px-7 md:px-20 xs:px-10 py-3"
            >Register</a
          >
        </li>
      </ul>
      <div
        :class="showMenu ? 'opacity-100' : 'opacity-0'"
        class="bg-almBlack/75 lg:hidden md:w-1/2 left-0 z-50 duration-500 ease-in-out fixed top-0 w-[40%] h-screen"
      ></div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import snap from "../assets/logo.svg";
import closes from "../assets/icon-close-menu.svg";
import nav from "../assets/icon-menu.svg";
const activeDropdownIndex = ref(-1);
const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const showMenu = ref(false);
const burger = ref(null);

const toggleNav = () => {
  showMenu.value = !showMenu.value;
  burger.value.src = showMenu.value ? closes : nav;
};

const toggleDropdown = (index) => {
  if (activeDropdownIndex.value === index) {
    activeDropdownIndex.value = -1;
  } else {
    activeDropdownIndex.value = index;
  }
};
</script>
