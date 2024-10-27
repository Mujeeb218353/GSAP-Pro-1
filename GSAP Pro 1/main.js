import { gsap } from "gsap";

let main = document.querySelector("#main");
let parentCursor = document.querySelector("#parent-cursor");
let childCursor = document.querySelector("#child-cursor");
let imageDiv = document.querySelector("#imgDiv");

let prevX = 0;
let prevY = 0;

const cursor = (e) => {
  gsap.to(parentCursor, {
    duration: 0.6,
    x: e.x,
    y: e.y,
    ease: "back.out",
  });

  let childX, childY;

  if (e.y > prevY) {
    childY = parentCursor.offsetTop - 80;
  } else {
    childY = parentCursor.offsetTop + 80;
  }

  if (e.x > prevX) {
    childX = parentCursor.offsetLeft - 80;
  } else {
    childX = parentCursor.offsetLeft + 80;
  }

  gsap.to(childCursor, {
    duration: 1,
    ease: "back.out",
    x: childX,
    y: childY,
  });

  prevX = e.x;
  prevY = e.y;

  gsap.to(childCursor, {
    duration: 1,
    x: parentCursor.offsetLeft,
    y: parentCursor.offsetTop,
    ease: "back.out",
  });

  gsap.to(parentCursor, {
    duration: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ease: "back.out",
  });
};

const mouseEnter = (e) => {
  gsap.to(parentCursor, {
    duration: 0.5,
    width: "4rem",
    height: "4rem",
  });

  gsap.to(childCursor, {
    duration: 0.5,
    width: "2rem",
    height: "2rem",
  });
}

const mouseLeave = (e) => {
  gsap.to(parentCursor, {
    duration: 0.5,
    width: "3rem",
    height: "3rem",
  });

  gsap.to(childCursor, {
    duration: 0.5,
    width: "1rem",
    height: "1rem",
  });
}

main.addEventListener("mousemove", cursor);
imageDiv.addEventListener("mouseenter", mouseEnter)
imageDiv.addEventListener("mouseleave", mouseLeave)