<template>
  <div v-if="allGames">
    <div>
      <Pagination/>
    </div>
    <AllGames/>
    <div>
      <Pagination/>
    </div>
  </div>
</template>

<script>

import AllGames from "../components/AllGames";
import {mapState} from "vuex"
import Pagination from "../components/Pagination";

export default {
  name: 'Games',
  components: {
    Pagination,
    AllGames
  },
  computed: {
    ...mapState(['allGames'])
  }
}
</script>
