<template>
    <div class="home">
        <div class="container">
            <div class="row">
                <div class="col-12">
                <h1>REGISTRAZIONE</h1>
                    <form class="row g-3">
                        <div class="col-md-6 offset-md-3 ">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control" id="username" name="username" v-model="login.username">
                        </div>
                        <div class="col-md-6 offset-md-3 ">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" v-model="login.password">
                        </div>
                        <div class="col-md-6 offset-md-3 ">
                            <label for="confirm" class="form-label">Confirm Password</label>
                            <input type="password" class="form-control" id="confirm" name="confirm" v-model="login.password_confirmation">
                        </div>

                        <div class="col-12">
                            <input type="submit" value="Sign up" class="btn btn-primary" @click.prevent="onRegistration()">
                        </div>
                    </form>
                    <p>{{this.message}}</p>
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
    name: 'Registration',
    data () {
        return {
            message: '',
            login:{
                username:'',
                password:'',
                password_confirmation:''
            }
        }
    },
    methods: {
        async onRegistration () {
            try {
                this.message = "Inizio registrazione...";
                const data = await authService.registration(this.login);
                if(data.result === "success"){
                    this.message = "Registrazione andata a buon fine.";
                }else{
	                this.message = "C'è stato un errore durante la registrazione. ";
                	if(data.username){
			                this.message += "Il nome utente è stato già scelto. ";
                    }
	                if(data.password){
		                this.message += "Le password e la conferma della password non coincidono. " ;
	                }
                }
            } catch (err) {
                console.error(err);
            }
        }
    }
})
</script>
