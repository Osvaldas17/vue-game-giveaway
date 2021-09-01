<template>
  <div @click="moreInfo(item.id)" class="singleGameCon">
    <p class="h-15">{{ item.title }}</p>
    <img class="h-40" :src="item.thumbnail" alt="">
    <div class="underImageDiv">
      <p>Platforms: {{ item.platforms }}</p>
      <p>Status: {{ item.status }}</p>
      <p>Type: {{ item.type }}</p>
      <p :class="[checkCost(item.worth) ? 'priceHigh' : 'priceLow']">Cost: {{ item.worth }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleGame',
  props: ['item'],
  methods: {
    moreInfo(id) {
      this.$router.push(`/selected-game/${id}`)
    },
    checkCost(worth) {
      if (worth !== 'N/A') {
        return Number(worth.split("$")[1]).toFixed(0) > 10;
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.singleGameCon {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  width: 250px;
  height: 380px;
  margin: 5px;
  padding: 5px;
  background-color: rgba(12, 86, 121, 0.1);
  color: rgb(229,232,237);
  border: solid 1px #A3336B;
  border-radius: 5px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
}

.singleGameCon:hover {
  background-color: #FBBD5F;
  color: black;
  transform: scale(1.05) translateY(-12px);
}

.priceLow {
  color: green;
}
.priceHigh {
  color: rgb(254,232,109);
}

.h-40 {
  height: 40%;
}

.h-15 {
  height: 15%;
}

img {
  max-width: 100%;
}
.underImageDiv {
  display: flex;
  justify-content: space-between;
  height: 45%;
  flex-direction: column;
  align-items: center;
}
.underImageDiv p {
  margin: 5px;
}


</style>
