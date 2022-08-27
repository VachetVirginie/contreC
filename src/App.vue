<template>
  <div id="app">
    <!--    <nav>-->
    <!--      <router-link to="/">Hackstock (Podcast)</router-link> |-->
    <!--      <router-link to="/about">Rebellyon</router-link> |-->
    <!--      <router-link to="/radiorageuses">Radiorageuses</router-link> |-->
    <!--      <router-link to="/ideeculture">Le Pass (contre) Culture</router-link>-->
    <!--      <router-link to="/laronce">La ronce</router-link>-->
    <!--    </nav>-->
    <BottomComponent />
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.vue-iframe iframe {
  height: 1000px !important;
  width: 100%;
}
</style>
<script>
import BottomComponent from "@/components/BottomNavigationComponent";
export default {
  components: { BottomComponent },
};
</script>
