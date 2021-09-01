<template>
  <div class="sortWrapperSub">
    <div class="singleOption">
      <div class="select selected">{{selectedOptions.platform ? selectedOptions.platform: 'Select Platform'}}</div>
      <div @click="setPlatform(item)" class="select display" v-for="(item, index) in sortOptions.platforms" :key="index">
        <p>{{item}}</p>
      </div>
    </div>
    <div class="singleOption">
      <div class="select selected">{{selectedOptions.type ? selectedOptions.type : 'Select Type'}}</div>
      <div @click="setType(item)" class="select display" v-for="(item, index) in sortOptions.types" :key="index">
        <p>{{item}}</p>
      </div>
    </div>
    <div class="singleOption">
      <div class="select selected">{{selectedOptions.sortBy ? selectedOptions.sortBy : 'Select sort by'}}</div>
      <div @click="setSortBy(item)" class="select display" v-for="(item, index) in sortOptions.sortBy" :key="index">
        <p>{{item}}</p>
      </div>
    </div>
    <div class="singleOption">
      <div @click="searchFn" :class="[validation ? 'validatedSubmitSearch' : '']" class="submitSearch">Search</div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "SortOptions",
  computed: {
    ...mapState(['sortOptions'])
  },
  data() {
    return {
      selectedOptions: {
        type: null,
        platform: null,
        sortBy: null
      },
      validation: false,
    }
  },
  methods: {
    setType(option) {
      this.selectedOptions.type = option
    },
    setPlatform(option) {
      this.selectedOptions.platform = option
    },
    setSortBy(option) {
      this.selectedOptions.sortBy = option
    },
    searchFn() {
      this.$store.commit('setSplitData',[])
      if (this.validation) {
        this.$store.dispatch('fetchSortedGiveaways',this.selectedOptions)
      } else {
        this.$store.commit('setErrorMessage','Please make sure all options are selected')
      }
    }
  },
  watch: {
    selectedOptions: {
      deep: true,
      handler(val) {
        this.validation = !!Object.values(val).every(e => e);
      }
    }
  }
}
</script>

<style scoped>

.sortWrapperSub {
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 98;
}

.selected {
  color: white;
}

.select {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: #A3336B solid 2px;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  width: 150px;
  transition: ease-in-out 0.1s;
  background-color: #2c3e50;
  font-weight: bold;
}

.select:hover {
  color: white;
}

.submitSearch {
  color: white;
  background-color: #A3336B;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  display: flex;
  cursor: pointer;
}
.submitSearch:hover {
  color: #FBBD5F;
}
.validatedSubmitSearch {
  background-color: green;
}

.singleOption {
  margin: 10px;
}

.display {
  display: none;
}

.singleOption:hover .display {
  display: flex;
}

</style>