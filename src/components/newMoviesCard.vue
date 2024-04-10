<script>

import { state } from '../state.js'


export default {
    name: 'newMoviesCard',
    data() {
        return {
            state: state,
            cards: [
                {
                    id: 1,
                    name: 'Quisque Auctor Movie In Strack',
                    img: '../../public/assets/2-1.jpg',
                    category: 'Coming Soon',
                    details: 'Details',
                    views: 947,
                    rating: '4/10',
                    active: true,
                    lentgh: '2.30.00',
                    published: 'February 12, 2016',
                },
                {
                    id: 2,
                    name: 'New Movie Quinsque In Strack',
                    img: '../../public/assets/5.jpg',
                    category: 'Latest Movie',
                    details: 'Details',
                    views: 721,
                    rating: '0/10',
                    active: false,
                    lentgh: '2.30.00',
                    published: 'February 12, 2016',
                },
                {
                    id: 3,
                    name: 'Legend of the white wolf',
                    img: '../../public/assets/3.jpg',
                    category: 'Latest Movie',
                    details: 'Details',
                    views: 721,
                    rating: '0/10',
                    active: false,
                    lentgh: '2.30.00',
                    published: 'February 12, 2016',
                },
                {
                    id: 4,
                    name: 'Fahreneit 451',
                    img: '../../public/assets/3-1.jpg',
                    category: 'Latest Movie',
                    details: 'Details',
                    lentgh: '2.30.00',
                    published: 'February 12, 2016',
                    views: 721,
                    rating: '0/10',
                    active: false,
                },
                {
                    id: 5,
                    name: 'Quisque Auctor Movie In Strack',
                    img: '../../public/assets/1.jpg',
                    category: 'Coming Soon',
                    details: 'Details',
                    views: 947,
                    rating: '4/10',
                    active: true,
                    lentgh: '2.30.00',
                    published: 'February 12, 2016',
                },
                {
                    id: 6,
                    name: 'New Movie Quinsque In Strack',
                    img: '../../public/assets/4.jpg',
                    category: 'Latest Movie',
                    details: 'Details',
                    views: 721,
                    rating: '0/10',
                    active: false,
                    lentgh: '2.30.00',
                    published: 'February 12, 2016',
                },
            ]
        }
    }
}
</script>

<template>
    <div class="card_container d-flex">
        <div class="card" v-for="card in cards" :key="card.name" @prevImage="prev()" @nextimage="next()">
            <img :src="card.img" alt="">
            <div class="card_overlay"></div>
            <div class="card_detail">
                <span class="card_rating"> <i class="fa-solid fa-star"></i> {{ card.rating }}</span>
                <h3 class="card_title">{{ card.name }}</h3>
                <p class="card_category">Category: {{ card.category }}</p>
                <span class="card_details">{{ card.details }}</span>
                <span class="card_views">{{ card.views }} Views</span>
                <span class="play"><i class="fa-solid fa-play"></i></span>
                <span class="card_length">{{ card.lentgh }}</span>
            </div>
        </div>
    </div>

</template>

<style scoped>
.card_overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(19, 190, 19, 0.3) 0%, rgba(19, 190, 19, 0.7) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.card:hover .card_overlay {
    opacity: 1;
    pointer-events: auto;
}

.release {
    display: none;
    top: 1rem;
    right: 0;
    background-color: #13be13;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    padding: 0.3rem 0.5rem;
}



.card_length {
    top: 1rem;
    left: 0;
    background-color: #13be13;
    padding: 0.3rem 0.5rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    display: none;
}

.play {
    top: 13rem;
    display: none;
    right: 9.5rem;
    font-size: 2rem;
    border: 2px solid white;
    border-radius: 50%;
    padding: 0 0.7rem;
}

.card:hover .card_length,
.card:hover .play,
.card:hover .release {
    display: block;
}

.card_container {
    padding-top: 3rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

    .fa-star {
        color: #13be13;
    }


    .card {
        position: relative;
        border-radius: 10rem;
        height: 450px;
        width: 350px;

        & img {
            height: 100%;
            width: 100%;
            border-radius: 1rem;

        }

        .card_detail {

            .card_rating,
            .card_title,
            .card_category,
            .card_details,
            .card_views,
            .play,
            .card_length {
                position: absolute;
            }



            .card_rating {
                top: 0;
                right: 0.3rem;
            }

            .card_title {
                bottom: 4rem;
                left: 2rem
            }

            .card_category {
                bottom: 3rem;
                left: 2rem;
            }

            .card_views,
            .card_details {
                background-color: rgb(29, 29, 29);
                padding: 0.3rem 0.5rem;
                bottom: 1rem;
            }

            .card_views {
                right: 0;
                border-top-left-radius: 1rem;
                border-bottom-left-radius: 1rem;
                padding-right: 1rem;
            }

            .card_details {
                left: 0rem;
                border-top-right-radius: 1rem;
                border-bottom-right-radius: 1rem;
                padding-left: 1rem;
            }

        }
    }

}
</style>
