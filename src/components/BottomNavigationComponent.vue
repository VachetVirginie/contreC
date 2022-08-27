<template>
  <div class="btm-nav gap-2 overflow-auto scrollbar-hide">
    <button v-for="item in menu" :key="item">
      <span class="text-emerald-500">
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
      { link: "/", name: "Hackstock" },
      { link: "/about", name: "Rebellyon" },
      { link: "/ideeculture", name: "Generator" },
    ],
  }),
};
</script>
