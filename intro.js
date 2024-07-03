let topImg = document.querySelector(".top-img");
let Video = document.querySelector("#bg-video");
let midVideo = document.querySelector('.mid-video');
let content = document.querySelector(".content");
let cursor = document.querySelector(".cursor");


if (window.innerWidth > 768) {
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
}




  let flag = 0;

cursor.addEventListener('click', () => {
    if(flag == 0) {
        let tl = gsap.timeline();

        
        tl.to(midVideo, {
            opacity: 0,
            duration: -2
        },)
        tl.to(topImg, {
            opacity: 0,
            // duration: -5
        },)
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



// let topImg = document.querySelector(".top-img");
// let Video = document.querySelector("#bg-video");
// let midVideo = document.querySelector('.mid-video');
// let content = document.querySelector(".content");
// let cursor = document.querySelector(".cursor");

// function handleMouseMove(dets) {
//     gsap.to(cursor, {
//         x: dets.clientX - 50,
//         y: dets.clientY - 50
//     });
// }
// function handleMouseMoveTab(dets) {
//     gsap.to(cursor, {
//         x: dets.clientX - 65,
//         y: dets.clientY - 570
//     });
// }

// function handleMouseEnter() {
//     gsap.to(cursor, {
//         scale: 1,
//         opacity: 1
//     });
// }

// function handleMouseLeave() {
//     gsap.to(cursor, {
//         scale: 0,
//         opacity: 0
//     });
// }

// // Check screen width and apply appropriate behavior
// if (window.innerWidth > 768) {
//     content.addEventListener("mousemove", handleMouseMove);
//     content.addEventListener("mouseenter", handleMouseEnter);
//     content.addEventListener("mouseleave", handleMouseLeave);
// } else if((window.innerWidth >= 600 && window.innerWidth <= 768)){
//     // For mobile devices, fix the cursor position
//     content.addEventListener("mousemove", handleMouseMoveTab);
//     content.addEventListener("mouseenter", handleMouseEnter);
//     content.addEventListener("mouseleave", handleMouseLeave);
    
// }else {
//     // Remove event listeners for mobile devices
//     content.removeEventListener("mousemove", handleMouseMove);
//     content.removeEventListener("mouseenter", handleMouseEnter);
//     content.removeEventListener("mouseleave", handleMouseLeave);

//     content.removeEventListener("mousemove", handleMouseMoveTab);
    
//     // Set fixed position for the cursor
//     gsap.to(cursor, {
//         x: window.innerWidth / 2 - 210,
//         y: window.innerHeight / 2 - 510,
//         scale: 1,
//         opacity: 1
//     });
// }

// let flag = 0;

// cursor.addEventListener('click', () => {
//     if (flag == 0) {
//         let tl = gsap.timeline();

//         tl.to(midVideo, {
//             opacity: 0,
//             duration: 1
//         });
//         tl.to(topImg, {
//             opacity: 0,
//             duration: 1
//         });
//         Video.play();
//     }
// });

// document.addEventListener("mousemove", function (dets) {
//     document.querySelectorAll(".img").forEach((elem) => {
//         const position = elem.getAttribute("value");
//         let x = (window.innerWidth - dets.clientX * position) / 50;
//         let y = (window.innerHeight - dets.clientY * position) / 50;

//         gsap.to(elem, {
//             transform: `translateX(${x}px) translateY(${y}px)`
//         });
//     });
// });
