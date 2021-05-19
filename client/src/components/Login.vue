<template>
    <div class="hello">
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
        <p>{{this.message}}</p>
    </div>
</template>

<script>
/* eslint-disable */
import { defineComponent } from 'vue'
import authService from '../services/auth';

export default defineComponent({
  name: 'Login',
  data () {
    return {
      message:'',
  	  login:{
  	  	username:'',
        password:''
      }
    }
  },
  methods: {
    async onLogin (event) {
      console.log('OnLogin')
      console.log(event)
			try {
				const data = await authService.login(this.login);
                this.message = data;
				//this.$router.push({name: data.user.role + '.dashboard', params: {'id':data.user.id} });
			} catch (err) {
				console.error(err);
			}
    }
  }
})
</script>

<style scoped>

</style>
