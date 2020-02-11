<template>

  <div id="photoview-container">
    <div class="container" style="height: 100%;">
      <div class="columns" style="height: 100%;">

        <div class="column col-10 col-md-12" style="background-color: #1b1b1b; padding: 0;">
          <div class="flexbox row" style="height: 100%; width: 100%;">
            <img src="../../public/images/fiona-smallwood-iUxjs-F0voI-unsplash.jpg" class="centered" style="max-width: 100%; max-height: 100vh;">
            <div style="z-index: 2; position: fixed; bottom: 0; width: 100%; height: 7.5vh;">
              <div class="columns" style="height: 100%;">
                <div class="column col-10 col-md-12">
                  <div class="columns" style="height: 100%;">
                    <div class="column col-6 col-md-8 col-sm-12 col-mx-auto">
                      <div class="flexbox col" style="height: 100%;">
                        <div class="centered flexbox row" style="width: 100%; justify-content: space-evenly; align-items: center; height: 100%; background-color:#101010; color: white;">
                          <p><u>S</u>ave</p>
                          <p><u>D</u>elete</p>
                          <p><u>P</u>revious</p>
                          <p><u>N</u>ext</p>
                          <a href="hawaii.html">E<span>xit</span></a>
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
          <div class="flexbox col" style="align-items: center;">
            <div style="background-color: purple; width: 150px; height: 100px; margin-top: 0.5rem;"></div>
            <div style="background-color: purple; width: 150px; height: 200px; margin-top: 0.5rem;"></div>
            <div style="background-color: purple; width: 150px; height: 120px; margin-top: 0.5rem;"></div>
            <div style="background-color: purple; width: 150px; height: 200px; margin-top: 0.5rem;"></div>
            <div style="background-color: purple; width: 150px; height: 120px; margin-top: 0.5rem;"></div>
            <div style="background-color: purple; width: 150px; height: 200px; margin-top: 0.5rem; margin-bottom: 0.5rem;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PhotoView extends Vue {

}
</script>

<style scoped>

 #photoview-container {
   z-index: 1; 
   position: fixed; 
   top: 0; 
   left: 0; 
   width: 100vw; 
   height: 100vh;
 }

</style>
