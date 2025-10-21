 // Smooth scrolling for navigation links
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

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Contact form handling
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name && email && message) {
                alert('Thank you for your message! I\'ll get back to you soon.');
                this.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });

        // Add scroll animations
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

        // Apply animation to cards
        document.querySelectorAll('.skill-card, .project-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });

        // Typing effect for hero text
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }

        // Initialize typing effect when page loads
        window.addEventListener('load', function() {
            const heroTitle = document.querySelector('.hero h1');
            const originalText = heroTitle.textContent;
            typeWriter(heroTitle, originalText, 150);
        });

        // Resume download functionality
        document.getElementById('downloadResume').addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create a sample resume content
            const resumeContent = `
Akhil Thakur - Full Stack Developer
Email: your.email@example.com
Phone: +91 12345 67890
Location: Ludhiana, Punjab, India
LinkedIn: linkedin.com/in/yourprofile

SKILLS:
• Frontend: HTML5, CSS3, JavaScript (ES6+), React
• Backend: PHP, MySQL
• Tools: Git, VS Code, Chrome DevTools
• Design: Responsive Design, CSS Grid, Flexbox

PROJECTS:
1. E-Commerce Platform
   - Full-featured online store with React and PHP
   - Features: User authentication, shopping cart, payment integration
   - Technologies: React, PHP, MySQL, CSS3

2. Task Management App
   - Responsive task manager with drag-and-drop functionality
   - Real-time updates and user-friendly interface
   - Technologies: JavaScript, HTML5, CSS3, PHP

3. Weather Dashboard
   - Location-based weather forecasts with interactive charts
   - API integration for real-time weather data
   - Technologies: React, Chart.js, CSS3

EDUCATION:
• Bachelor's Degree in Computer Science/IT
• Completed courses in Web Development

EXPERIENCE:
• Freelance Full Stack Developer
• Built multiple web applications using modern technologies
• Strong problem-solving and debugging skills

CERTIFICATIONS:
• JavaScript Fundamentals
• React Development
• PHP & MySQL Development
            `;
            
            // Create and download the resume file
            const blob = new Blob([resumeContent], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Akhil_Thakur_Resume.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            
            // Show confirmation
            alert('Resume downloaded successfully! 📄');
        });

        // Add floating animation to skill icons
        document.querySelectorAll('.skill-icon').forEach((icon, index) => {
            icon.style.animationDelay = `${index * 0.2}s`;
            icon.classList.add('float-animation');
        });

        // Add CSS for floating animation
        const style = document.createElement('style');
        style.textContent = `
            .float-animation {
                animation: skillFloat 3s ease-in-out infinite;
            }
            
            @keyframes skillFloat {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
        `;
        document.head.appendChild(style);