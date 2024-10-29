import { gsap } from "gsap";



const wheelListener = () => {
  window.addEventListener("wheel", (e) => {
    console.log(e.deltaY);
    if (e.deltaY > 0) {
      gsap.to("#marque", {
        transform: "translateX(0%)",
        repeat: -1,
        duration: 4,
        ease: "none",
      });
      gsap.to("#marque img", { rotate: 0 });
    } else {
      gsap.to("#marque", {
        transform: "translateX(-100%)",
        repeat: -1,
        duration: 4,
        ease: "none",
      });
      gsap.to("#marque img", { rotate: 180 });
    }
  });
};
wheelListener();