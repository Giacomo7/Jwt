<template>
    <div class="home">
        <h1>Welcome in Fonarcom Single Page Application</h1>
        <pre>{{this.message}}</pre>
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
        }
    },
	created: async function() {
			this.message="Benvenuto!"
			try {
				const data = await authService.me();
				this.message = data
			} catch (err) {
				console.error(err);
			}
	}
})
</script>