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






