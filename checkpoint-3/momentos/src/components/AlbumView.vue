<template>

  <div>
    <div class="flexbox col">
      <h1 class="centered">Hawaii</h1>
      <p class="centered">63 photos</p>
    </div>

    <div class="columns p-2">
      <div class="column">
        <h5 class="mb-2"><a href="photo.html">Last Saturday</a></h5>
        <div class="flexbox row photo-masonry">
          <a class="masonry-brick" href="photo.html"></a>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AlbumView extends Vue {

}
</script>

<style scoped>


</style>
