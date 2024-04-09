<script>

import { state } from '../state.js'
import appCard from "./appCard.vue";


export default {
    components: {
        appCard
    },
    name: 'appMain',
    data() {
        return {
            state: state,
        }
    }
}
</script>

<template>
    <main id="site_main">
        <div class="jumbotron d-flex">
            <img src="../../public/assets/slider.jpg" alt="">
            <div class="jumbotron_message">
                <p>Welcome to our Site</p>
                <h1>Our special movies</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam maxime facilis doloribus
                    voluptatibus enim
                    cupiditate dolore corrupti libero autem veritatis.</p>
                <button>Read More</button>
            </div>
        </div>

        <div class="card_section">
            <div class="new_movie d-flex">
                <div class="new_movie_text d-flex">
                    <strong>New Movie</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, illum!</p>
                </div>
                <div class="arrows d-flex">
                    <button><i class="fa-solid fa-angles-left"></i></button>
                    <button><i class="fa-solid fa-angles-right"></i></button>
                </div>
            </div>
            <appCard />
        </div>
    </main>


</template>

<style scoped>
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

.card_section {
    margin-top: 3rem;

    .new_movie {
        width: 100%;
        justify-content: space-between;

        .arrows {
            align-items: center;
            gap: 1rem;

            & button {
                color: #13be13;
                background-color: black;
                border-radius: 50%;
                border: none;
                font-size: 1.4rem;
                border: 1px solid white;
                padding: 0.2rem 0.3rem;
            }

        }

        .new_movie_text {
            width: 90%;
            flex-direction: column;
            border-left: 2.5px solid #13be13;
            border-bottom: 0.1px solid darkgrey;
            padding-left: 0.3rem;
        }
    }
}
</style>
