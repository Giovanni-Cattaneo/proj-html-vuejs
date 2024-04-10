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
    <div class="container">
        <div class="footer_container">
            <div class="about">
                <h4>About Us</h4>
                <hr>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ad quaerat, consequatur dignissimos
                    atque inventore aut illum, sed porro sunt explicabo blanditiis impedit accusantium, itaque et enim
                    aliquam maiores voluptas?</p>
                <div class="icons"></div>
            </div>
            <div class="movie_category">
                <h4>Movie Category</h4>
                <hr>
                <ul>
                    <li>English New Movie</li>
                    <li>Hindi All Movie</li>
                    <li>Latest Tamil Movie</li>
                    <li>New Top Rating Movie</li>
                    <li>Horn New Movie</li>
                    <li>Animation New movie</li>
                </ul>
            </div>
            <div class="information">
                <h4>Information</h4>
                <hr>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ad quaerat, consequatur dignissimos
                    atque inventore aut illum, sed porro sunt explicabo blanditiis impedit accusantium, itaque et enim
                    aliquam maiores voluptas?</p>
                <div class="icons"></div>
            </div>
            <div class="recent_post">
                <h4>Recent Post</h4>
                <hr>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ad quaerat, consequatur dignissimos
                    atque inventore aut illum, sed porro sunt explicabo blanditiis impedit accusantium, itaque et enim
                    aliquam maiores voluptas?</p>
                <div class="icons"></div>
            </div>
        </div>
    </div>


</template>

<style scoped>
.container::before {
    content: "";
    max-width: 1920px;
    background-image: url(../../public/assets/ft-bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    margin: 0 -300px;
    height: 500px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    z-index: 1;
}

.container {
    height: 500px;

    .footer_container {
        display: flex;
        padding-top: 4rem;
        gap: 1.5rem;

        & hr {
            width: 30px;
        }

        .about,
        .movie_category,
        .information,
        .recent_post {
            width: 16%;
        }

    }

}
</style>
