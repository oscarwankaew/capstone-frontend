<script>
/* eslint-disable */
export default {
  data: function () {
    return {
      isLoggedIn: false,
      flashMessage: "",
    };
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt;
      this.flashMessage = localStorage.getItem("flashMessage");
      localStorage.removeItem("flashMessage");
    },
  },
  methods: {
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>

<template>
  <div v-if="flashMessage" class="alert alert-success" v-on:click="flashMessage = null">
    {{ flashMessage }}
  </div>
  <header id="header" class="d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">
      <h1 class="logo"><a href="/">Fight Night Tracker</a></h1>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="/events">Events</a></li>
          <li><a class="nav-link scrollto" href="/fighters">Fighters</a></li>
          <li><a class="nav-link scrollto" href="/users/:id">Profile</a></li>
          <li class="dropdown">
            <a href="#">
              <span>Signup</span>
              <i class="bi bi-chevron-down"></i>
            </a>
            <ul>
              <li><a href="/signup">Signup</a></li>
              <li class="dropdown"></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/logout">Logout</a></li>
            </ul>
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  </header>

  <router-view />
</template>

<style>
#app {
  text-align: center;
  background-color: rgb(233, 233, 233);
}
</style>
