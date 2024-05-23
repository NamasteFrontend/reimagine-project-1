let nav = document.querySelector("nav");
let navIcon = document.querySelector(".nav-icon");

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

  
//   document.addEventListener("DOMContentLoaded", function() {
//     var hamburger = document.querySelector(".hamburger");
//     hamburger.addEventListener("click", function() {
//       this.classList.toggle("is-active");
//       if (this.classList.contains("is-active")) {
//         gsap.to(this, {duration: 0.5, rotation: 45});
//       } else {
//         gsap.to(this, {duration: 0.5, rotation: 0});
//       }
//     });
//   });
  


