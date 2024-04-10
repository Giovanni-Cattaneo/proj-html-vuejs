<script>

import { state } from '../state.js'


export default {
    name: 'appHeader',
    props: ['navElements'],
    data() {
        return {
            state: state,
        }
    }
}
</script>

<template>

    <header id="site_header">
        <div class="top_header d-flex">
            <div class="notification d-flex">
                <i class="fa-regular fa-envelope"></i>
                <span>Supershit Top Movie</span>
                <a href="">**King Star**</a>
                <div class="icons d-flex">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-google-plus-g"></i>
                </div>
            </div>
            <div class="login d-flex">
                <i class="fa-solid fa-lock"></i>
                <a href="">Login</a>
            </div>
        </div>
        <!-- high part of header, newsletter, social and login -->

        <div class="search d-flex">
            <img src="../../public/assets/cropped-logo.png" alt="">
            <button>Search</button>
        </div>
        <!-- middle part of header syte icon and search -->

        <div class="nav d-flex">
            <div class="caret d-flex">
                <div class="cycle_element" v-for="element in navElements">
                    {{ element.name }}
                    <i class="fa-solid fa-caret-down" v-if="element.caret"></i>
                    <div class="menu">
                        <p>Home</p>
                        <p>Home 2</p>
                        <p>Home 3</p>
                        <p>Home 4</p>
                        <p>Home 5</p>
                        <p>Home 6</p>
                    </div>
                </div>
            </div>
            <div class="shop">
                <i class="fa-solid fa-cart-shopping"></i>
                <span>0</span>
            </div>
            <!-- bottom part of header menu list and cart -->

        </div>
    </header>
    <!-- /#site_header -->

</template>

<style scoped>
.menu {
    display: none;
    position: absolute;
    z-index: 10;
    background-color: #060f19;
    padding: 0.5rem 3rem 0.5rem 0.35rem;
    flex-direction: column;
    justify-content: start;
    align-items: start;
}

.cycle_element:hover {
    color: #13be13;
}

.cycle_element:hover .menu {
    display: flex;
    color: white;
}

.top_header {
    justify-content: space-between;

    .d-flex {
        align-items: center;
        gap: 0.4rem;
    }

    .icons {
        margin-left: 1rem;
        gap: 0.65rem;

        .fa-facebook-f {
            color: rgb(46, 46, 240);
        }

        .fa-twitter {
            color: #00b1e8;
        }

        .fa-linkedin-in {
            color: #049c98;
        }

        .fa-instagram {
            color: #bc3229;
        }

        .fa-google-plus-g {
            color: #ab0c18;
        }
    }

    & a {
        color: #13be13;
        text-decoration: none;
    }

    .login {

        & a {
            color: inherit;
        }
    }
}

.search {
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;

    & button {
        background-color: #13be13;
        border: none;
        padding: 1rem 1.3rem;
    }

}

.nav {
    justify-content: space-between;
    align-items: center;

    .caret {
        gap: 0.8rem;

        .fa-caret-down {
            padding-left: 0.1rem;
        }
    }

    .shop {
        position: relative;
        padding: 0.5rem;

        .fa-cart-shopping {
            font-size: 1.5rem;
        }

        >span {
            position: absolute;
            top: 0;
            font-size: 0.6rem;
            background-color: #13be13;
            border-radius: 50%;
            padding: 0 0.3rem;
            right: 0;
        }
    }
}
</style>
