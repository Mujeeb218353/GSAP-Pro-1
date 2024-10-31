import 'remixicon/fonts/remixicon.css'
import { gsap } from "gsap";

let openMenuBtn = document.querySelector("#open-menu");
let closeMenuBtn = document.querySelector("#close-menu");
let navbar = document.querySelector("#navbar");
let sideBar = document.querySelector("#side-bar");

openMenuBtn.addEventListener("click", () => {
    // let tl = gsap.timeline()
    gsap.to(sideBar, {
        duration: .5,
        left: "0%",
    })

    
});

closeMenuBtn.addEventListener("click", () => {
    // let tl = gsap.timeline()
    gsap.to(sideBar, {
        duration: .5,
        left: "100%",
    })
    console.log("clicked");
    
})