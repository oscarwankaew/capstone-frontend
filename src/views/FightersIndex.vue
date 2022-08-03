<script>
/* eslint-disable */
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
  <section id="services" class="services">
    <div class="container">
      <div class="section-title">
        <span>Fighters</span>
        <h2>Fighters</h2>
        <h4>List of current active fighters</h4>
      </div>

      <div class="row">
        <div
          class="col-lg-4 col-md-6 d-flex align-items-stretch"
          data-aos="fade-up"
          data-aos-delay="100"
          v-for="fighter in fighters"
          v-bind:key="fighter.id"
        >
          <div class="icon-box">
            <div class="icon"><i class="bx bx-star"></i></div>
            <h4>
              {{ fighter.name }}
            </h4>
            <a v-bind:href="`/fighters/${fighter.id}`"><img :src="fighter.image" v-bind:alt="fighter.name" /></a>
            <div class="text1">
              <h5>Age: {{ fighter.age }}</h5>
              <h5>Height: {{ fighter.height }}</h5>
              <h5>Weight: {{ fighter.weight }}</h5>
              <h5>Reach: {{ fighter.reach }}</h5>
              <h5>Stance: {{ fighter.stance }}</h5>
              <h5>Win: {{ fighter.win }}</h5>
              <h5>Loss: {{ fighter.loss }}</h5>
              <h5>Draw: {{ fighter.draw }}</h5>
              <h5>Organization: {{ fighter.organization }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <div class="home">
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
  </div> -->
</template>

<style>
.text1 {
  margin-top: 25px;
  margin-bottom: 25px;
}
</style>
