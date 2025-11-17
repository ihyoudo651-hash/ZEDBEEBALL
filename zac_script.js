/*
    JavaScript for Zac is the Best Website
    Adding a Stat Meter animation and a photo blur effect!
*/

document.addEventListener('DOMContentLoaded', () => {
    const statMeter = document.getElementById('stat-meter');
    const imageGallery = document.querySelectorAll('.gallery-image');
    
    // 1. Stat Meter Animation
    // Sets the width of the stat bar based on the data-value attribute in HTML
    const statValue = statMeter.getAttribute('data-value');

    // Use a short delay to ensure CSS transitions trigger correctly
    setTimeout(() => {
        statMeter.querySelector('::before').style.width = statValue + '%';
    }, 100);

    // 2. Interactive Image Blur Effect (on click)
    imageGallery.forEach(image => {
        image.addEventListener('click', () => {
            // Check if the image already has the "focus" blur
            if (image.classList.contains('active-focus')) {
                // Remove focus class from all images
                imageGallery.forEach(img => img.classList.remove('active-focus'));
                document.body.classList.remove('blur-bg');
            } else {
                // Apply a body-wide blur (via CSS class) and highlight the clicked image
                document.body.classList.add('blur-bg');
                imageGallery.forEach(img => img.classList.remove('active-focus'));
                image.classList.add('active-focus');
            }
        });
    });

    // Add the necessary CSS classes for the blur effect dynamically
    const styleSheet = document.createElement("style");
    styleSheet.innerHTML = `
        .blur-bg .gallery-image:not(.active-focus) {
            filter: blur(5px) grayscale(70%); /* Blur all non-active images */
            opacity: 0.6;
            transform: scale(1.0); /* Stop the scale-up on hover when blurred */
        }
        .active-focus {
            transform: scale(1.08) !important; /* Emphasize the active image */
            box-shadow: 0 0 40px var(--green-pitch) !important;
            filter: none !important;
            opacity: 1.0 !important;
            border-color: #fff !important;
        }
    `;
    document.head.appendChild(styleSheet);
});