<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <div v-for="episode in episodes" :key="episode.title">
          <div class="card card-side shadow-xl mb-4">
            <figure>
              <img :src="episode.image" class="w-56 h-56" alt="Movie" />
            </figure>
            <div class="card-body">
              <h2 class="card-title text-white">{{ episode.title }}</h2>
              <p class="text-white">{{ episode.description }}</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Watch</button>
              </div>
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
