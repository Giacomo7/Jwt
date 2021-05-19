<template>
    <div class="home">
        <h1>LOGOUT</h1>
    {{this.message}}
    </div>
</template>

<script>
/* eslint-disable */
import { defineComponent } from 'vue'
import authService from '../services/auth';

export default defineComponent({
    name: 'Login',
    data() {
        return {
            message: 'Disconnessione in corso...'
        }
    },
    props: {
        success: String,
        error: String
    },
    async created(){
        console.log("Logout");
        try {
            const response = await authService.logout();
            if(response){
                this.message="Disconnessione andata a buon fine.";
            }
        }catch (err){
            this.message="C'è stato un errore durante la disconnessione.";
        }
    }
})
</script>
