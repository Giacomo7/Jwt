<template>
    <div class="hello">
        xxx
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
			message: ''
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
				this.message=this.success
			}
		}catch (err){
			this.message=this.error;
		}
	}
})
</script>

<style scoped>

</style>
