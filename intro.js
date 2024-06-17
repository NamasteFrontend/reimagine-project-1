let topImg = document.querySelector(".top-img");
let Video = document.querySelector("#bg-video");

let content = document.querySelector(".content");
let cursor = document.querySelector(".cursor");

content.addEventListener("mousemove", function(dets) {
    gsap.to(cursor,{
    x:dets.x - 50,
    y:dets.y - 50
})
})
content.addEventListener("mouseenter", function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
content.addEventListener("mouseleave", function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})

  let flag = 0;

cursor.addEventListener('click', () => {
    if(flag == 0) {
        let tl = gsap.timeline();

        tl.to(topImg, {
            opacity: 0,
            // duration: -5
        },'a')
       Video.play();
    }
})


document.addEventListener("mousemove", function(dets){
    document.querySelectorAll(".img").forEach((elem) => {
       const position = elem.getAttribute("value");
       let x = (window.innerWidth - dets.clientX * position)/50;
       let y = (window.innerHeight - dets.clientY * position)/50;

    //   elem.style.transform = `translateX(${x}px) translateY(${y}px)`
       gsap.to(elem,{
        transform: `translateX(${x}px) translateY(${y}px)`
       })
    })
})

// button.addEventListener('click', () => {
//     if (flag == 0) {
//         let tl = gsap.timeline()
//         tl.to(topImg, {
//             opacity: 0,
//             duration: 0.5
//         },'a')
//         tl.to(bottomVideo, {
//             opacity: 1,
//             duration: 0.5
//         },'a')
//         flag = 1
//     } else {
//         let tl = gsap.timeline()
//         tl.to(topImg, {
//             opacity: 1,
//             duration: 0.3
//         })
//         tl.to(bottomVideo, {
//             opacity: 0,
//             duration: 0.3
//         })
//         flag = 0
//     }

// })
