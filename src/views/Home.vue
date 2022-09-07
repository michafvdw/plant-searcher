<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <SearchComponent msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src

import SearchComponent from '../components/SearchComponent.vue';

export default {
  name: 'Home',
  components: {
    SearchComponent
}
}
</script>
