<script>
import axios from "axios";
// import moment from "moment-timezone/builds/moment-timezone-with-data-2012-2022";

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
    unFavorite: function (fighterId) {
      axios.delete("favorite_fighters/" + fighterId + ".json").then((response) => {
        console.log("Unfavorite fighter", response.data);
        this.$router.go();
      });
    },
    removeEvent: function (eventId) {
      axios.delete("selected_events/" + eventId + ".json").then((response) => {
        console.log("Remove event", response.data);
        this.$router.go();
      });
    },
    // showTime: function () {
    //   const m = moment().tz("America/Los_Angeles").format();
    //   console.log(m.toString());
    // },
  },
};
</script>

<template>
  <div class="home">
    <div class="header">
      <h1>Profile</h1>
    </div>
    <div class="text1">
      <h1>{{ user.name }}</h1>
      <h4>Email: {{ user.email }}</h4>
      <h4>Timezone: {{ user.timezone }}</h4>
    </div>
  </div>
  <div class="header">
    <h2>Upcoming events</h2>
  </div>

  <div v-for="selected_event in user.selected_events" v-bind:key="selected_event.id">
    <img :src="selected_event.event.event_image" v-bind:alt="selected_event.event.title" />
    <div class="text1">
      <h4>{{ selected_event.event.title }}</h4>
      <h4>{{ selected_event.event.date }}</h4>
      <h4>{{ selected_event.event.time }}</h4>
      <h4>{{ selected_event.event.location }}</h4>
      <p>
        <button v-on:click="removeEvent(selected_event.id)">Remove</button>
      </p>
    </div>
  </div>
  <div class="header">
    <h2>Favorites</h2>
  </div>
  <div v-for="favorite_fighter in user.favorite_fighters" v-bind:key="favorite_fighter.id">
    <img :src="favorite_fighter.fighter.image" v-bind:alt="favorite_fighter.fighter.name" />
    <div class="boxed">
      <h3>{{ favorite_fighter.fighter.name }}</h3>
      <p>Age: {{ favorite_fighter.fighter.age }}</p>
      <p>Height: {{ favorite_fighter.fighter.height }}</p>
      <p>Weight: {{ favorite_fighter.fighter.weight }}</p>
      <p>Reach: {{ favorite_fighter.fighter.reach }}</p>
      <p>Stance: {{ favorite_fighter.fighter.stance }}</p>
      <p>Win: {{ favorite_fighter.fighter.win }}</p>
      <p>Loss: {{ favorite_fighter.fighter.loss }}</p>
      <p>Draw: {{ favorite_fighter.fighter.draw }}</p>
      <p>Organization: {{ favorite_fighter.fighter.organization }}</p>
    </div>
    <p>
      <button v-on:click="unFavorite(favorite_fighter.id)">Unfavorite</button>
    </p>
  </div>
  <p>
    <button>
      <router-link to="/">Home</router-link>
    </button>
  </p>
  <!-- <p>
    <button v-on:click="showTime()">click</button>
  </p> -->
</template>

<style></style>
