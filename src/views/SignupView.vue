<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    isError: function () {
      if (
        this.newUserParams.password?.length < 6 ||
        this.newUserParams.password?.length > 20 ||
        this.newUserParams.password !== this.newUserParams.password_confirmation ||
        this.newUserParams.name?.length > 20
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>

<template>
  <div class="signup">
    <div class="header">
      <h2>Signup</h2>
    </div>
    <form v-on:submit.prevent="submit()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div class="text1">
        <label>Name:</label>
        <input type="text" v-model="newUserParams.name" />
        <p v-if="newUserParams.name && newUserParams.name.length < 2">
          <small class="text-danger">Must be at least 2 characters</small>
        </p>
      </div>
      <div class="text1">
        <label>Timezone:</label>
        <input type="text" v-model="newUserParams.timezone" />
        <p
          v-if="
            newUserParams.timezone &&
            !newUserParams.timezone.includes(`PT`) &&
            !newUserParams.timezone.includes(`MT`) &&
            !newUserParams.timezone.includes(`CT`) &&
            !newUserParams.timezone.includes(`ET`)
          "
        >
          <small class="text-danger">Must use PT, MT, CT, ET</small>
        </p>
      </div>
      <div class="text1">
        <label>Email:</label>
        <input type="email" v-model="newUserParams.email" />
        <p v-if="newUserParams.email && !newUserParams.email.includes(`@`) && !newUserParams.email.includes(`.com`)">
          <small class="text-danger">Must be valid and contains "@". and ".com"</small>
        </p>
      </div>
      <div class="text1">
        <label>Password:</label>
        <input type="password" v-model="newUserParams.password" />
        <p v-if="newUserParams.password && newUserParams.password.length < 6">
          <small class="text-danger">
            Password must be at least 6 characters
            <p>{{ 6 - newUserParams.password.length }} characters remaining</p>
          </small>
        </p>
        <p v-if="newUserParams.password && newUserParams.password.length > 20">
          <small class="text-danger">Cannot exceed 20 characters</small>
        </p>
      </div>
      <div class="text1">
        <label>Password confirmation:</label>
        <input type="password" v-model="newUserParams.password_confirmation" />
        <p v-if="newUserParams.password && newUserParams.password !== newUserParams.password_confirmation">
          <small class="text-danger">Must match password</small>
        </p>
      </div>
      <div class="text1">
        <input type="submit" value="Submit" v-bind:disabled="isError()" />
      </div>
    </form>
  </div>
</template>
<style>
.header {
  margin-top: 50px;
  margin-bottom: 25px;
}
</style>
