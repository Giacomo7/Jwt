<template>
  <header>
    <img alt="Vue logo" src="../assets/logo.png" height="50">
    <p>Fonarcom Login Test</p>
      <nav  v-if="this.isLoggedIn">
          <ul>
              <li><router-link to="/dashboard">Home</router-link></li>
              <li><router-link to="/logout">Logout</router-link></li>
          </ul>
      </nav>
      <nav v-else>
          <ul>
              <li><router-link to="/signup">Registrazione</router-link></li>
              <li><router-link to="/login">Login</router-link></li>
          </ul>
      </nav>
  </header>
</template>

<script>
/* eslint-disable */
import {mapGetters} from "vuex";
export default{
	computed: {
		...mapGetters(["isLoggedIn"]),
	},
}
</script>

<style lang="scss">
    header {
        display: flex;
        border-bottom: 1px solid #ccc;
        padding: .5rem 1rem;

        p {
            margin-left: 1rem;
        }
    }

    nav {
        margin-left: auto;

        ul {
            list-style: none;
        }

        ul li {
            display: inline-flex;
            margin-left: 1rem;
        }
    }
</style>
