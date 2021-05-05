<template>
  <div>
    <HeaderMain />
    <Nuxt />
    <FooterMain />
  </div>
</template>

<script>
import HeaderMain from '@/components/Header.vue';
import FooterMain from '@/components/Footer.vue';

export default {
  components: {
    HeaderMain,
    FooterMain
  },
};


</script>


<style lang="scss" >
html {
  font-size: 10px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  font-size: $fontBase;
  font-family: $fontBody;
  background: $blue;
  position: relative;
}
</style>
