<template>
  <div class="paginationContainer">
    <div class="buttonsCon">
      <span @click="setPage(0)">First</span>
      <span @click="setPage(currentPage - 1)">Prev</span>
      <span @click="setPage(currentPage - 2)" v-if="currentPage - 1 > 0">{{currentPage - 1}}</span>
      <span @click="setPage(currentPage - 1)" v-if="currentPage > 0">{{currentPage}}</span>
      <h1 class="currentNumber">{{currentPage + 1}}</h1>
      <span @click="setPage(currentPage + 1)" v-if="currentPage + 1 < dataSplitIntoPages.length">{{currentPage + 2}}</span>
      <span @click="setPage(currentPage + 2)" v-if="currentPage + 2 < dataSplitIntoPages.length">{{currentPage + 3}}</span>
      <span @click="setPage(currentPage + 1)">Next</span>
      <span @click="setPage(dataSplitIntoPages.length - 1)">Last</span>
    </div>
  </div>

</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Pagination",
  computed: {
    ...mapState(['currentPage','dataSplitIntoPages'])
  },
  methods: {
    setPage(page) {
      if (page < this.dataSplitIntoPages.length && page >= 0) {
        this.$store.commit('setCurrentPage', page)
      }
    }
  }
}
</script>

<style scoped>

.paginationContainer {
  display: flex;
  justify-content: center;
  /*background-color: white;*/
  height: 60px;
  margin: 50px 0 50px
}

.currentNumber {
  padding: 10px;
  font-size: 30px;
  color: #A3336B;
  border: solid 2px #A3336B;
}

span {
  margin: 5px;
  border-bottom: #A3336B solid 2px;
  padding: 5px;
  cursor: pointer;
  font-size: 20px;
}
span:hover {
  transform: scale(1.05);
  color: white;
  background-color: #A3336B;
}

.buttonsCon {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>