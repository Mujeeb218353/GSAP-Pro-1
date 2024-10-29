import { gsap } from "gsap";


let h1 = document.querySelector("h1");
let h1Content = h1.textContent.split("");
h1.textContent = "";

// console.log(h1Content)

let spans = ""
let halfVal = Math.floor(h1Content.length / 2)

h1Content.forEach((letter, i) => {
  if (i < halfVal) {
    
    spans += `<span class="left">${letter === " " ? "&nbsp" : letter}</span>`
  }else{
    spans += `<span class="right">${letter === " " ? "&nbsp" : letter}</span>`
  }
})

h1.innerHTML = spans

gsap.from("h1 .left", {
  duration: 1,
  y: 100,
  ease: "back.out",
  stagger: -0.15,
  opacity: 0,
  repeat: 5,
})

gsap.from("h1 .right", {
  duration: 1,
  y: 100,
  ease: "back.out",
  stagger: 0.15,
  opacity: 0,
  repeat: 5,
})