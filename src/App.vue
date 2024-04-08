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
    <div class="jumbotron d-flex">
      <img src="./assets/slider.jpg" alt="">
      <div class="jumbotron_message">
        <p>Welcome to our Site</p>
        <h1>Our special movies</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam maxime facilis doloribus voluptatibus enim
          cupiditate dolore corrupti libero autem veritatis.</p>
        <button>Read More</button>
      </div>
    </div>
  </main>
  <!-- /#site_main -->

  <footer id="site_footer">

  </footer>
  <!-- /#site_footer -->

</template>

<style>
.jumbotron {
  justify-content: center;
  position: relative;

  & img {
    width: 1920px;
    margin: auto;
  }

  .jumbotron_message {
    position: absolute;
    width: 300px;
    text-align: center;
    top: 5rem;
    right: 10rem;

    & button {
      background-color: #13be13;
      border: none;
      padding: 0.5rem 0.8rem;
    }
  }
}
</style>
