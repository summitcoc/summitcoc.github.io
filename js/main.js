// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a nav link
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }

    // Smooth scrolling for anchor links
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

    // Set active navigation link based on current page
    const currentLocation = location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPath = link.getAttribute('href');
        if (linkPath === currentLocation || 
            (currentLocation === '' && linkPath === 'index.html') ||
            (currentLocation === 'index.html' && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Add fade-in animation for cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards for animation
    document.querySelectorAll('.about-card, .time-card, .elder-card, .bulletin-section').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Form submission handler (for contact form)
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.name || !data.email || !data.message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Show success message (in a real application, you'd send this to a server)
    alert('Thank you for your message! We will get back to you soon.');
    event.target.reset();
}

// Bulletin update functionality (for easy content management)
function loadBulletinContent() {
    // This function would typically load content from a JSON file or API
    // For now, we'll use static content that can be easily updated
    const bulletinData = {
        date: new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        }),
        announcements: [
            "Join us for our monthly fellowship dinner this Saturday at 6:00 PM",
            "Bible study group meeting moved to Thursday this week",
            "Youth group camping trip - sign up sheets available"
        ],
        sermonTitle: "Walking in Faith",
        sermonText: "Hebrews 11:1-6",
        prayerRequests: [
            "Healing for sister Mary Johnson",
            "Safe travels for the Miller family",
            "Wisdom for our church leaders"
        ]
    };
    
    // Update the bulletin content if we're on the bulletin page
    const bulletinDate = document.getElementById('bulletin-date');
    const sermonInfo = document.getElementById('sermon-info');
    const announcementsList = document.getElementById('announcements-list');
    const prayerList = document.getElementById('prayer-list');
    
    if (bulletinDate) {
        bulletinDate.textContent = `Weekly Bulletin - ${bulletinData.date}`;
    }
    
    if (sermonInfo) {
        sermonInfo.innerHTML = `
            <h4>${bulletinData.sermonTitle}</h4>
            <p><strong>Scripture:</strong> ${bulletinData.sermonText}</p>
        `;
    }
    
    if (announcementsList) {
        announcementsList.innerHTML = bulletinData.announcements
            .map(announcement => `<li>${announcement}</li>`)
            .join('');
    }
    
    if (prayerList) {
        prayerList.innerHTML = bulletinData.prayerRequests
            .map(request => `<li>${request}</li>`)
            .join('');
    }
}

// Load bulletin content when page loads
document.addEventListener('DOMContentLoaded', loadBulletinContent);