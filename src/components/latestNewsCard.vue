<script>

import { state } from '../state.js'


export default {
    name: 'latestNewscard',
    data() {
        return {
            state: state,
            activeIndex: 2,
            cards: [
                {
                    id: 1,
                    name: 'Hurry Animate Blue Strack New Movie',
                    img: '../../public/assets/blog2-300x300.jpg',
                    category: 'Top Rating',
                    details: 'Details',
                    views: 381,
                    rating: '0/10',
                    active: false
                },
                {
                    id: 2,
                    name: 'Quisque Auctor Movie In Strack',
                    img: '../../public/assets/blog3-300x300.jpg',
                    category: 'Coming Soon',
                    details: 'Details',
                    views: 947,
                    rating: '4/10',
                    active: true,
                },
                {
                    id: 3,
                    name: 'New Movie Quinsque In Strack',
                    img: '../../public/assets/blog4-300x300.jpg',
                    category: 'Latest Movie',
                    details: 'Details',
                    views: 721,
                    rating: '0/10',
                    active: false,
                },
                {
                    id: 4,
                    name: 'New Movie Quinsque In Strack',
                    img: '../../public/assets/blog5-300x300.jpg',
                    category: 'Latest Movie',
                    details: 'Details',
                    views: 721,
                    rating: '0/10',
                    active: false,
                },
            ]
        }
    },
}
</script>

<template>
    <div class="card_container d-flex">
        <div class="card" v-for="card in cards" :key="card.name" @prevImage="prev()" @nextimage="next()">
            <img :src="card.img" alt="">
            <div class="card_detail">
                <h3 class="card_title">{{ card.name }}</h3>
                <span class="card_details">{{ card.details }}</span>
                <span class="card_views">Share</span>
            </div>
        </div>
    </div>



</template>

<style scoped>
.card_container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}

.card {
    position: relative;
    opacity: 0.63;

    & img {
        height: 100%;
    }

    .card_detail {

        .card_rating,
        .card_title,
        .card_category,
        .card_details,
        .card_views {
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

        .card_details {
            background-color: rgb(29, 29, 29);
            padding: 0.3rem 0.5rem;
            bottom: 1rem;
        }

        .card_views {
            right: 0;
            padding-right: 1rem;
            bottom: 1rem;
        }

        .card_details {
            left: 0rem;
            border-top-right-radius: 1rem;
            border-bottom-right-radius: 1rem;
            padding-left: 1rem;
        }

    }
}

.activeCard {
    height: 600px;
    opacity: 1;
}
</style>
