<script>

import { state } from './state.js'
import appHeader from "./components/appHeader.vue";

export default {
  components: {
    appHeader
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

  <main id="site_main">
    <div class="jumbotron">
      <img src="." alt="">
    </div>
  </main>
  <!-- /#site_main -->

  <footer id="site_footer">

  </footer>
  <!-- /#site_footer -->

</template>

<style></style>
