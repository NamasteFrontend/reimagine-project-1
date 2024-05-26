let nav = document.querySelector("nav");
let navIcon = document.querySelector(".menu-icon");

let flag = 1;

navIcon.addEventListener("click", () => {
  if(flag == 1){
    console.log("hello")
    gsap.to("nav", {
        transform:"translateY(0%)",
        duration: 0.7,
        // ease: "pow"
    })
    flag = 0;
  }else{
    gsap.to("nav", {
        transform:"translateY(-50%)",
        duration: 0.5
    })
    flag = 1;
  }
})


document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", function() {
      this.classList.toggle("is-active");
    });
  });

  






let navTopMiddle = document.querySelector(".nav-top-middle");
// let navTopMiddle = document.querySelector('.top-middle-content')
// let navTopMiddle = document.querySelector(".nav-top");

navTopMiddle.addEventListener("mouseenter", function () {
    let tl = gsap.timeline()

    tl.to(".nav-top", {
        height: "23vw",
        duration: 0.3,
        // display: "block"
    })
    tl.to(".top-middle-content h5", {
        display: "block",
        transform: "translateY(0%)",
        stagger: {
            amount: 0.6
        }
        
    })
    

})

nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline()

    tl.to(".top-middle-content h5", {
        transform: "translateY(100%)",
        stagger: {
            amount: 0.2
        }
    })
    tl.to(".top-middle-content h5", {
        display: "none",
        duration: 0.01
    })
    tl.to(".nav-top", {
        height: '50%',
        duration: 0.2,
        // display:"none"
    })

})
