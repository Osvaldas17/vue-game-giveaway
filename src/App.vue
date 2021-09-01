<template>
  <div class="navBar">
    <NavBar/>
  </div>
  <router-view/>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    NavBar
  },
  created() {
    this.$store.dispatch('fetchAllGames')
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
 background-color: #1C4761
}

.navBar {
  position: sticky;
  top: 0;
  z-index: 99;
}

* {
  margin: 0;

}

</style>
