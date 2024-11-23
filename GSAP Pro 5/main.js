import "remixicon/fonts/remixicon.css";
import gsap from "gsap";


const openMenuBtn = document.querySelector("#open-menu-btn");
const sideBar = document.querySelector("#side-bar");
const closeMenuBtn = document.querySelector("#close-menu");

openMenuBtn.addEventListener("click", () => {
  document.getElementById(sideBar.id).classList.remove("hidden");
  gsap.to(sideBar, {
    duration: 0.5,
    left: "0%",
  });
});

closeMenuBtn.addEventListener("click", () => {
  gsap.to(sideBar, {
    duration: 0.5,
    left: "100%",
  });
});

gsap.from('#lg-menu h4',{
  y: -100,
  ease: "elastic.inOut(1, 0.5)",
  duration: .5,
  opacity: 0,
  stagger: .2
})

gsap.from('#center-part1 h1',{
  duration: 1.5,
  x: "-100%",
  opacity: 0,
})

gsap.from('#center-part2 img',{
  x: "100%",
  opacity: 0,
  duration: 1.5,
})

gsap.from('#center-part1 p',{
  x: "-100%",
  opacity: 0,
  duration: 1.5,
})

gsap.from('#center-part1 button',{
  x: "-100%",
  opacity: 0,
  duration: 1
})

gsap.from('#marquee', {
  y: "150%",
  opacity: 0,
  duration: 1
})

function infiniteLoop() {
  const marquee = document.querySelector("#marquee")
  for (let i = 0; i < marquee.children.length; i++) {
    gsap.to("#item" + (i + 1), {
      x: `-=${marquee.offsetWidth}`,
      left: "-13rem",
      ease: "linear",
      repeat: -1,
      duration: 15,
      delay: - ( 15 / marquee.children.length ) * i
    })
  }
  
}

infiniteLoop();