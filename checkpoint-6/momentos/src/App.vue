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
import { Component, Vue, Provide } from 'vue-property-decorator';
import { VideoService } from './services/VideoService';
const NavBar = () => import("./components/NavBar.vue");

@Component({
  components: {
    NavBar
  },
})
export default class App extends Vue {
  @Provide('videoService') private videoService: VideoService = new VideoService();

  created()
  {
    this.videoService.initialize();
  }
}
</script>

<style>

</style>
