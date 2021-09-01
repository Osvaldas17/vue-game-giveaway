<template>
  <div class="centering">
    <SingleGiveAwayInfo :item="singleGiveaway"/>
  </div>
</template>

<script>
import SingleGiveAwayInfo from "../components/SingleGiveAwayInfo";
import {mapState} from "vuex";
export default {
  name: "SelectedGiveaway",
  components: {
    SingleGiveAwayInfo
  },
  computed: {
    ...mapState(['singleGiveaway'])
  },
  created() {
    let id = this.$route.params.id
    this.$store.dispatch('fetchSpecificGiveaway',id)
  }
}
</script>

<style scoped>

.centering {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>