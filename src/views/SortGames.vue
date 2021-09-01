<template>
  <div>
    <div class="messageFromApi">
      <h3 v-if="this.messageFromApi">{{messageFromApi}}</h3>
    </div>
    <Sort/>
    <div v-if="this.dataSplitIntoPages.length > 1">
      <Pagination/>
    </div>
  </div>
</template>

<script>
import Sort from "../components/Sort";
import Pagination from "../components/Pagination";
import {mapState} from "vuex";
export default {
  name: "SortGames",
  components: {
    Pagination,
    Sort
  },
  computed: {
    ...mapState(['messageFromApi','dataSplitIntoPages'])
  },
  created() {
    this.$store.commit('setSplitData',[])
    this.$store.commit('setCurrentPage', 0)
  }
}
</script>

<style scoped>

.messageFromApi {
  height: 30px;
  color: #FBBD5F;
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>