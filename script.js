// Smooth scrolling for navigation links


// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will respond shortly.');
    this.reset();
});

// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for Scroll Animations
    const animateOnScroll = (elements, className) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(className);
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(element => observer.observe(element));
    };

    // Animate Service Cards
    animateOnScroll(document.querySelectorAll('.card'), 'card-visible');

    // Dark Mode Toggle
    const themeToggle = document.createElement('button');
    themeToggle.className = 'btn btn-sm btn-outline-secondary position-fixed bottom-0 end-0 m-3';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.setAttribute('aria-label', 'Toggle Dark Mode');
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener('click', () => {
        document.documentElement.setAttribute('data-bs-theme',
            document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark'
        );
        themeToggle.innerHTML = document.documentElement.getAttribute('data-bs-theme') === 'dark' ?
            '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', document.documentElement.getAttribute('data-bs-theme'));
    });

    // Service Card Interactions
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });

        card.addEventListener('click', (e) => {
            if (!e.target.closest('a')) {
                card.querySelector('a').click();
            }
        });
    });

    // Dynamic Copyright Year
    document.querySelector('#copyright-year').textContent = new Date().getFullYear();

    // Form Validation
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (e) => {
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

    // Scroll Progress Indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar bg-primary';
    progressBar.style.height = '3px';
    progressBar.style.width = '0';
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.zIndex = '9999';
    progressBar.setAttribute('role', 'progressbar');
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;
        progressBar.style.width = `${scrolled}%`;
    });

    // Back to Top Button
    const backToTop = document.createElement('button');
    backToTop.className = 'btn btn-primary btn-lg position-fixed bottom-0 end-0 m-3 d-none';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.setAttribute('aria-label', 'Back to Top');
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('d-none', window.scrollY < 500);
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Initialize Theme from Local Storage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-bs-theme', savedTheme);
    themeToggle.innerHTML = savedTheme === 'dark' ?
        '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';

    /* =============================
       Smooth Scroll
       ============================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    /* =============================
       Scroll to Top Button
       ============================= */
    const scrollToTopBtn = document.getElementById('scrollToTop');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    /* =============================
       Page Loader
       ============================= */
    window.addEventListener('load', () => {
        const loader = document.querySelector('.page-loader');
        loader.classList.add('fade-out');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    });

    /* =============================
       Reading Progress Bar
       ============================= */
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.querySelector('.progress-bar').style.width = scrolled + '%';
    });

    /* =============================
       Dynamic Year Update
       ============================= */
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    /* =============================
       Smooth Scroll with Progress
       ============================= */
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Reading progress bar
    const progressBar = document.querySelector('.progress-bar');
    const updateProgress = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
        progressBar.setAttribute('aria-valuenow', scrolled);
    };

    // Debounced scroll handler
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(updateProgress);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // Layer card hover effects
    document.querySelectorAll('.layer-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('.card-footer').classList.remove('d-none');
        });
        card.addEventListener('mouseleave', () => {
            card.querySelector('.card-footer').classList.add('d-none');
        });
    });

    // Page loader
    window.addEventListener('load', () => {
        const loader = document.querySelector('.page-loader');
        loader.classList.add('fade-out');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    });

    // Scroll to top button
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});