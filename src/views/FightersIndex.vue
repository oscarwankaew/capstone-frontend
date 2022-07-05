<script>
import axios from "axios";

export default {
  data: function () {
    return {
      fighters: [],
    };
  },
  created: function () {
    this.indexFighters();
  },
  methods: {
    indexFighters: function () {
      axios.get("/fighters.json").then((response) => {
        this.fighters = response.data;
        console.log("All fighters", response.data);
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <div v-for="fighter in fighters" v-bind:key="fighter.id">
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
      <p>
        <button>
          <router-link v-bind:to="`/fighters/${fighter.id}`">Select</router-link>
        </button>
      </p>
    </div>
  </div>
</template>

<style></style>
