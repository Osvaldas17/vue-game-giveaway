<template>
  <div class="navBar">
    <router-link to="/">Home</router-link>
    <router-link to="/sort-giveaways">Search for giveaway</router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

.navBar {
  background-color: #344c62;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 6px 14px -8px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0 6px 14px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: 0 6px 14px -8px rgba(0,0,0,0.75);
}

a {
  color: #FBBD5F;
  font-size: 25px;
  text-decoration: none;
  font-weight: bold;
}
a:hover {
  color: white;
}
</style>