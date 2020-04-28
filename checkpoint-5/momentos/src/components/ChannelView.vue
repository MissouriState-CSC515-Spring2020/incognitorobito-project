<template>

  <div>
    <div class="flexbox col">
      <h1 class="centered">Hawaii</h1>
      <p class="centered">63 photos</p>
    </div>

    <div class="columns p-2">
      <div class="column">
        <h5 class="mb-2"><router-link to="/video">Last Saturday</router-link></h5>
        <div class="flexbox row photo-masonry">
          <router-link class="masonry-brick" to="/video"></router-link>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ChannelView extends Vue {

}
</script>

<style scoped>


</style>
