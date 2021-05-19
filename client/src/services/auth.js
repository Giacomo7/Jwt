/* eslint-disable */
import store from '../store'
import axios from 'axios'

const client = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL
})

export default {
	async registration (params) {
		try {
			const data = await this.call('POST','register', params)
			return data;
		} catch (err) {
			return err.response.data
		}
	},
	async login (params) {
     try {
       const data = await this.call('POST','login', params)
   		 store.dispatch('login', data)
   		 return data
   	} catch (err) {
	     return err.response.data
   	}
  },
	async me() {
		try {
			const response = await this.call("GET", 'me')
			if(response){
				return response
			}else{
				return false
			}
		} catch (err) {
				console.error(err);
				return false;
		}
	},
  async logout() {
	  try {
		  const response = await this.call("GET", 'logout')
		  store.dispatch('logout')
		  return true
	  } catch (err) {
		  console.error(err);
		  return false;
	  }

  },

  async call(method, url, params = {}) {
	  try {
	  	let response = ""
  		if (method === 'GET') {
  			response = await client.get(url, this.getHeaders())
  		} else {
  			response = await client.post(url, params, this.getHeaders())
  		}

  		console.log("Response");
	  	console.log(response);

  		if (response.status !== 200 && response.status !== 201 && response.status !== 422 ) {
  			if(response.status === 401){
				  store.dispatch('logout')
				  client.get("logout", this.getHeaders())
			  }
	  		return false
  		}

  		return response.data
  	} catch (err) {
  		return err.response.data
  	}
  },
  getHeaders() {
  	return {
  		headers: {
			  Authorization:
  				store.state.isLoggedIn === true
  					? 'Bearer ' + store.state.token
  					: '',
  			Accept: 'application/json',
  		}
  	}
  },
}
