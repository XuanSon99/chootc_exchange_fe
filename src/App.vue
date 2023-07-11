<template>
  <v-app data-app>
    <Header />
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
  background: #fbfdff;
}
</style>
