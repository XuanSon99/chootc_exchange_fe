<template>
  <v-app data-app>
    <Header v-if="$route.meta.header" />
    <div class="mheader" v-if="!$route.meta.hide">
      <v-btn icon @click="$router.back()" v-if="$route.meta.back">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <span>{{ $route.name }}</span>
    </div>
    <router-view />
    <Footer />
  </v-app>
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  components: { Header, Footer }
};
</script>
<style>
#app {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  color: #1f1f21;
  background: #fff;
  /* background: #fbfdff; */
}
</style>
