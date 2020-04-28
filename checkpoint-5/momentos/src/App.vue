<template>

  <div class="container">
    <div class="columns">
      <div class="column col-11 col-sm-12 col-mx-auto">
        <NavBar/>
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from './components/NavBar.vue';

@Component({
  components: {
    NavBar
  },
})
export default class App extends Vue {}
</script>

<style>

</style>
