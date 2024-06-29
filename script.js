const cursor = document.querySelector('.custom-cursor');
const section = document.querySelector('.section-2');



section.addEventListener('mouseenter', () => {
    cursor.style.opacity = '100'; // Ensure cursor is visible when entering
    cursor.style.transition = '3s'; // Apply transition for opacity
    section.addEventListener('mousemove', (e) => {
        const mouseX = window.innerWidth - e.clientX; // Calculate inverted X position
        const mouseY = window.innerHeight - e.clientY; // Calculate inverted Y position

        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;

    });

});
section.addEventListener('mouseleave', () => {

    section.removeEventListener('mousemove', handleMouseMove);
});

//scroll down coircle
//https://github.com/GeorgeHastings/emblem

const text = document.querySelector(".text p");

text.innerHTML = text.innerText
    .split("")
    .map(
        (char, i) => `<span style="transform:rotate(${i * 6.8}deg)">${char}</span>`
    )
    .join("");



//auto scrolling marque text animation
// window.addEventListener("wheel",function(dets){
//     if(dets.deltaY>0){
//         gsap.to(".se-1-auto-move-circle-text-marquee",{
//             transform:'translateX(100%)',
//             // delay:1,
//             duration:10,
//             repeat:-1,
//             ease:"none"
//         })



//     }else{
//         gsap.to(".se-1-auto-move-circle-text-marquee",{
//             transform:'translateX(0%)',
//             // delay:1,
//             duration:10,
//             repeat:-1,
//             ease:"none"
//         })



//     }
// })


// gsap.to(".se-1-auto-move-container",{
//     transform:'translateX(-100%)',
//     // delay:1,
//     duration:10,
//     repeat:-1,
//     ease:"none"
// })

// const marquee = document.querySelectorAll(".se-1-auto-move-container");

// marquee.forEach(e => {


//     const duplicateContent = () => {
//         e.innerHTML += e.innerHTML;
//     }

//     const removeOldContent = () => {
//         const children = e.children;
//         if (children.length > 2) {
//             e.removeChild(children[1]);
//         }
//     }
//     duplicateContent();

//     let animation = gsap.to(e, {
//         xPercent: -50,
//         duration: 5,
//         ease: "none",
//         repeat: -1,
//         onComplete: () => {
//             duplicateContent();
//             removeOldContent();
//         }
//     });
// });

const e = document.querySelectorAll(".se-1-auto-move-container");



const duplicateContent = () => {
    e.innerHTML += e.innerHTML;
}

const removeOldContent = () => {
    const children = e.children;
    if (children.length > 1) {
        e.removeChild(children[1]);
    }
}
duplicateContent();

let animation = gsap.to(e, {
    xPercent: -50,
    duration: 5,
    ease: "none",
    repeat: -1,
    onComplete: () => {
        duplicateContent();
        removeOldContent();
    }
});
