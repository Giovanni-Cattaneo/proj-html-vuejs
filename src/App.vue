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
    <div class="login d-flex">
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
    <div class="search d-flex">
      <img src="./assets/cropped-logo.png" alt="">
      <button>Search</button>
    </div>
    <div class="nav d-flex">
      <div class="caret d-flex">
        <span>Home <i class="fa-solid fa-caret-down"></i></span>
        <span>Celebrity <i class="fa-solid fa-caret-down"></i></span>
        <span>Movie <i class="fa-solid fa-caret-down"></i></span>
        <span>Page <i class="fa-solid fa-caret-down"></i></span>
        <span>Shop <i class="fa-solid fa-caret-down"></i></span>
        <span>Blog</span>
        <span>Contact Us</span>
      </div>
      <div class="shop">
        <i class="fa-solid fa-basket-shopping"></i>
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
.login {
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

.search {
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  & button {
    background-color: #13be13;
    border: none;
    padding: 1rem 1.3rem;
  }

}

.nav {
  justify-content: space-between;
  align-items: center;

  .caret {
    gap: 0.8rem;
  }
}
</style>
