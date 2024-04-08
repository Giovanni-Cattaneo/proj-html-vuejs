<script>

import { state } from '../state.js'


export default {
    name: 'appHeader',
    data() {
        return {
            state: state,
            navElements: [
                {
                    name: 'Home',
                    caret: true
                },
                {
                    name: 'Celebrity',
                    caret: true
                },
                {
                    name: 'Movie',
                    caret: true
                },
                {
                    name: 'Page',
                    caret: true
                },
                {
                    name: 'Shop',
                    caret: true
                },
                {
                    name: 'Blog',
                    caret: false
                },
                {
                    name: 'Contact Us',
                    caret: false
                },
            ]
        }
    }
}
</script>

<template>

    <header id="site_header">
        <div class="login d-flex">
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
                <span>Login</span>
            </div>
        </div>
        <div class="search d-flex">
            <img src="../assets/cropped-logo.png" alt="">
            <button>Search</button>
        </div>
        <div class="nav d-flex">
            <div class="caret d-flex">
                <span v-for="element in navElements">
                    {{ element.name }}
                    <i class="fa-solid fa-caret-down" v-if="element.caret"></i>
                </span>
            </div>
            <div class="shop">
                <i class="fa-solid fa-cart-shopping"></i>
                <span>0</span>
            </div>

        </div>
    </header>
    <!-- /#site_header -->

    <main id="site_main">

    </main>
    <!-- /#site_main -->

    <footer id="site_footer">

    </footer>
    <!-- /#site_footer -->

</template>

<style scoped>
.login {
    justify-content: space-between;

    .d-flex {
        align-items: center;
        gap: 0.4rem;
    }

    .icons {
        margin-left: 1rem;
    }

    & a {
        color: #13be13;
        text-decoration: none;
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
