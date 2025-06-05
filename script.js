// Simple navigation enhancement and smooth interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth fade-in animation to main content
    const mainContainer = document.querySelector('.main-container');
    if (mainContainer) {
        mainContainer.style.opacity = '0';
        mainContainer.style.transform = 'translateY(20px)';
        mainContainer.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            mainContainer.style.opacity = '1';
            mainContainer.style.transform = 'translateY(0)';
        }, 100);
    }

    // Add hover effects to blog post items
    const blogPostItems = document.querySelectorAll('.blog-post-item');
    blogPostItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.transition = 'transform 0.3s ease';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Enhanced navigation link interactions
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-2px)';
                this.style.transition = 'transform 0.2s ease';
            }
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add subtle animation to profile photo on homepage
    const profilePhoto = document.querySelector('.profile-photo img');
    if (profilePhoto) {
        profilePhoto.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        profilePhoto.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Lazy loading enhancement for better performance
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
            img.onload = function() {
                this.style.opacity = '1';
            };
        }
    });

    // Add reading progress indicator for blog posts
    if (window.location.pathname.includes('posts/')) {
        addReadingProgress();
    }
});

// Reading progress indicator for blog posts
function addReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 2px;
        background-color: #000000;
        z-index: 1000;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;
        
        progressBar.style.width = Math.min(progress, 100) + '%';
    });
}

// Keyboard navigation enhancement
document.addEventListener('keydown', function(e) {
    // Allow navigation with arrow keys
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const navLinks = Array.from(document.querySelectorAll('.nav-link'));
        const currentIndex = navLinks.findIndex(link => link.classList.contains('active'));
        
        if (currentIndex !== -1) {
            let newIndex;
            if (e.key === 'ArrowLeft') {
                newIndex = currentIndex > 0 ? currentIndex - 1 : navLinks.length - 1;
            } else {
                newIndex = currentIndex < navLinks.length - 1 ? currentIndex + 1 : 0;
            }
            
            // Focus the new navigation item
            navLinks[newIndex].focus();
        }
    }
});

// Add smooth scroll behavior for internal links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});
