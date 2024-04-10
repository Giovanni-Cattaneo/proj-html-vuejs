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
        prevImage() {
            console.log('prev')
            this.activeIndex--
            if (this.activeIndex < 0) {
                this.activeIndex = this.cards.length - 1
            }
            this.updateActiveCard()
        },
        nextImage() {
            console.log('next')
            this.activeIndex++
            if (this.activeIndex >= this.cards.length) {
                this.activeIndex = 0
            }
            this.updateActiveCard()
        },
        updateActiveCard() {
            for (let i = 0; i < this.cards.length; i++) {
                if (this.cards[i].id === this.activeIndex + 1) {
                    this.cards[i].active = true
                } else {
                    this.cards[i].active = false
                }
            }
        }
    }
    // inseriamo un metodo, al click di uno dei due btn diminuiamo o aumentiamo 
    // activeIndex, se corrisponde all'id di una delle card la classe activeCard 
    // si sposta su quella

}
</script>

<template>
    <div class="card_section">
        <div class="new_movie d-flex">
            <div class="new_movie_text d-flex">
                <strong>New Movie</strong>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, illum!</p>
            </div>
            <div class="arrows d-flex">
                <button @click="prevImage()"><i class="fa-solid fa-angles-left"></i></button>
                <button @click="nextImage()"><i class="fa-solid fa-angles-right"></i></button>
            </div>
        </div>
    </div>
    <!-- new movies card section -->
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
.card_section {
    margin-top: 3rem;

    .new_movie {
        width: 100%;
        justify-content: space-between;

        .arrows {
            align-items: center;
            gap: 1rem;

            & button {
                color: #13be13;
                background-color: black;
                border-radius: 50%;
                border: none;
                font-size: 1.4rem;
                border: 1px solid white;
                padding: 0.2rem 0.3rem;
            }

        }

    }
}

.new_movie_text {
    width: 90%;
    flex-direction: column;
    border-left: 2.5px solid #13be13;
    border-bottom: 0.1px solid darkgrey;
    padding-left: 0.3rem;
}

.card_container {
    padding-top: 3rem;
    justify-content: center;
    align-items: center;

    .fa-star {
        color: #13be13;
    }


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
