<template>
  <div class="pb-4 lg:pb-0 lg:container lg:mx-auto">
    <div class="flex flex-col lg:flex-row items-center justify-evenly">
      <div class="mb-14 lg:mb-0 lg:w-1/2 xl:w-[40%] lg:order-2">
        <img
          :src="heroImages[0].src"
          :alt="heroImages[0].alt"
          class="lg:hidden mx-auto w-full md:scale-95"
        />
        <img
          :src="heroImages[1].src"
          :alt="heroImages[1].alt"
          class="hidden lg:block scale-[.80] xl:scale-90 2xl:scale-[.85]"
        />
      </div>
      <div
        class="text-center lg:text-left px-2 lg:px-0 lg:pt-24 2xl:pt-28 lg:w-1/2 xl:w-[40%] lg:order-1"
      >
        <h1
          class="text-3xl mb-8 lg:mb-12 lg:whitespace-nowrap text-almBlack font-bold xl:text-7xl 2xl:text-[5.5rem] lg:max-w-sm md:text-5xl"
        >
          Make <br class="lg:block hidden" />
          remote work
        </h1>
        <p
          class="text-mediumGray text-base mb-8 lg:mb-12 md:text-xl xl:max-w-lg leading-loose max-w-3xl"
        >
          {{ description }}
        </p>
        <div>
          <button
            href="#"
            class="text-base border border-almBlack bg-almBlack font-bold text-almWhite px-7 hover:duration-500 hover:ease-in-out hover:bg-almWhite hover:text-almBlack py-4 mb-16 lg:mb-28 2xl:mb-36 rounded-xl"
          >
            {{ buttonText }}
          </button>
        </div>
        <div class="grid grid-cols-4 lg:gap-5 items-center">
          <div v-for="image in clientLogo" :key="image.alt">
            <img
              :src="image.src"
              :alt="image.alt"
              class="scale-75 md:scale-100 lg:scale-90 2xl:scale-110 mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  description: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
  clientLogo: {
    type: Array,
    required: true,
  },
  heroImages: {
    type: Array,
    required: true,
  },
});
</script>
