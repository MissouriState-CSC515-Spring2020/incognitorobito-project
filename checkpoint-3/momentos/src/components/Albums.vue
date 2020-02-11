<template>

  <div>
    <div class="columns" style="padding: 1rem;">
      <div class="column">
          <h5 class="mb-2"><a href="hawaii.html">Hawaii</a></h5>
          <div class="flexbox row album-masonry" style="justify-content: space-between;">
          <div class="masonry-brick">1</div>
          <div class="masonry-brick">2</div>
          <div class="masonry-brick">3</div>
          <div class="masonry-brick">4</div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Albums extends Vue {

}
</script>

<style scoped>


</style>
