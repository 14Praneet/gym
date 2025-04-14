//Js
document.querySelector(".mobile-btn").addEventListener("click", function () {
  document.querySelector(".menu").classList.toggle("active");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const menu = document.querySelector('.menu');
    if (window.scrollY > 50) {
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileBtn = document.querySelector('.mobile-btn');
const nav = document.querySelector('.nav');

mobileBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.section, .trainer, .client');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Trainer card hover effect
const trainers = document.querySelectorAll('.trainer');
trainers.forEach(trainer => {
    trainer.addEventListener('mouseenter', () => {
        trainer.style.transform = 'translateY(-10px)';
    });
    
    trainer.addEventListener('mouseleave', () => {
        trainer.style.transform = 'translateY(0)';
    });
});

// Form validation
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const inputs = form.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#ddd';
            }
        });
        
        if (isValid) {
            // Add your form submission logic here
            alert('Form submitted successfully!');
            form.reset();
        } else {
            alert('Please fill in all fields');
        }
    });
});

// Image lazy loading
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});
