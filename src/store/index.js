import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
  state: {
		query: '',
		fruits: [
		  { msg: 'appel'},
		  { msg: 'peer'},
		  { msg: 'aardbei'}
		]

  },

  mutations: {
	setQuery(state, value ) {
		state.query = value;
	}
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
