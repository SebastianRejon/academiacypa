// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const navbar = document.getElementById('navbar');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Trigger scroll event on load in case user refreshed partway down
    window.dispatchEvent(new Event('scroll'));
});
