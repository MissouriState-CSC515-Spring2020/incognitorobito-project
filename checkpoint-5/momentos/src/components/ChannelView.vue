<template>

  <div v-if="classVideos != null">
    <div class="flexbox col">
      <h1 class="centered">Chad Killingsworth</h1>
      <p class="centered">{{ classVideos.length }} videos</p>
    </div>

    <div class="columns p-2">
      <div class="column">
        <h5 class="mb-2">CSC 515/615 Spring 2020</h5>
        <div class="flexbox row video-masonry">
          <router-link class="masonry-brick"  v-for="(vid, index) in classVideos" 
                :to="{
                  name : 'VideoView',
                  params : { clickedVideoIndex : index, availableVideos : classVideos}
                }" 
                :key="index">
            <img :src="vid.snippet.thumbnails.high.url" style="max-width: 100%; border-radius: 4px;">
            <p>{{ vid.snippet.title }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts">
import { Component, Vue, Inject } from 'vue-property-decorator';
import { VideoService } from '../services/VideoService';

@Component
export default class ChannelView extends Vue {
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
