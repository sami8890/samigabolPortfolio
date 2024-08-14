document.addEventListener("DOMContentLoaded", function() {
    // Initialize Typed.js for hero section
    new Typed('.typed-text', {
        strings: [ 'Web Developer', 'Website Designer', 'Graphic Designer' , 'Freelancer', 'Video Editor'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        loop: true
    });

    // Initialize Typed.js for skills section
    new Typed('#typed-skills', {
        strings: ['HTML', 'CSS', 'JavaScript', 'Next.js'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        loop: true
    });
    
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add active class to nav links
    window.addEventListener('scroll', () => {
        // let current = '';
        // sections.forEach(section => {
        //     const sectionTop = section.offsetTop;
        //     const sectionHeight = section.clientHeight;
        //     if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
        //         current = section.getAttribute('id');
        //     }
        // });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});

// Toggle Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('showing');
    menuToggle.classList.toggle('open');
});

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('.nav-links a');

scrollLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });

        // Close the mobile menu after clicking a link
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('showing');
            menuToggle.classList.remove('open');
        }
    });
});

