<template>
	<div>
	<input type="text" v-model="input" placeholder="Search fruits..." />
	
   <div class="item fruit" v-for="fruit in filteredList()" :key="fruit">
	 <p>{{ fruit }}</p>
   </div>

   <div class="item error" v-if="input&&!filteredList().length">
	  <p>No results found!</p>
   </div>
   </div>
 </template>



<script>

	const fruits = ["apple", "banana", "orange"];
	const input = ''


	export default {
		
		
	  name: 'SearchComponent',
	  props: {
		msg: String
		
	  },

	  data: {
		input: '',

		fruits: [
			{ msg: 'appel'},
			{ msg: 'peer'},
			{ msg: 'aardbei'}
		]
		
	  },

	  
	methods: {
		/*
    	filteredList: function () {
			//var vm = this
			return fruits.filter(function (fruit) {
			return fruit.toLowerCase().indexOf(query.toLowerCase()) !== -1
      })*/
	   filteredList: function  () {
		return fruits.filter((fruit) =>
		fruit.toLowerCase().includes(input.toLowerCase())
		);
	  }
	}
}


	
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
	  background-color: rgb(234, 242, 255);
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
	
	.fruit {
	  background-color: rgb(97, 62, 252);
	  cursor: pointer;
	}
	
	.error {
	  background-color: tomato;
	}
	</style>