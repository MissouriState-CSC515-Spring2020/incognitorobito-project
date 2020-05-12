<template>

  <div v-if="classVideos != null">
    <div class="columns" style="padding: 1rem;">
      <div class="column">
        <h5 style="margin-bottom: 1rem;"><router-link to="/channels/ChadKillingsworth">Chad Killingsworth | CSC 515/615 Spring 2020</router-link></h5>
        <div class="flexbox row video-masonry">
          <router-link to="/channels/ChadKillingsworth" class="masonry-brick" v-for="(vid, index) in [ classVideos[0] ]" 
                :key="index">
            <img :src="vid.snippet.thumbnails.high.url" style="max-width: 100%; border-radius: 4px;">
            <p>{{ vid.snippet.title }}</p>
          </router-link>
        </div>
        <p>{{ classVideos.length }} other videos</p>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts">
import { Component, Vue, Inject } from 'vue-property-decorator';
import { VideoService } from '../services/VideoService';

@Component
export default class Channels extends Vue {
  @Inject('videoService') private videoService!: VideoService;
  classVideos: unknown[] | null = null;

  async created()
  {
    this.classVideos = await this.videoService.getChadsVideos(25);
  }
}
</script>

<style scoped>


</style>
