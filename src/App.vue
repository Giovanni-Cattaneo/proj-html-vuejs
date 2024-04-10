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

  <div class="copyright d-flex">
    <div class="terms d-flex">
      <span>Term And Condition</span>
      <span>Policy</span>
      <Span>About</Span>
    </div>
    <div class="rights">
      <p>&copy; 2020 <span>@Themepul</span> ALL Rights Reserved.</p>
    </div>
  </div>

  <!-- /#site_footer -->

</template>

<style>
#site_footer {
  position: relative;
  width: 1920px;
}

.copyright {
  justify-content: space-between;
  padding: 1rem;

  .terms {
    gap: 1.5rem;
  }

  .rights {

    & span {
      color: #13be13;
    }
  }
}
</style>
