<script>

import { state } from '../state.js'


export default {
    name: 'appPlaylist',
    data() {
        return {
            state: state,
            movies: [
                {
                    id: 1,
                    name: 'Hurry Animate Blue Strack New Movie',
                    img: '../../public/assets/blog2-100x100.jpg',
                    category: 'Top Rating',
                    details: 'Details',
                    views: 381,
                    rating: '0/10',
                    active: false,
                    lentgh: '2.30.00',
                    published: 'February 12, 2016',
                },
                {
                    id: 2,
                    name: 'Quisque Auctor Movie In Strack',
                    img: '../../public/assets/2-1-100x100.jpg',
                    category: 'Coming Soon',
                    details: 'Details',
                    views: 947,
                    rating: '4/10',
                    active: true,
                    lentgh: '2.30.00',
                    published: 'February 12, 2016',
                },
                {
                    id: 3,
                    name: 'New Movie Quinsque In Strack',
                    img: '../../public/assets/5-100x100.jpg',
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
                    name: 'The Worst horor ever',
                    img: '../../public/assets/blog3-100x100.jpg',
                    category: 'Latest Movie',
                    details: 'Details',
                    views: 721,
                    rating: '0/10',
                    active: false,
                    lentgh: '2.30.00',
                    published: 'February 12, 2016',
                },
                {
                    id: 5,
                    name: 'Legend of the white wolf',
                    img: '../../public/assets/3-100x100.jpg',
                    category: 'Latest Movie',
                    details: 'Details',
                    views: 721,
                    rating: '0/10',
                    active: false,
                    lentgh: '2.30.00',
                    published: 'February 12, 2016',
                },
                {
                    id: 6,
                    name: 'Fahreneit 451',
                    img: '../../public/assets/3-1-100x100.jpg',
                    category: 'Latest Movie',
                    details: 'Details',
                    lentgh: '2.30.00',
                    published: 'February 12, 2016',
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
    <div class="playlist_heading">
        <h4>New Movie</h4>
        <span>Playing 24</span>
    </div>
    <div class="videos d-flex">
        <div class="movie d-flex" v-for="movie in movies" :key="movie.id">
            <img :src="movie.img" alt="">
            <div class="description d-flex">
                <h4>{{ movie.name }}</h4>
                <span><strong>{{ movie.views }} Views</strong></span>
                <div class="d-flex"><span>{{ movie.published }}</span> <span>{{ movie.lentgh }}</span></div>

            </div>
        </div>
    </div>

</template>

<style scoped>
.playlist_heading {
    height: 14%;
    border-bottom: 1px solid black;
    padding: 0.5rem;
}

.videos {
    flex-direction: column;
    height: 86%;
    overflow-y: scroll;
    gap: 0.3rem;
    padding: 0.4rem;

}

.movie {
    transition: background-color 300ms;
    cursor: pointer;
}

.movie:hover {
    background-color: darkgrey;
}

.description {
    flex-direction: column;
    justify-content: space-between;
    margin-left: 0.2rem;

    >.d-flex {
        justify-content: space-between;
    }
}
</style>
