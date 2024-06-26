const cursor = document.querySelector('.section-2-container');
const section = document.querySelector('.section-2');

section.addEventListener('mouseenter', () => {
    gsap.to(cursor, { opacity: 1, duration: 3 });

    section.addEventListener('mousemove', handleMouseMove);
});

section.addEventListener('mouseleave', () => {
    section.removeEventListener('mousemove', handleMouseMove);
});

function handleMouseMove(e) {
    const mouseX = window.innerWidth - e.clientX;
    const mouseY = window.innerHeight - e.clientY;
    gsap.to(cursor, { 
        left: mouseX, 
        top: mouseY, 
        duration: 2.1, 
        ease: 'power1.out' 
    });
}

document.addEventListener("mousemove", function(dets){
    document.querySelectorAll(".img").forEach((elem) => {
       const position = elem.getAttribute("value");
       let x = (window.innerWidth - dets.clientX * position)/50;
       let y = (window.innerHeight - dets.clientY * position)/50;

      elem.style.transform = `translateX(${x}px) translateY(${y}px)`
       gsap.to(elem,{
        transform: `translateX(${x}px) translateY(${y}px)`
       })
    })
})