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
                    id: 2,
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
                    id: 3,
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
            ]
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="footer_container">
            <div class="about d-flex">
                <h4>About Us</h4>
                <hr>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ad quaerat, consequatur dignissimos
                    atque inventore aut illum, sed porro sunt explicabo blanditiis impedit accusantium, itaque et enim
                    aliquam maiores voluptas?</p>
                <div class="icons d-flex">
                    <div><i class="fa-brands fa-facebook-f"></i></div>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-google-plus-g"></i>
                </div>
            </div>
            <div class="movie_category d-flex">
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
            <div class="information d-flex">
                <h4>Information</h4>
                <hr>
                <ul>
                    <li>Youtube Video post</li>
                    <li>Actor Information</li>
                    <li>New Promotion</li>
                    <li>Latest Movie in English</li>
                    <li>Latest Film Product</li>
                    <li>Video New video</li>
                </ul>
            </div>
            <div class="recent_post d-flex">
                <h4>Recent Post</h4>
                <hr>

                <div class="post d-flex" v-for="card in cards">
                    <img :src="card.img" alt="">
                    <div class="detail d-flex">
                        <strong>{{ card.name }}</strong>
                        <p>{{ card.published }}</p>
                    </div>
                </div>
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
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    z-index: 1;
}

.container {
    margin-top: 3rem;

    .footer_container {
        display: flex;
        padding: 4rem 0;
        gap: 1.5rem;

        & h4 {
            margin-bottom: -0.4rem;
        }

        & hr {
            width: 30px;
        }

        & ul {
            list-style: none;
            line-height: 2rem;
        }

        .about,
        .movie_category,
        .information,
        .recent_post {
            width: 16%;
            flex-direction: column;
            gap: 0.5rem;
        }

        .detail {
            flex-direction: column;
            padding-left: 0.5rem;
            justify-content: flex-end;
            gap: 1rem;
        }

        .icons {
            gap: 1rem;
            z-index: 10;

            & i {
                background-color: transparent;
                border: 0.1px solid white;
                border-radius: 50%;
                padding: 0.6rem;
                font-size: 1.3rem;
                line-height: 1.1rem;

                &:hover {
                    background-color: transparent;
                    color: #13be13;
                    border: none;
                }
            }

            .fa-facebook-f {
                background-color: rgb(46, 46, 240);
            }

            .fa-twitter {
                background-color: #00b1e8;
            }

            .fa-linkedin-in {
                background-color: #049c98;
            }

            .fa-instagram {
                background-color: #bc3229;
            }

            .fa-google-plus-g {
                padding: 0.5rem 0.4rem;
                background-color: #ab0c18;
            }
        }



    }

}
</style>
