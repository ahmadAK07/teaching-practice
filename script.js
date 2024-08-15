// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#wrapper"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#wrapper", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#wrapper").style.transform ? "transform" : "fixed"
// });





// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();


gsap.from("#first-portion .image", {
    x: "-100%",
    opacity: 0.5,
    duration: 2
}) 
gsap.from("#first-portion .strip", {
    x: "200%",
    opacity: 0.5,
    duration: 2
}) 

// second portion-----------------
gsap.from("#second-portion .first-text", {
    opacity: 0,
    scale: 0,
    y: "200",
    duration: 1,
    scrollTrigger: {
        trigger: "#second-portion .first-text",
        scroller: "#wrapper",
        scrub: 2,
        end: "top 70%",
        start: "top 120%",
        marker:true
    }
});

gsap.from(" #second-portion .first-container", {
    opacity: 0,
    y: "200",
    duration: 1,
    scrollTrigger: {
        trigger: "#second-portion .first-container",
        scroller: "#wrapper",
        scrub: 2,
        end: "top 30%",
        start: "top 100%"
    }
});



// third portion -------------

gsap.from("#third-portion .second-text", {
    opacity: 0,
    scale: 0,
    y: "200",
    duration: 1,
    scrollTrigger: {
        trigger: "#third-portion .second-text",
        scroller: "#wrapper",
        scrub: 2,
        end: "top 80%",
        start: "top 120%"
    }
});
gsap.from(".second-container .box", {
    opacity: 0,
    scale: 0,
    y: "200",
    duration: 1,
    scrollTrigger: {
        trigger: ".second-container .box",
        scroller: "#wrapper",
        scrub: 2,
        end: "top 80%",
        start: "top 120%"
    }
});

// fourth-portion ---------
gsap.from("#fourth-portion .box2", {
    opacity: 0,
    scale: 0,

    x: "200",
    duration: 2,
    scrollTrigger: {
        trigger: "#fourth-portion .box2",
        scroller: "#wrapper",
        scrub: 2,
        end: "top 80%",
        start: "top 120%"
    }
});

// fifth-portion--------------

gsap.from("#fifth-portion .image", {
    scale: 0,
    y: "400",
    duration: 1,
    scrollTrigger: {
        trigger: "#fifth-portion .image",
        scroller: "#wrapper",
        scrub: 1,
        end: "top 100%",
        start: "top 150%"
    }
});
gsap.from("#fifth-portion .card", {
    scale: 0,
    y: "400",
    duration: 1,
    scrollTrigger: {
        trigger: "#fifth-portion .card",
        scroller: "#wrapper",
        scrub: 1,
        end: "top 120%",
        start: "top 150%"
    }
});


// sixth-portion -----------

gsap.from("#sixth-portion .left-side, #sixth-portion .right-side", {
    scale: 0,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#sixth-portion .left-side, #sixth-portion .right-side",
        scroller: "#wrapper",
        scrub: 1,
        end: "top 30%",
        start: "top 100%"
    }
});

// seventh-portion ---------
gsap.from("#seventh-portion .img", {
    scale: 0,
    opacity: 0,
    y: 200,
    scrollTrigger: {
        trigger: "#seventh-portion .img",
        scroller: "#wrapper",
        scrub: 1,
        end: "top 80%",
        start: "top 120%"
    }
});

// eighth-portion------

gsap.from("#eighth-portion .image", {
    
    opacity: 0,
    x: "-100%",
    scrollTrigger: {
        trigger: "#eighth-portion .image",
        scroller: "#wrapper",
        scrub: 1,
        end: "top 80%",
        start: "top 120%"
    }
});
gsap.from("#eighth-portion .form", {

    opacity: 0,
    x: "130%",
    scrollTrigger: {
        trigger: "#eighth-portion .form",
        scroller: "#wrapper",
        scrub: 2,
        end: "top 30%",
        start: "top 100%"
    }
});