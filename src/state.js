import { reactive } from 'vue'

export const state = reactive({
    message: 'Welcome to Movie Star',
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
})