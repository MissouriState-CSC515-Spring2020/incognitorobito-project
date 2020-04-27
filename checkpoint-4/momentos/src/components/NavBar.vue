<template>

  <nav class="columns mb-2" style="margin-top: 2rem;">
    <div class="column col-3 col-sm-10 col-md-6 col-mx-auto mb-2">
      <div class="flexbox row" id="nav-header-container">
        <h2 class="nav-header my-auto" :class="this.$route.path === '/' ? 'active' : 'inactive'"><router-link to="/">All Photos</router-link></h2>
        <h2 class="nav-header my-auto" :class="this.$route.path === '/albums' ? 'active' : 'inactive'"><router-link to="/albums">Albums</router-link></h2>
      </div>
    </div>
    <div class="column col-9 col-md-6 col-sm-4 col-mx-auto">
        <div class="flexbox row" style="height: 100%; justify-content: flex-end;">
          <p class="my-auto" id="user-greeting" style="">Hi, Mark</p>
          <figure class="avatar my-auto" id="user-icon" data-initial="MR"></figure>
        </div>
    </div>
  </nav>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {

}
</script>

<style scoped>

#user-greeting {
  font-weight: 600; 
  margin-right: 0.3rem;
}

#user-icon {
  background-color: #5755d9;
}

#nav-header-container {
  height: 100%;
  justify-content: space-between;
}

.nav-header {
  min-width: 5vw;
}

.nav-header.inactive {
  opacity: 0.45;
}

</style>
