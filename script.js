window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('backToTop');

    if (window.scrollY > 300) { // When user scrolls down 300px
        backToTopButton.style.display = 'block';
        backToTopButton.style.opacity = 100;
    } else {
        backToTopButton.style.opacity = '0'; // Fade out
        setTimeout(function() {
            backToTopButton.style.display = 'none'; // Hide after fade out
        }, 300);
    }
});