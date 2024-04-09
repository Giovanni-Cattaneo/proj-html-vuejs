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
                    category: 'Top Rating',
                    details: 'Details',
                    views: 381,
                    rating: '0/10',
                    active: false
                },
                {
                    name: 'Quisque Auctor Movie In Strack',
                    category: 'Coming Soon',
                    details: 'Setails',
                    views: 947,
                    rating: '4/10',
                    active: true,
                },
                {
                    name: 'New Movie Quinsque In Strack',
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

    <div class="card">
        <img src="" alt="">
        <div class="card_detail"></div>
    </div>


</template>

<style scoped></style>
