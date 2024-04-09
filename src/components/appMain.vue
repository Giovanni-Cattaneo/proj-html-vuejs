<script>

import { state } from '../state.js'
import appCard from "./appCard.vue";
import appPlaylist from "./appPlaylist.vue"


export default {
    components: {
        appCard,
        appPlaylist,
    },
    name: 'appMain',
    data() {
        return {
            state: state,
        }
    },
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
                    <button @click="$emit('prevImage')"><i class="fa-solid fa-angles-left"></i></button>
                    <button @click="$emit('nextImage')"><i class="fa-solid fa-angles-right"></i></button>
                </div>
            </div>
            <appCard />
        </div>

        <div class="playlist_section">
            <div class="new_movie_text d-flex">
                <strong>Movie Playlist</strong>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, illum!</p>
            </div>
            <div class="video_section d-flex">
                <div class="video">
                    <div class="title_video">
                        <div class="channel">
                            <img src="../../public/assets/channels4_profile.jpg" alt="">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing......</p>
                        </div>

                        <div class="clock">
                            <div class="clock-container">
                                <i class="fa-regular fa-clock"></i>
                                <span>Guarda più tardi</span>
                            </div>
                            <div class="share">
                                <i class="fa-solid fa-share"></i>
                                <span>Condividi</span>
                            </div>
                        </div>
                    </div>
                    <div class="watch">
                        <span>Guarda su</span> <i class="fa-brands fa-youtube"></i>
                        <span>Youtube</span>
                    </div>
                </div>
                <div class="playlist">
                    <appPlaylist />
                </div>
            </div>
        </div>

        <div class="jumbotron down-jumbotron d-flex">
            <img src="../../public/assets/coming-bg.jpg" alt="">
            <div class="jumbotron_message down_message">
                <h3>Coming Soon Movie</h3>
                <h1>Max still</h1>
                <div class="cast">
                    <p>JON PLAYER <span>&</span> EMILY ROSE</p>
                    <p>The countdown is finished</p>
                </div>
            </div>
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
        top: 10rem;
        right: 15rem;

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

    }
}

.new_movie_text {
    width: 90%;
    flex-direction: column;
    border-left: 2.5px solid #13be13;
    border-bottom: 0.1px solid darkgrey;
    padding-left: 0.3rem;
}



.playlist_section {
    margin-top: 5rem;
    margin-bottom: 3rem;

    .video_section {
        margin-top: 2rem;
        gap: 2rem;
        width: 96.5%;

        .video {
            width: 70%;
            height: 600px;
            background-color: black;
            position: relative;

            .watch {
                position: absolute;
                left: 0;
                bottom: 1rem;
                background-color: rgb(29, 29, 29);
                padding: 0.5rem;
            }

            .title_video {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0.5rem;

                .channel {
                    display: flex;
                    align-items: center;
                }

                .clock {
                    display: flex;
                    gap: 0.5rem;
                    align-items: center;

                    .clock-container,
                    .share {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                }
            }

            & img {
                width: 40px;
                border-radius: 50%;

            }
        }

        .playlist {
            background-color: #182028;
            height: 600px;
            width: 30%;
        }
    }
}

.down-jumbotron {

    .down_message {

        & h3 {
            color: #13be13;
        }

        .cast {
            background-color: #182028;
            padding: 0.3rem 0;

            & span {
                color: #13be13;
            }
        }

    }



}
</style>
