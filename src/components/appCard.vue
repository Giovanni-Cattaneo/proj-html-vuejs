<script>

import { state } from '../state.js'


export default {
    name: 'appCard',
    data() {
        return {
            state: state,
            activeIndex: 2,
            cards: [
                {
                    id: 1,
                    name: 'Hurry Animate Blue Strack New Movie',
                    img: '../../public/assets/1.jpg',
                    category: 'Top Rating',
                    details: 'Details',
                    views: 381,
                    rating: '0/10',
                    active: false
                },
                {
                    id: 2,
                    name: 'Quisque Auctor Movie In Strack',
                    img: '../../public/assets/2.jpg',
                    category: 'Coming Soon',
                    details: 'Details',
                    views: 947,
                    rating: '4/10',
                    active: true,
                },
                {
                    id: 3,
                    name: 'New Movie Quinsque In Strack',
                    img: '../../public/assets/5.jpg',
                    category: 'Latest Movie',
                    details: 'Details',
                    views: 721,
                    rating: '0/10',
                    active: false,
                },
            ]
        }
    },

    methods: {
        // inseriamo un metodo, al click di uno dei due btn diminuiamo o aumentiamo 
        // activeIndex, se corrisponde all'id di una delle card la classe activeCard 
        // si sposta su quella
    }
}
</script>

<template>
    <div class="card_container d-flex">
        <div class="card" :class="{ activeCard: card.active }" v-for="card in cards" :key="card.name">
            <img :src="card.img" alt="">
            <div class="card_detail">
                <span class="card_rating"> <i class="fa-solid fa-star"></i> {{ card.rating }}</span>
                <h3 class="card_title">{{ card.name }}</h3>
                <p class="card_category">Category: {{ card.category }}</p>
                <span class="card_details">{{ card.details }}</span>
                <span class="card_views">{{ card.views }} Views</span>
            </div>
        </div>
    </div>



</template>

<style scoped>
.card_container {
    padding-top: 3rem;
    justify-content: center;
    align-items: center;


    .card {
        position: relative;
        border-radius: 10rem;
        height: 500px;
        opacity: 0.33;

        & img {
            height: 100%;
            border-radius: 1rem;

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

    .activeCard {
        height: 600px;
        opacity: 1;
    }


}
</style>
