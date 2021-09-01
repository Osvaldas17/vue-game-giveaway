<template>
  <div class="allGamesContainer" v-if="dataSplitIntoPages">
    <SingleGame v-for="(item,index) in dataSplitIntoPages[this.currentPage]" :key="index" :item="item"/>
  </div>
</template>

<script>
import SingleGame from "./SingleGame";
import {mapState} from "vuex";

export default {
  name: "AllGames",
  components: {
    SingleGame
  },
  computed: {
    ...mapState(['dataSplitIntoPages','currentPage','allGames'])
  },
  created() {
    this.$store.dispatch('splitDataIntoPages', this.allGames )
    this.$store.commit('setCurrentPage', 0)
  }
}
</script>

<style scoped>

.allGamesContainer {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

</style>