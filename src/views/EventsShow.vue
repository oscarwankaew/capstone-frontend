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
  methods: {
    interestedEvent: function () {
      var params = { event_id: this.event.id };
      axios
        .post("/selected_events.json", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
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
  <section id="about" class="about">
    <div class="container">
      <div class="row">
        <img :src="event.event_image" v-bind:alt="event.title" />
        <center>
          <div class="text">
            <div class="title">
              <h1>{{ event.title }}</h1>
            </div>
            <h3>{{ event.date }}</h3>
            <h3>{{ event.time }}</h3>
            <h3>{{ event.location }}</h3>
            <div v-for="link in event.live_streams" v-bind:key="link.id">
              <h3>
                Live stream link:
                <a v-bind:href="link.url">{{ link.url }}</a>
              </h3>
            </div>
          </div>
          <div class="image">
            <p>
              <button v-on:click="interestedEvent()">Interested</button>
            </p>
          </div>
        </center>
        <!-- <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-center">
          <img src="assets/img/about.jpg" class="img-fluid" alt="" />
        </div> -->
        <div
          class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
          data-aos="fade-right"
          v-for="fighter in event.fighters"
          v-bind:key="fighter.id"
        >
          <div class="image">
            <a v-bind:href="`/fighters/${fighter.id}`"><img :src="fighter.image" v-bind:alt="fighter.name" /></a>
          </div>
          <center>
            <div class="title">
              <h4>{{ fighter.name }}</h4>
            </div>
            <p>Age: {{ fighter.age }}</p>
            <p>Height: {{ fighter.height }}</p>
            <p>Weight: {{ fighter.weight }}</p>
            <p>Reach: {{ fighter.reach }}</p>
            <p>Stance: {{ fighter.stance }}</p>
            <p>Win: {{ fighter.win }}</p>
            <p>Loss: {{ fighter.loss }}</p>
            <p>Draw: {{ fighter.draw }}</p>
            <p>Organization: {{ fighter.organization }}</p>
            <div class="title">
              <h4>
                <a v-bind:href="`/fighters/${fighter.id}`">
                  View fighter
                  <i class="bx bx-pointer"></i>
                </a>
              </h4>
            </div>
          </center>
        </div>
      </div>
    </div>
  </section>
  <!-- <div class="home">
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
    <p>
      <button v-on:click="interestedEvent()">Select</button>
    </p>
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
  </p> -->
</template>

<style>
.col-lg-6 {
  color: rgb(0, 0, 0);
  background-color: white;
}
.image {
  margin-top: 50px;
  margin-bottom: 50px;
}
.text {
  margin-top: 50px;
  margin-bottom: 25px;
}
.title {
  margin-top: 20wwpx;
  margin-bottom: 20px;
}
</style>
