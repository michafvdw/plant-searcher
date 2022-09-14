<template>
	<div id="app">
	  <div>
		
	

		<select v-model="tag" name="plants" id="lang">
			<option disabled value="">Please select one</option>
			<option class="item plant" v-for="tag in filteredTags" :key="tag" :value="tag">{{tag}}</option>

			</select>




		  <input type="text" v-model="query" placeholder="Search plants..." />
	
		  <div>
			<div class="item plant" v-for="plant in filteredList" :key="plant.msg">	

			<img v-bind:src= "plant.img" /> 
			<p>{{ plant.msg }}</p> 
		
			<button @click="deletePlants(index)">Delete plant</button>

		  </div>
		</div>
	  </div>
	  <div class="item error" v-if="query && !filteredList.length">
		  <p>No results found!</p>
	  </div>


	</div>
  </template>
  
  <script>
	import { ninvoke } from 'q';
import { mapMutations, mapGetters } from 'vuex'
	
  export default {
	name: 'SearchComponent',
	props: {
		msg: String
	},

	data () {
		return {
			selected: null,
			index: null
		}
	},

	computed: {

		...mapGetters([
      'filteredList',
	  'filteredTags',
	  'filteredTags2'
      // ...
    ]),
		query: {
			set (value) {
				this.setQuery(value);
			},

			get () {
				return this.$store.state.query;
			}
		},

		tag: {
			set (value) {
				this.setTag(value);
			},

			get () {
				return this.$store.state.tag;
			}
		},

		

		
	  },

	  methods: {
		...mapMutations([
  			 'setQuery',
			 'deletePlants',
			 'setTag'
   			 ]),

			onClick () {
				console.log('hoi')

				
				///return this.$store.getters.hardPlants;
				
				
			} 

		
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
	
	label {
     display: flex;
     align-items: center;
     justify-content: center;
     margin: 0 auto;
   }

   select {
        margin-bottom: 10px;
        margin-top: 10px;
        font-family: cursive, sans-serif;
        outline: 0;
        background: #2ecc71;
        color: #fff;
        border: 1px solid rgb(0, 83, 32);
        padding: 4px;
        border-radius: 9px;
      }
	
	.error {
	  background-color: tomato;
	}
	</style>