<template>
  <div class="btm-nav gap-2 overflow-auto scrollbar-hide">
    <button
      v-for="(item, index) in menu"
      :key="item"
      :class="isActive === index ? 'active text-secondary' : ''"
      @click="showIndex(index)"
    >
      <span :class="isActive === index ? 'text-secondary' : 'text-white'">
        <router-link :to="item.link">{{ item.name }}</router-link>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: "BottomComponent",
  data: () => ({
    isActive: 0,
    menu: [
      { link: "/", name: "🏠" },
      { link: "/blast", name: "Blast" },
      { link: "/bluetouff", name: "Bluetoufff️" },
      { link: "/contreattaque", name: "CA" },
      { link: "/hackstock", name: "Podcasts" },
      { link: "/ideeculture", name: "Idees" },
    ],
  }),
  methods: {
    showIndex(index) {
      this.isActive = index;
    },
  },
};
</script>
