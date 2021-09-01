<template>
  <div class="sortWrapper">
    <div class="sortContainer">
      <SortOptions/>
    </div>
    <div class="gamesContainer">
      <SingleGame v-for="(item,index) in dataSplitIntoPages[this.currentPage]" :key="index" :item="item"/>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import SortOptions from "./SortOptions";
import SingleGame from "./SingleGame";

export default {
  name: "Sort",
  components: {SingleGame, SortOptions},
  computed: {
    ...mapState(['sortOptions', 'dataSplitIntoPages', 'currentPage'])
  },
  created() {
    this.$store.commit('setSplitData',[])
  }
}
</script>

<style scoped>

.sortContainer {
  display: flex;
  justify-content: center;
}

.sortWrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.gamesContainer {
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

</style>