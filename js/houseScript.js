gsap.registerPlugin(ScrollTrigger);

const t1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".container_img",
        scrub: true,
        start: "top top",
        end: "+=2000",
        pin: true,
    }
})

t1.to(".img2", 2, {
    y: 10,
    ease: "none"
}, "start")
t1.to(".img3", 2, {
    y: 10,
    ease: "none"
}, "start")
t1.to(".img4", 2, {
    y: 20,
    ease: "none"
}, "start")
t1.to(".img5", 2, {
    y: -40,
    ease: "none"
}, "start")
t1.to(".img6", 2, {
    y: -70,
    ease: "none"
}, "start")
t1.to(".img7", 2, {
    y: -120,
    ease: "none"
}, "start")
t1.to(".img8", 2, {
    y: -150,
    ease: "none"
}, "start")
t1.to(".img9", 2, {
    y: -170,
    ease: "none",
    scaleY: 1.2
}, "start")
t1.to(".box", 2, {
    height: "15vh",
    ease: "none",
}, "start")

const t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".para",
        scrub: true,
        start: "top top",
        end: "+=2000",
        pin: true,
        toggleActions: "restart none none reset"
    }
})

t2.from('h3', {
    x: 500,
    opacity: 0,
    ease: Power3.easeInOut
})
t2.from('h1', {
    x: -500,
    opacity: 0,
    ease: Power3.easeInOut
})
t2.from('p', {
    x: 500,
    opacity: 0,
    ease: Power3.easeInOut
})