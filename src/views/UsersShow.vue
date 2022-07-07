<script>
import axios from "axios";
import moment from "moment-timezone/builds/moment-timezone-with-data-2012-2022";

export default {
  data: function () {
    return {
      user: {},
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
    destroyFighter: function (fighterId) {
      axios.delete("favorite_fighters/" + fighterId + ".json").then((response) => {
        console.log("Deleted favorite fighter", response.data);
        this.$router.go();
      });
    },
    showTime: function () {
      const m = moment().tz("America/Los_Angeles").format();
      console.log(m.toString());
    },
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
  <div v-for="favorite_fighter in user.favorite_fighters" v-bind:key="favorite_fighter.id">
    <img :src="favorite_fighter.fighter.image" v-bind:alt="favorite_fighter.fighter.name" />
    <p>{{ favorite_fighter.fighter.name }}</p>
    <p>Age: {{ favorite_fighter.fighter.age }}</p>
    <p>Height: {{ favorite_fighter.fighter.height }}</p>
    <p>Weight: {{ favorite_fighter.fighter.weight }}</p>
    <p>Reach: {{ favorite_fighter.fighter.reach }}</p>
    <p>Stance: {{ favorite_fighter.fighter.stance }}</p>
    <p>Win: {{ favorite_fighter.fighter.win }}</p>
    <p>Loss: {{ favorite_fighter.fighter.loss }}</p>
    <p>Draw: {{ favorite_fighter.fighter.draw }}</p>
    <p>Organization: {{ favorite_fighter.fighter.organization }}</p>
    <p>
      <button v-on:click="destroyFighter(favorite_fighter.id)">Delete</button>
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
