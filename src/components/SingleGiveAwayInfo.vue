<template>
  <div class="singleGiveawayContainer">
    <div class="top">
      <div class="imgContainer">
        <img :src="item.thumbnail" alt="">
      </div>
      <div class="rightSide">
        <p>{{item.title}}</p>
        <p>Platforms: {{item.platforms}}</p>
        <p>Status: {{item.status}}</p>
        <p>Type: {{item.type}}</p>
        <p>Users: {{item.users}}</p>
      </div>
    </div>
    <div class="under">
      <p>Description: {{item.description}}</p>
      <p>Instructions: {{item.instructions}}</p>
      <p>End date: {{item.end_date}}</p>
      <p>Worth: {{item.worth}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleGiveAwayInfo",
  props: ['item'],
}
</script>

<style scoped>

.top {
  display: flex;
}

.under {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px 0 30px;
}
.under p {
  margin: 10px;
}

img {
  height: 100%;
  width: 100%;
}

.imgContainer {
}

.rightSide {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 70%;
}

.singleGiveawayContainer {
  width: 80%;
  margin-top: 100px;
  padding: 30px;
  background-color: rgba(97, 218, 251, 0.1);
  border: #A3336B solid 1px;
  border-radius: 5px;
  color: rgb(229,232,237);
}

</style>