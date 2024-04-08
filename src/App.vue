<script>

import { state } from './state.js'

export default {
  data() {
    return {
      state: state
    }
  }
}
</script>

<template>

  <header id="site_header">
    <div class="icons-container d-flex">
      <div class="notification d-flex">
        <i class="fa-regular fa-envelope"></i>
        <span>Supershit Top Movie</span>
        <a href="">**King Star**</a>
        <div class="icons d-flex">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin-in"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-google-plus-g"></i>
        </div>
      </div>
      <div class="login d-flex">
        <i class="fa-solid fa-lock"></i>
        <span>Login</span>
      </div>
    </div>

    <h1>{{ state.message }}</h1>
  </header>
  <!-- /#site_header -->

  <main id="site_main">

  </main>
  <!-- /#site_main -->

  <footer id="site_footer">

  </footer>
  <!-- /#site_footer -->

</template>

<style scoped>
.icons-container {
  justify-content: space-between;

  .d-flex {
    align-items: center;
    gap: 0.4rem;
  }

  .icons {
    margin-left: 1rem;
  }

  & a {
    color: #13be13;
    text-decoration: none;
  }
}
</style>
