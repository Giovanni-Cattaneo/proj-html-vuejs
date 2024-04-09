<script>

import { state } from '../state.js'


export default {
    name: 'appCard',
    data() {
        return {
            state: state,
            cards: [
                {
                    name: 'Hurry Animate Blue Strack New Movie',
                    img: '../../public/assets/1.jpg',
                    category: 'Top Rating',
                    details: 'Details',
                    views: 381,
                    rating: '0/10',
                    active: false
                },
                {
                    name: 'Quisque Auctor Movie In Strack',
                    img: '../../public/assets/1.jpg',
                    category: 'Coming Soon',
                    details: 'Details',
                    views: 947,
                    rating: '4/10',
                    active: true,
                },
                {
                    name: 'New Movie Quinsque In Strack',
                    img: '../../public/assets/1.jpg',
                    category: 'Latest Movie',
                    details: 'Details',
                    views: 721,
                    rating: '0/10',
                    active: false,
                },
            ]
        }
    }
}
</script>

<template>
    <div class="card_container d-flex">
        <div class="card" v-for="card in cards" :key="card.name">
            <img :src="card.img" alt="">
            <div class="card_detail">
                <span class="card_rating"> <i class="fa-solid fa-star"></i>{{ card.rating }}</span>
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

    .card {
        position: relative;

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
            .card_detail {
                background-color: rgb(49, 49, 49);
                padding: 0.3rem 0.5rem;
                border-radius: 1rem;
                bottom: 1rem;
            }

        }
    }


}
</style>
