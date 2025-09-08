document.addEventListener('DOMContentLoaded', function() {
    // Fetch the navigation HTML
    fetch('/components/navigation.html')
        .then(response => response.text())
        .then(navigationHtml => {
            document.getElementById('navigation-placeholder').innerHTML = navigationHtml;
            
            // Set active nav item based on current page
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                }
            });
        })
        .catch(error => {
            console.error('Error loading navigation:', error);
            document.getElementById('navigation-placeholder').innerHTML = 
                '<p class="text-danger">Error loading navigation</p>';
        });

    // Set active nav item based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
