<script>
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
    <p>{{ fighter.name }}</p>
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
  <p>
    <button v-on:click="favoriteFighter()">Favorite</button>
  </p>
  <p>
    <button>
      <router-link to="/fighters">Back</router-link>
    </button>
  </p>
</template>

<style></style>
