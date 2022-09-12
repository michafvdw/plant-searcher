<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <SearchComponent msg="Welcome to Your Vue.js App"/>
	<AddComponent msg="Wdadwd"/>
  </div>
</template>

<script>
// @ is an alias to /src

import SearchComponent from '../components/SearchComponent.vue';
import AddComponent from '../components/AddComponent.vue';

export default {
  name: 'Home',
  components: {
    SearchComponent,
	AddComponent
}
}
</script>
