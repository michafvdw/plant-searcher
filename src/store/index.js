import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
  state: {
		query: '',
		fruits: [
		  { msg: 'Monstera'},
		  { msg: 'Aloe vera'},
		  { msg: 'Bonsai'},
		  { msg: 'Cactus'},
		  { msg: 'Bananenplant'},
		  { msg: 'Ficus'},
		  { msg: 'Calathea'},
		]

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
