<script>

import { state } from './state.js'
import appHeader from "./components/appHeader.vue";
import appMain from "./components/appMain.vue";


export default {
  components: {
    appHeader,
    appMain,
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

  <footer id="site_footer">

  </footer>
  <!-- /#site_footer -->

</template>

<style></style>
