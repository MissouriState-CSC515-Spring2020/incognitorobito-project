<template>

  <div class="container">
    <div class="columns">

      <div class="column col-11 col-sm-12 col-mx-auto">

        <NavBar/>
        <!-- <Home/> -->
        <!-- <Albums/> -->
        <!-- <AlbumView/> -->
        <!-- <PhotoView/> -->
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from './components/NavBar.vue';
import Home from './components/Home.vue';
import Albums from './components/Albums.vue';
import AlbumView from './components/AlbumView.vue';
import PhotoView from './components/PhotoView.vue';

@Component({
  components: {
    NavBar,
    Home,
    Albums,
    AlbumView,
    PhotoView
  },
})
export default class App extends Vue {}
</script>

<style>

</style>
