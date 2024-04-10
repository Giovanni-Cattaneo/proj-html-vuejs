<script>

import { state } from '../state.js'


export default {
    name: 'appFooter',
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
            ]
        }
    }
}
</script>

<template>

    <footer id="site_footer">

    </footer>

</template>

<style scoped>
#site_footer {
    background-image: url(../../public/assets/);
}
</style>
