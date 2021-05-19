<template>
    <div class="home">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>LOGIN</h1>
                    <form class="row g-3">
                        <div class="col-md-6 offset-md-3 ">
                            <label for="username"  class="form-label">Username: </label>
                            <input id="username" type="text" name="username" v-model="login.username" class="form-control"/>
                        </div>
                        <div class="col-md-6 offset-md-3 ">
                            <label for="password"  class="form-label">Password: </label>
                            <input id="password" type="password" name="password" v-model="login.password" class="form-control" />
                        </div>
                        <div class="col-12">
                            <input type="submit" value="Login" class="btn btn-primary" @click.prevent="onLogin($event)" />
                        </div>
                    </form>
                    <br>
                    <p class="message">{{this.message}}</p>
                    <pre>{{this.token}}</pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */

import { defineComponent } from 'vue'
import authService from '../services/auth';

export default defineComponent({
  name: 'LoginPage',
  data () {
      return {
          message:'',
          token:'',
          login:{
              username:'',
              password:''
          }
      }
  },
  methods: {
      async onLogin (event) {
          this.message="Login in corso..."
          try {
              const data = await authService.login(this.login);
              if(data.token){
              	this.message = "Token:";
                this.token = data.token
              }
          } catch (err) {
              console.error(err);
          }
      }
  }
})
</script>

<style>
    .message {
        color:red;
    }
</style>