<template>

  <div v-if="this.popularVideos != null">
    <div class="columns" style="padding: 1rem;">
      <div class="column col-sm-10 col-mx-auto">
        <h5 style="margin-bottom: 1rem;">Today</h5>
        <div class="flexbox row video-masonry">
          <a class="masonry-brick"  
                v-for="(vid, index) in popularVideos" 
                :href="(`https://www.youtube.com/watch?v=${vid.id}`)"
                :key="index">
            <img :src="vid.snippet.thumbnails.high.url" style="max-width: 100%; border-radius: 4px;">
            <p>{{ vid.snippet.title }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts">
import { Component, Vue, Inject } from 'vue-property-decorator';
import { VideoService } from '../services/VideoService';

@Component
export default class Recent extends Vue {
  @Inject('videoService') private videoService!: VideoService;
  popularVideos: unknown[] | null = null;
  
  async created()
  {
    this.popularVideos = await this.videoService.getMostPopularVideos(10);
  }
}
</script>

<style scoped>


</style>
