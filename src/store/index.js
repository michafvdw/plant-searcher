import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	strict: true,
  state: {
		query: '',
		tag: '',

		plants: [
		  { 
			img: "https://cdn.webshopapp.com/shops/29478/files/361778137/650x650x2/hydroplant-monstera-obliqua.jpg",
		     msg: 'Monstera',
			tags: 'easy'},
		  {
			img: "https://mevrouwmonstera.nl/wp-content/uploads/2020/05/Aloe-ferox.jpg",
			msg: 'Aloe vera',
			tags: 'easy'},
		  {
			img: "https://www.plantje.nl/wp-content/uploads/2022/04/bonsai-ficus-51024.jpg",
			msg: 'Bonsai',
			tags: 'hard'},
		  { 
			img: "https://images.prismic.io/rbnl/0737820a-d068-4588-8898-1c168f49a15d_cactus-plant-in-pot.jpg?auto=compress,format&rect=0,0,1000,1000&w=500&h=500",
			msg: 'Cactus',
			tags: 'easy'},
		],

  },

  mutations: {

	setQuery(state, value ) {
		state.query = value;
	},

	setTag (state, value) {
		state.tag = value
	},

	addPlants(state, item) { 
		console.log("HOI")
		state.plants.push(item)

	 },

	deletePlants (state, index){
		
		state.plants.splice(index, 1);
	},
  },

  getters: {

  filteredList (state) {
	return state.plants.filter((item) => {
		return item.msg.toLowerCase().indexOf(state.query.toLowerCase()) !== -1 && (item.tags && item.tags.toLowerCase().indexOf(state.tag.toLowerCase()) !== -1 ? true : false || true)
		})
  },

  filteredTags (state) {
	//todo filter tags and remove duplicates
	/*
	return state.plants.filter((item) => {
		return  [ ...new Set(item.tags)] 
	})*/
	/*const collection = state.plants.filter((item) => {
		return (item.tags.toLowerCase().indexOf(state.tag.toLowerCase()) !== -1)
	}).map( (x) => x.tags );
	*/
	return Array.from(new Set(state.plants.map( (x) => x.tags)));

  },	

  allPlants: state => {
	return state.plants
  },
  easyPlants: state=>{
	 return state.plants.filter(plants=>plants.tags=='easy')
  },
 hardPlants: state=>{
   return state.plants.filter(plants=>plants.tags=='hard')
 }


  },
  actions: {
  },
  modules: {
  }
})
