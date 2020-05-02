<template>

  <div v-if="clickedVideo != null" id="videoview-container">
    <div class="container" style="height: 100%;">
      <div class="columns" style="height: 100%;">

        <div class="column col-10 col-md-12" style="background-color: #1b1b1b; padding: 0;">
          <div class="flexbox row" style="height: 100%; width: 100%;">
            <img id="static-player" :src="videoThumbURL" class="centered" style="max-width: 100%; max-height: 100vh;">
            <div style="z-index: 2; position: fixed; bottom: 0; width: 100%; height: 7.5vh;">
              <div class="columns" style="height: 100%;">
                <div class="column col-10 col-md-12">
                  <div class="columns" style="height: 100%;">
                    <div class="column col-6 col-md-8 col-sm-12 col-mx-auto">
                      <div class="flexbox col" style="height: 100%;">
                        <div class="centered flexbox row" style="width: 100%; justify-content: space-evenly; align-items: center; height: 100%; background-color:#101010; color: white;">
                          <p><u>L</u>ast</p>
                          <p><u>P</u>lay/Pause</p>
                          <p><u>N</u>ext</p>
                          <router-link to="/channels/ChadKillingsworth">E<span>xit</span></router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column col-2 hide-md" style="background-color: #101010; height: 100vh; overflow-y: scroll;">
          <h5 id="other-videos-header">Other videos in this playlist</h5>
          <div id="other-videos-container" class="flexbox col" style="align-items: center;">
            <img 
                v-for="(vid, index) in availableVideos"
                :class="'other-video-thumb' + (isVideoCurrentActive(index) ? ' active-vid' : '')"
                :key="index"
                :src="vid.snippet.thumbnails.medium.url">
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class VideoView extends Vue {
  @Prop({required: false})
  public clickedVideoIndex?: number;
  
  @Prop({required: false})
  public availableVideos?: unknown[];

  clickedVideo?: unknown;
  videoThumbURL?: string;

  isVideoCurrentActive(vidIndex: number)
  {
    return vidIndex === this.clickedVideoIndex;
  }

  created()
  {
    if(this.clickedVideoIndex == null || this.availableVideos == null) //Loose equals because they could be undefined at this point in the lifecycle.
    {
      this.$router.push('/error');
    }
    else
    {
      this.clickedVideo = this.availableVideos[this.clickedVideoIndex];
      //@ts-ignore
      this.videoThumbURL = this.clickedVideo['snippet']['thumbnails']['maxres']['url'] as string;
    }
  }

}

</script>

<style scoped>

 #videoview-container {
   z-index: 1; 
   position: fixed; 
   top: 0; 
   left: 0; 
   width: 100vw; 
   height: 100vh;
 }

 .active-vid {
   border: 4px solid #807fe2;
   border-radius: 4px;
 }

 .other-video-thumb {
   max-width: 150px; 
   height: auto; 
   margin-top: 0.75rem;
 }

 #other-videos-container:last-child {
   margin-bottom: 0.75rem;
 }

 #other-videos-header {
   text-align: center;
   color: white;
   margin: 0.75rem 0.75rem 0 0.75rem;;
   opacity: 0.9;
 }

</style>
