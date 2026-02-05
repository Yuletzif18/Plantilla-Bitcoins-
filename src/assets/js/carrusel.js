$(document).ready(() => {
    const carruselContainer = document.getElementById('carruselContainer');

    // Clone the carrusel content to create a continuous loop
    const carruselItems = document.getElementById('carruselContainer').innerHTML;
    document.getElementById('carruselContainer').innerHTML += carruselItems;
    
    // Set up animation
    let scrollLeft = 0;
    const scrollSpeed = 4; // Adjust the scroll speed as needed
    
    function animatecarrusel(timestamp) {
        if (!lastTimestamp) {
            lastTimestamp = timestamp;
        }
    
        const deltaTime = timestamp - lastTimestamp;
        lastTimestamp = timestamp;
    
        scrollLeft += scrollSpeed * deltaTime / 60; // Normalize speed
        if (scrollLeft >= carruselContainer.scrollWidth / 2) {
            scrollLeft = 0;
        }
        carruselContainer.style.transform = `translateX(-${scrollLeft}px)`;
    
        requestAnimationFrame(animatecarrusel);
    }
    
    let lastTimestamp = null;
    requestAnimationFrame(animatecarrusel);
});
