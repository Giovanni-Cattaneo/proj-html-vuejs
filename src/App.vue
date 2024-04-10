<script>

import { state } from './state.js'
import appHeader from "./components/appHeader.vue";
import appMain from "./components/appMain.vue";
import appFooter from './components/appFooter.vue';


export default {
  components: {
    appHeader,
    appMain,
    appFooter,
  },
  data() {
    return {
      state: state,
    }
  }
}
</script>

<template>

  <appHeader />
  <!-- /#site_header -->
  <appMain />
  <!-- /#site_main -->

  <div id="site_footer">
    <appFooter />
  </div>

  <!-- /#site_footer -->

</template>

<style>
#site_footer {
  position: relative;
  width: 1920px;
}
</style>
