<template>
  <div class="btm-nav gap-2 overflow-auto scrollbar-hide">
    <button v-for="item in menu" :key="item">
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
    menu: [
      { link: "/", name: "🏠" },
      { link: "/blast", name: "🌬️" },
      { link: "/bluetouff", name: "‍☠️" },
      { link: "/contreattaque", name: "✨" },
      { link: "/hackstock", name: "🎙️" },
      { link: "/ideeculture", name: "💡" },
    ],
  }),
};
</script>
