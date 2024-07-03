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




// //******************** section-3 animation ********************//





function createAnimation(section3ImgHeight, section3ImgWidth) {
    let section3Img = document.querySelector('.section-3-img img');

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".section-3",
            scroller: 'body',
            start: '5% 50%',
            end: '70% 50%',
        }
    });

    tl
        .to('.heading h1', {
            y: 0,
            opacity: 1,
            duration: 0.5,
        })
        .from(section3Img, {
            y: 600,
            duration: 1.5,
            delay: 0.2
        }, 'a')
        .to(section3Img, {
            height: section3ImgHeight,
            width: section3ImgWidth,
            duration: 0.5
        })
        .to('.section-3-text h2', {
            color: '#00BD00',
            duration: 0.5
        });
}

function setupAnimation() {
    if (window.innerWidth > 768) {
        createAnimation('250vh', '150vw');
    } else if (window.innerWidth >= 600 && window.innerWidth <= 768) {
        createAnimation('180vh', '280vw'); 
    } else {
        createAnimation('130vh', '275vw');
    }
}


setupAnimation();


window.addEventListener('resize', setupAnimation);



// //******************** section-4 animation ********************//

let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: '.section-4',
        scroller: 'body',
        // markers: true,
        start: 'top 80%',
        end: '100% 80%'
    }
});
tl5
    .to('.se-4-container h1', {
        y: 0,
        opacity: 1,
        duration: 0.5,
    })
    .to('.se-4-container h1 span', {
        color: '#00BD00',
        duration: 0.5
    })
    .to('.se-4-text h2', {
        y: 0,
        opacity: 1,
        duration: 0.5,
    })
    .to('.se-4-text h2 span', {
        color: '#00BD00',
        duration: 0.5
    })
    .to('.se-4-para p', {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1
    })
    .to('.se-4-para span', {
        color: '#00BD00',
        duration: 0.5
    }, 'a')
    .to('.se-4-text .bold', {
        fontWeight: 600,
        color: '#fff'
    }, 'a')









if (window.innerWidth > 600) {

    const canvas = document.querySelector(".se-4-canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext("2d");
    const frameCount = 80;

    const currentFrame = (index) => `./canvas-2/Image${(index + 1)}.jpg`;

    const images = [];
    let ball = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = () => {
            if (images.length === 0) {
                render();
            }
        };
        img.onerror = () => {
            console.error(`Failed to load image: ${currentFrame(i)}`);
        };
        images.push(img);
    }

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(ball, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            trigger: '.se-4-content',
            start: 'top 10%',
            // markers: true, 
            scroller: 'body',
            scrub: 0.1,
            // pin: '.se-4-canvas',
            end: "110% 10%",
        },
        onUpdate: render,
    });

    function render() {
        if (images.length > 0 && images[ball.frame].complete) {
            context.canvas.width = images[0].width;
            context.canvas.height = images[0].height;
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(images[ball.frame], 0, 0);
        }
    }

} else {

    const canvas = document.querySelector(".se-4-canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext("2d");
    const frameCount = 80;

    const currentFrame = (index) => `./canvas-2/Image${(index + 1)}.jpg`;

    const images = [];
    let ball = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = () => {
            if (images.length === 0) {
                render();
            }
        };
        img.onerror = () => {
            console.error(`Failed to load image: ${currentFrame(i)}`);
        };
        images.push(img);
    }

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(ball, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            trigger: '.se-4-content',
            start: 'top 40%',
            // markers: true, 
            scroller: 'body',
            scrub: 0.1,
            // pin: '.se-4-canvas',
            end: "110% 40%",
        },
        onUpdate: render,
    });

    function render() {
        if (images.length > 0 && images[ball.frame].complete) {
            context.canvas.width = images[0].width;
            context.canvas.height = images[0].height;
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(images[ball.frame], 0, 0);
        }
    }
}














// //******************** section-6 animation ********************//




let move = document.querySelectorAll('.move');


move.forEach(element => {

    const duplicateContent = () => {
        element.innerHTML += element.innerHTML;
    };

    const removeOldContent = () => {
        const children = e.children;
        if (children.length > 2) {
            e.removeChild(children[2]);
        }
    };

    duplicateContent();



    gsap.to(element, {
        xPercent: -50,
        duration: 10,
        repeat: -1,
        ease: 'none',
        onComplete: () => {
            duplicateContent();
            removeOldContent();
        }
    })

})














// //******************** section-5 animation ********************//









let tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: '.section-5',
        scroller: 'body',
        start: 'top 80%',
        end: '100% 80%',
        // markers: true
    }
})
tl6
    .to('.section-5-text h1', {
        y: 0,
        opacity: 1,
        duration: 0.5,
    })
    .to('.section-5-text h1 span', {
        color: '#00BD00',
        duration: 0.5
    })
    .to('.section-5-text h4', {
        y: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
    })
    .to('.section-5 span ', {
        color: '#00bd00',
        duration: 0.2
    }, 'a')
    .to('.section-5 .bold ', {
        color: '#fff',
        duration: 0.2,

    }, 'a')





let section5texts = document.querySelectorAll('.section-5-line-container');
let section5image = document.querySelector('.section-5-img img');

section5texts.forEach(e => {

    const duplicateContent = () => {
        e.innerHTML += e.innerHTML;
    };


    const removeOldContent = () => {
        const children = e.children;
        if (children.length > 2) {
            e.removeChild(children[2]);
        }
    };

    duplicateContent();


    const duration = 16;


    let animation = gsap.to(e, {
        xPercent: -50,
        duration: duration,
        ease: "none",
        repeat: -1,
        onComplete: () => {
            duplicateContent();
            removeOldContent();
        }
    });

    e.addEventListener('mouseenter', () => {
        animation.pause();
    });

    e.addEventListener('mouseleave', () => {
        animation.resume();
    });
});






if (window.innerWidth > 600) {

    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section-5',
            scroller: 'body',
            start: '25% 50%',
            end: '100% 50%',
            // markers: true
        }
    })

    tl2.to(section5image, {
        y: 0,
        duration: 2,
        delay: 0.1,
    })
    tl2.to(section5image, {
        height: '205%',
        width: '220%',
        duration: 1

    })

} else {

    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section-5',
            scroller: 'body',
            start: '25% 50%',
            end: '100% 50%',
            // markers: true
        }
    })

    tl2.to(section5image, {
        y: 0,
        duration: 2,
        delay: 0.1,
    })
    tl2.to(section5image, {
        height: '75vh',
        width: '180vw',
        duration: 1

    })
}









// //******************** section-7 animation ********************//


let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.section-7',
        scroller: 'body',
        start: '0% 50%',
        end: '100% 50%',
        // markers: true,
        onEnter: () => {
            document.querySelector('.section-7-video video').play()
        },
    }
})

tl3
    .to('.section-7-text h1 span', {
        color: '#00BD00',
        duration: 0.5
    })









if(window.innerWidth > 768){
    
    var tl4 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section-9",
                    scroller: 'body',
                    // markers:true,
                    start: "25% 35%",
                    end: "130% 35%",
                    scrub: 2,
                    pin: true
                }
            });
            tl4
                .to(".product-1", {
                    top: "15%",
                    duration: 1.5
                },)
                .to(".product-2", {
                    top: "17%",
                    duration: 1.5
                },)
                .to(".product-3", {
                    top: "20%",
                    duration: 1.5,
                },)
                .addPause()
                .to(".product-3", {
                    top: "20%",
                    duration: 1,
                },)
            
}else if(window.innerWidth >= 600 && window.innerWidth <= 768){
    
var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section-9",
            scroller: 'body',
            // markers:true,
            start: "10% 15%",
            end: "130% 15%",
            scrub: 2,
            pin: true
        }
    });
    tl4
        .to(".product-1", {
            top: "25vw",
            duration: 1.5
        },)
        .to(".product-2", {
            top: "33vw",
            duration: 1.5
        },)
        .to(".product-3", {
            top: "38vw",
            duration: 1.5,
        },)
        .addPause()
        .to(".product-3", {
            top: "38vw",
            duration: 1,
        },)
    
}else{
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section-9",
            scroller: 'body',
            // markers:true,
            start: "10% 30%",
            end: "130% 30%",
            scrub: 2,
            pin: true
        }
    });
    tl4
        .to(".product-1", {
            top: "30vw",
            duration: 1.5
        },)
        .to(".product-2", {
            top: "45vw",
            duration: 1.5
        },)
        .to(".product-3", {
            top: "55vw",
            duration: 1.5,
        },)
        .addPause()
        .to(".product-3", {
            top: "55vw",
            duration: 1,
        },)
}









let tl = gsap.timeline({scrollTrigger: {
    trigger:'.join-us',
    scroller: 'body',
    start: 'top 80%',
    end: '130% 80%',
    // markers: true,
    scrub: 2
}})


tl.to('.move-left', {
    xPercent: -12,
    duration: 5,
    ease:'none'
},'a')
.to('.move-right', {
    xPercent: 12,
    duration: 5,
    ease:'none'
}, 'a')








