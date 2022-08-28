<template>
  <div class="btm-nav gap-2 overflow-auto scrollbar-hide">
    <button
      v-for="(item, index) in menu"
      :key="item"
      :class="isActive === index ? 'active text-primary' : ''"
      @click="showIndex(index)"
    >
      <span class="text-white">
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
      { link: "/blast", name: "🌬️" },
      { link: "/bluetouff", name: "‍☠️" },
      { link: "/contreattaque", name: "✨" },
      { link: "/hackstock", name: "🎙️" },
      { link: "/ideeculture", name: "💡" },
    ],
  }),
  methods: {
    showIndex(index) {
      this.isActive = index;
    },
  },
};
</script>
