import "remixicon/fonts/remixicon.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

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

gsap.from("#lg-menu h4", {
  y: -100,
  ease: "elastic.inOut(1, 0.5)",
  duration: 0.5,
  opacity: 0,
  stagger: 0.2,
});

gsap.from("#center-part1 h1", {
  duration: 1.5,
  x: "-100%",
  opacity: 0,
});

gsap.from("#center-part2 img", {
  x: "100%",
  opacity: 0,
  duration: 1.5,
});

gsap.from("#center-part1 p", {
  x: "-100%",
  opacity: 0,
  duration: 1.5,
});

gsap.from("#center-part1 button", {
  x: "-100%",
  opacity: 0,
  duration: 1,
});

gsap.from("#marquee", {
  y: "150%",
  opacity: 0,
  duration: 1,
});

function infiniteLoop() {
  const marquee = document.querySelector("#marquee");
  for (let i = 0; i < marquee.children.length; i++) {
    gsap.to("#item" + (i + 1), {
      x: `-=${marquee.offsetWidth}`,
      left: "-13rem",
      ease: "linear",
      repeat: -1,
      duration: 15,
      delay: -(15 / marquee.children.length) * i,
    });
  }
}

infiniteLoop();

function processesAnimation() {
  const processes = document.getElementById("processes");

  for (let i = 1; i <= processes.children.length; i++) {
    const process = document.getElementById("process" + i);

    process.addEventListener("click", () => {
      const process = document.getElementById("process" + i);
      for (let j = 1; j <= processes.children.length; j++) {
        const process = document.getElementById("process" + j);
        const add = document.getElementById("process" + j + "-add");
        const sub = document.getElementById("process" + j + "-sub");

        if (process !== document.getElementById("process" + i)) {
          gsap.to(process, {
            duration: 1,
            height: "12.5rem",
            backgroundColor: "#f3f3f3",
          });
          gsap.to(add, {
            duration: 1,
            rotation: 0,
            opacity: 1,
            display: "inline-block",
          });
          gsap.to(sub, {
            display: "none",
            opacity: 0,
            duration: 1,
            rotation: 0,
          });

          process.classList.add("overflow-y-hidden");
        }
      }

      const add = document.getElementById("process" + i + "-add");
      const sub = document.getElementById("process" + i + "-sub");

      if (
        process.classList.contains("overflow-y-hidden") &&
        process === document.getElementById("process" + i)
      ) {
        gsap.to(add, {
          duration: 1,
          rotation: 180,
          opacity: 0,
          display: "none",
        });
        gsap.to(sub, {
          display: "inline-block",
          opacity: 1,
          duration: 1,
          rotation: 180,
        });
        gsap.to(process, {
          duration: 1,
          height: "auto",
          backgroundColor: "#b9ff66",
          onComplete: () => {
            process.classList.remove("overflow-y-hidden");
          },
        });
      } else {
        gsap.to(process, {
          duration: 1,
          backgroundColor: "#f3f3f3",
          height: "12.5rem",
        });
        gsap.to(add, {
          duration: 1,
          rotation: 0,
          opacity: 1,
          display: "inline-block",
        });
        gsap.to(sub, {
          display: "none",
          opacity: 0,
          duration: 1,
          rotation: 0,
        });

        process.classList.add("overflow-y-hidden");
      }
    });
  }
}

processesAnimation();


function ServicesAnimation() {
  const children = document.querySelectorAll(".child");

  children.forEach((child, index) => {
    gsap.fromTo(child, 
      {
        opacity: 0,
        x: index % 2 === 0 ? "100%" : "-100%",
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: child,
          start: "top 100%",
          end: "top 50%",
          scrub: true
        }
      });
  });
}

gsap.from("#proposal-box", {
  opacity: 0,
  y: "50%",
  scrollTrigger: {
    trigger: "#proposal-box",
    start: "top 80%",
    end: "top 30%",
    scrub: true
  }
});

gsap.from("#case-studies", {
  opacity: 0,
  y: "50%",
  scrollTrigger: {
    trigger: "#case-studies",
    start: "top 100%",
    end: "top 30%",
    scrub: true
  }
});

ServicesAnimation();

function ProcessAnimation() {
  const children = document.getElementById("processes").children.length;
  for(let i = 1; i <= children; i++) {
    const child = document.getElementById("process" + i);
    gsap.fromTo(child, 
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: child,
          start: "top 80%",
          end: "top 30%",
          scrub: true
        }
      });
  }
}

ProcessAnimation();

function TeamAnimation(){
  const children = document.getElementById("team").children.length;
  console.log(children);
  

  for(let i=1; i<=children;i++){
    gsap.from(`#team-member-${i}`,{
      opacity: 0,
      y: '50%',
      scrollTrigger: {
        trigger: `#team-member-${i}`,
        start: "top 80%",
        end: "top 30%",
        scrub: true
      }
    })
  }

  gsap.from(`#team-btn`,{
    opacity: 0,
    y: '50%',
    scrollTrigger: {
      trigger: `#team-btn`,
      start: "top 80%",
      end: "top 30%",
      scrub: true
    }
  })
}

TeamAnimation();