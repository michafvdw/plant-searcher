import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
  state: {
		query: '',

		fruits: [
		  { 
			img: "https://cdn.webshopapp.com/shops/29478/files/361778137/650x650x2/hydroplant-monstera-obliqua.jpg",
		     msg: 'Monstera'},
		  {
			img: "https://mevrouwmonstera.nl/wp-content/uploads/2020/05/Aloe-ferox.jpg",
			msg: 'Aloe vera'},
		  {
			img: "https://www.plantje.nl/wp-content/uploads/2022/04/bonsai-ficus-51024.jpg",
			msg: 'Bonsai'},
		  { 
			img: "https://images.prismic.io/rbnl/0737820a-d068-4588-8898-1c168f49a15d_cactus-plant-in-pot.jpg?auto=compress,format&rect=0,0,1000,1000&w=500&h=500",
			msg: 'Cactus'},
		],

  },

  mutations: {

	setQuery(state, value ) {
		state.query = value;
	},

	addPlants(state, fruit) { state.fruits.push({ msg: fruit }) },

	deletePlants (state, index){
		state.fruits.splice(index, 1);
	},
  },

  getters: {

  filteredList (state) {
	return state.fruits.filter((item) => {
		return item.msg.toLowerCase().indexOf(state.query.toLowerCase()) !== -1
		})
  }

  },
  actions: {
  },
  modules: {
  }
})
