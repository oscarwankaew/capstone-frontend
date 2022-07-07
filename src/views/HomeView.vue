<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Fight Night Tracker",
      events: [],
    };
  },
  created: function () {
    this.indexEvents();
  },
  methods: {
    indexEvents: function () {
      axios.get("/events.json").then((response) => {
        this.events = response.data;
        console.log("All events:", response.data);
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="event in events" v-bind:key="event.id">
      <h2>{{ event.title }}</h2>
      <p>
        <button>
          <router-link v-bind:to="`/events/${event.id}`">View event</router-link>
        </button>
      </p>
      <img :src="event.event_image" v-bind:alt="event.title" />
      <h3>{{ event.date }}</h3>
      <h3>{{ event.time }}</h3>
      <h3>{{ event.location }}</h3>
      <div v-for="link in event.live_streams" v-bind:key="link.id">
        <h3>
          Live stream link:
          <a v-bind:href="link.url">{{ link.url }}</a>
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
      </div>
    </div>
  </div>
</template>

<style></style>
