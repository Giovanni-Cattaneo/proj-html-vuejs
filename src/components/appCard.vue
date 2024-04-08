<script>

import { state } from '../state.js'


export default {
    name: 'appCard',
    data() {
        return {
            state: state,
            cards: [
                {
                    name: 'Quisque Auctor Movie In Strack',
                    category: 'Coming Soon',
                    details: 'Setails',
                    views: 947,
                    rating: '4/10',
                },
                {
                    name: 'Hurry Animate Blue Strack New Movie',
                    category: 'Top Rating',
                    details: 'Details',
                    views: 381,
                    rating: '0/10',
                },
                {
                    name: 'New Movie Quinsque In Strack',
                    category: 'Latest Movie',
                    details: '',
                    views: 721,
                    rating: '0/10',
                }
            ]
        }
    }
}
</script>

<template>



</template>

<style scoped></style>
