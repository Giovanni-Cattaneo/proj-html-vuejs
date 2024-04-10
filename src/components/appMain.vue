<script>

import { state } from '../state.js'
import appCard from "./appCard.vue";
import appPlaylist from "./appPlaylist.vue"
import newMoviesCard from './newMoviesCard.vue'
import latestNewscard from './latestNewsCard.vue'


export default {
    components: {
        appCard,
        appPlaylist,
        newMoviesCard,
        latestNewscard,
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

        <div class="new_movie_section">
            <div class="new_movie_text d-flex">
                <strong>Movie Playlist</strong>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, illum!</p>
            </div>
            <div class="category d-flex">
                <span>All</span>
                <span>Coming Soon</span>
                <span>Latest Movie</span>
                <span>Top Rating</span>
                <span>Tv Series</span>
            </div>
            <newMoviesCard />
        </div>


        <div class="latest_news">
            <div class="new_movie_text d-flex">
                <strong>Latest News</strong>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, illum!</p>
            </div>

            <div class="news_card">
                <div class="main_card">
                    <img src="../../public/assets/blog-570x570.jpg" alt="">
                    <div class="card_detail">
                        <strong>Actor The Concept Movie High Concept Theory See The Post</strong>
                        <span class="details">Details</span>
                        <span class="comments">moviestar <strong>0 Comment Share</strong></span>
                    </div>
                </div>
                <div class="small_cards">
                    <latestNewscard />
                </div>
            </div>
        </div>

        <div class="forum d-flex">
            <div class="inputs d-flex">
                <input type="text" placeholder="First Name">
                <input type="text" placeholder="Last Name">
                <input type="text" placeholder="Email Address">
            </div>
            <button type="button">Subscribe</button>
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
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        align-items: center;

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

.new_movie_section {
    margin-top: 3rem;

    .category {
        margin-top: 1rem;
        gap: 1.5rem;

        >span:nth-child(1) {
            color: #13be13;
        }
    }
}

.latest_news {
    margin-top: 4rem;

    .news_card {
        padding-top: 3rem;
        display: flex;
        gap: 1rem;
    }


    .main_card {
        position: relative;
        width: 50%;

        & img {
            opacity: 0.63;
            height: 100%;
        }

        .card_detail {
            max-width: 570px;

            >strong {
                font-size: 1.6rem;
                position: absolute;
                bottom: 8rem;
                left: 3rem;
            }

            .details {
                position: absolute;
                background-color: #182028;
                padding: 0.3rem 0.5rem;
                bottom: 4rem;
                border-top-right-radius: 1rem;
                border-bottom-right-radius: 1rem;

            }

            .comments {
                position: absolute;
                right: 1rem;
                bottom: 4rem;


            }
        }
    }

    .small_cards {
        width: 50%;
    }
}

.forum {
    margin-top: 3rem;
    background-image: url(../../public/assets/form-bg-1.png);
    height: 400px;
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;

    .inputs {
        justify-content: space-evenly;
        align-items: center;
        gap: 5rem;

        & input {
            background-color: transparent;
            border: 1px solid white;
            padding: 1rem 2rem;
            border-radius: 1.4rem;
            color: white;
        }

        & input::placeholder {
            color: rgb(216, 216, 216);
        }
    }

    & button {
        padding: 1rem;
        border-radius: 1.4rem;
        border: none;
        background-color: #182028;
    }
}

.forum button:hover {
    background-color: white;
}
</style>
