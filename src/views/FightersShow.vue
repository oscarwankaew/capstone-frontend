<script>
/* eslint-disable */
import axios from "axios";

export default {
  data: function () {
    return {
      fighter: {},
    };
  },
  created: function () {
    axios.get("/fighters/" + this.$route.params.id + ".json").then((response) => {
      this.fighter = response.data;
      console.log("Show fighter", response.data);
    });
  },
  methods: {
    favoriteFighter: function () {
      var params = { fighter_id: this.fighter.id };
      axios
        .post("/favorite_fighters.json", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/fighters");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          this.errorStatus = error.response.status;
        });
    },
  },
};
</script>

<template>
  <div class="home">
    <img :src="fighter.image" v-bind:alt="fighter.name" />
    <div class="name">
      <h2>{{ fighter.name }}</h2>
    </div>
    <div class="boxed">
      <p>Age: {{ fighter.age }}</p>
      <p>Height: {{ fighter.height }}</p>
      <p>Weight: {{ fighter.weight }}</p>
      <p>Reach: {{ fighter.reach }}</p>
      <p>Stance: {{ fighter.stance }}</p>
      <p>Win: {{ fighter.win }}</p>
      <p>Loss: {{ fighter.loss }}</p>
      <p>Draw: {{ fighter.draw }}</p>
      <p>Organization: {{ fighter.organization }}</p>
    </div>
  </div>
  <div>
    <p>
      <button class="box" v-on:click="favoriteFighter()">Favorite</button>
    </p>
  </div>
  <p>
    <button class="back">
      <router-link to="/fighters">Back</router-link>
    </button>
  </p>
</template>

<style>
.name {
  margin-top: 50px;
  margin-left: 250px;
  margin-right: 250px;
}
.box {
  background-color: rgb(250, 5, 5);
  color: rgb(255, 255, 255);
}
.back {
  background-color: rgb(255, 255, 255);
}
.boxed {
  color: rgb(0, 0, 0);
  margin-bottom: 50px;
  margin-top: 50px;
  margin-left: 300px;
  margin-right: 300px;
  background-color: rgb(255, 255, 255);
}
</style>
