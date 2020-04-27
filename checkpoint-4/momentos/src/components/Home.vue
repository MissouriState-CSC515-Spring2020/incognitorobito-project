<template>

  <div>
    <div class="columns" style="padding: 1rem;">
      <div class="column">
        <h5 class="mb-2">Today</h5>
        <div class="flexbox row photo-masonry mx-auto">
          <div class="masonry-brick">1</div>
          <div class="masonry-brick">2</div>
          <div class="masonry-brick">3</div>
          <div class="masonry-brick">4</div>
        </div>
      </div>
    </div>

    <div class="columns" style="padding: 1rem;">
      <div class="column">
        <h5 class="mb-2">Wed Jan 15</h5>
        <div class="flexbox row">
          <div class="masonry-brick">1</div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Recent extends Vue {

}
</script>

<style scoped>


</style>
