import anime from "../node_modules/animejs/lib/anime.es.js";

anime({
    targets: "div",
    borderRadius: ['0%', '50%'],
    backgroundColor: '#FFF',
    duration: 2000,
    easing: 'easeInOutQuad',
    loop: true,
    direction: 'alternate'
})