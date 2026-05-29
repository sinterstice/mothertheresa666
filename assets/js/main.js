import Glide from '@glidejs/glide';

new Glide('.glide', {
    autoplay: 5000,
    type: 'carousel',
    perView: 5,
    gap: 20,
    peek: 50,
    breakpoints: {
        512: {
            perView: 1
        },
        768: {
            perView: 2
        },
        1024: {
            perView: 3
        },
        1200: {
            perView: 5
        }
    },
    animationDuration: 800,
    animationTimingFunc: 'ease-in-out'
}).mount();

console.log('hello world')
