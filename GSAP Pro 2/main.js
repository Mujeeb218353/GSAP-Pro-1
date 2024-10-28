import { gsap } from "gsap";
import 'remixicon/fonts/remixicon.css'

let tlOpenMenu = gsap.timeline()
// let tlCloseMenu = gsap.timeline()
let tl = gsap.timeline()

let sideBar = document.querySelector("#side-bar");
let nav = document.querySelector("#nav");
let main = document.querySelector("#main");
let menuItems = document.querySelectorAll("#menu-items > h4");
let openMenu = document.querySelector("#open-menu");
let closeMenu = document.querySelector("#close-menu");

tlOpenMenu.to(sideBar, {
    duration: .5,
    width: "20%",
    display: "block",
})
tlOpenMenu.to(menuItems, {
    duration: 1,
    y: 5,
    opacity: 1,
    stagger: .1,
})
tlOpenMenu.to("#close-menu", {
    duration: .3,
    opacity: 1,
})

// tlCloseMenu.to("#close-menu", {
//     duration: .3,
//     opacity: 0,
//     ease: "power4.in",
// })
// tlCloseMenu.to(menuItems, {
//     duration: .5,
//     y: -5,
//     opacity: 0,
//     stagger: .2,
//     ease: "power4.in",
// })
// tlCloseMenu.to(sideBar, {
//     duration: .3,
//     width: "0%",
//     display: "none",
//     ease: "power4.in",
// })

tlOpenMenu.pause()
// tlCloseMenu.pause()

openMenu.addEventListener("click", () => {
    tlOpenMenu.play()
});

closeMenu.addEventListener("click", () => {
    tlOpenMenu.reverse()
});
