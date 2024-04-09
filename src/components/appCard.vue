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
                    details: 'Setails',
                    views: 947,
                    rating: '4/10',
                    active: true,
                },
                {
                    name: 'New Movie Quinsque In Strack',
                    img: '../../public/assets/1.jpg',
                    category: 'Latest Movie',
                    details: '',
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
                <span> <i class="fa-solid fa-star"></i>{{ movie.rating }}</span>
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
            position: absolute;
        }
    }


}
</style>
