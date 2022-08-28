<template>
  <section class="text-white-600 body-font overflow-hidden">
    <div
      class="container px-5 py-24 mx-auto"
      v-for="episode in episodes"
      :key="episode.title"
    >
      <div
        class="-my-8 divide-y-2 divide-primary rounded p-4 border-4 border-purple-500/60"
      >
        <div class="py-8 flex flex-wrap md:flex-nowrap">
          <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <figure>
              <img :src="episode.image" class="w-56 h-56" alt="Movie" />
            </figure>
          </div>
          <div class="md:flex-grow">
            <div>
              <h2 class="text-2xl font-medium text-white title-font mb-2">
                {{ episode.title }}
              </h2>
              <span class="mt-1 text-gray-400 text-sm">{{
                episode.pubDate
              }}</span>
            </div>
            <div class="py-12">
              <p class="leading-relaxed text-white">
                {{ episode.description }}
              </p>
            </div>
            <div class="float-right">
              <button class="btn btn-primary">
                <a :href="episode.url" target="_blank"> Watch </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import podcasts from "../assets/podcats.json";

export default {
  name: "MyIframe",
  data: () => ({
    episodes: podcasts,
  }),
};
</script>
