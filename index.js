const navigation = document.querySelector('nav');
const menu = document.querySelectorAll("nav li");
const welcome = document.querySelectorAll(".welcome")

window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        navigation.classList.add('anim-links');
    } else {
        navigation.classList.remove('anim-links');
    }
});

window.addEventListener('load', () => {
    const timeline = gsap.timeline({ paused: true });
    timeline
        .staggerFrom(menu, 2, { top: -50, opacity: 0, ease: "power2.out" }, 0.3)
        .staggerFrom(welcome, 1, { opacity: 0, ease: "power2.out" }, 0.3, '-=1.5')

    timeline.play();
})
