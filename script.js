document.addEventListener('DOMContentLoaded', function() {

    // ===== THEME (DAY/NIGHT) TOGGLE =====
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to apply the saved theme on page load
    function applySavedTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-theme');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Show sun icon
        } else {
            body.classList.remove('light-theme');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Show moon icon
        }
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');

        // Save the theme choice and update the icon
        if (body.classList.contains('light-theme')) {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
    
    // Apply theme when the page first loads
    applySavedTheme();


    // ===== MOBILE NAVIGATION (HAMBURGER MENU) =====
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });
    
    // Optional: Close the menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
            }
        });
    });

    // ===== ACTIVE LINK ON SCROLL (Aapka purana code, agar ho to) =====
    const navLinksList = document.querySelectorAll('header nav ul li a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = 'home'; // Default to home
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinksList.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

});