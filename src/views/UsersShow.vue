<script>
import axios from "axios";
// import moment from "moment-timezone/builds/moment-timezone-with-data-2012-2022";

export default {
  data: function () {
    return {
      user: {},
      // favoriteFighters: [],
    };
  },
  created: function () {
    axios.get("/users/" + this.getUserId() + ".json").then((response) => {
      this.user = response.data;
      console.log("Show user", response.data);
    });
  },
  methods: {
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
    destroyFighter: function () {
      axios.delete("favorite_fighters/" + this.$route.params.id + ".json").then((response) => {
        console.log("Deleted favorite fighter", response.data);
      });
    },
    // showTime: function () {
    //   moment().format();
    // },
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ user.name }}</h1>
    <h2>Email: {{ user.email }}</h2>
    <h2>Timezone: {{ user.timezone }}</h2>
  </div>
  <h1>Upcoming events</h1>
  <div v-for="event in user.selected_events" v-bind:key="event.id">
    <p>
      <button>
        <router-link v-bind:to="`/events/${event.id}`">Select</router-link>
      </button>
    </p>

    <img :src="event.event_image" v-bind:alt="event.title" />
    <h3>{{ event.date }}</h3>
    <h3>{{ event.time }}</h3>
    <h3>{{ event.location }}</h3>
  </div>
  <h1>Favorites</h1>
  <div v-for="fighter in user.favorite_fighters" v-bind:key="fighter.id">
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
      <button v-on:click="destroyFighter()">Delete</button>
    </p>
  </div>
  <p>
    <button>
      <router-link to="/">Home</router-link>
    </button>
  </p>
  <p>
    <button v-on:click="showTime()">click</button>
  </p>
</template>

<style></style>
