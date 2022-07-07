<script>
import axios from "axios";

export default {
  data: function () {
    return {
      event: {},
    };
  },
  created: function () {
    axios.get("/events/" + this.$route.params.id + ".json").then((response) => {
      this.event = response.data;
      console.log("Show event", response.data);
    });
  },
  methods: {},
};
</script>

<template>
  <div class="home">
    <h2>{{ event.title }}</h2>
    <img :src="event.event_image" v-bind:alt="event.title" />
    <h3>{{ event.date }}</h3>
    <h3>{{ event.time }}</h3>
    <h3>{{ event.location }}</h3>
    <div v-for="link in event.live_streams" v-bind:key="link.id">
      <h3>
        Live stream link:
        <a href="{{ link.url }}">{{ link.url }}</a>
      </h3>
    </div>
    <div v-for="fighter in event.fighters" v-bind:key="fighter.id">
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
  <p>
    <button>
      <router-link to="/">Back to home</router-link>
    </button>
  </p>
</template>

<style></style>
