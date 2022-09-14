<template>
	<div id="app">
	  <div>
	  <input v-model="plant">
	 
	  <button :disabled="plant === null" @click=" () => addPlants( {msg: plant})">
          New plant
        </button>

	</div>
	</div>
  </template>
  
  <script>
	import { mapMutations } from 'vuex'
	
  export default {
	name: 'AddComponent',
	props: {
		msg: String
	},

	data () {
		return {
			plant: null
		}
	},

	computed: {


		
	  },

	  methods: {
		...mapMutations([
			 'addPlants'
   			 ]),

			 

		
	  }
  };
  </script>

<style>

	
	* {
	  padding: 0;
	  margin: 0;
	  box-sizing: border-box;
	  font-family: "Montserrat", sans-serif;
	}
	
	body {
	  padding: 20px;
	  min-height: 100vh;
	  background-color: rgb(182, 224, 182);
	}
	
	input {
	  display: block;
	  width: 350px;
	  margin: 20px auto;
	  padding: 10px 45px;
	  background: white no-repeat 15px center;
	  background-size: 15px 15px;
	  font-size: 16px;
	  border: none;
	  border-radius: 5px;
	  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
		rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	}
	
	.item {
	  width: 350px;
	  margin: 0 auto 10px auto;
	  padding: 10px 20px;
	  color: white;
	  border-radius: 5px;
	  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
		rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
	}
	
	.plant {
	  background-color: rgb(106, 173, 137);
	  cursor: pointer;
	}

	img {
		border: 1px solid #ddd;
		border-radius: 4px;
		padding: 5px;
		width: 150px;

	}

	button {
		background-color: rgb(32, 83, 56);
		border-radius: 5px;
		margin: 0 auto 10px auto;
		font-size: 16px;
		color: white;
		padding: 5px 10px;
	}
	
	</style>