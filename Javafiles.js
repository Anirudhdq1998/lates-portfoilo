
        // Gallery Data - Easy to edit and add new work
        const galleryItems = [
            {
                title: "E-Commerce UI Design",
                category: "Web Design",
                image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop"
            },
            {
                title: "Mobile App Interface",
                category: "UI/UX",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop"
            },
            {
                title: "Dashboard Analytics",
                category: "Web Development",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
            },
            {
                title: "Brand Identity",
                category: "Branding",
                image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop"
            },
            {
                title: "Landing Page",
                category: "Web Design",
                image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop"
            },
            {
                title: "Social Media App",
                category: "Mobile",
                image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop"
            },
            {
                title: "Portfolio Website",
                category: "Web Development",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
            },
            {
                title: "Restaurant Menu App",
                category: "UI/UX",
                image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop"
            },
            {
                title: "Fitness Tracker",
                category: "Mobile",
                image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop"
            }
        ];

        // Function to render gallery
        function renderGallery() {
            const container = document.getElementById('galleryGrid');
            
            galleryItems.forEach((item, index) => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';
                galleryItem.style.opacity = '0';
                galleryItem.style.transform = 'translateY(30px)';
                
                galleryItem.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <div class="gallery-overlay">
                        <h3>${item.title}</h3>
                        <span class="gallery-category">${item.category}</span>
                    </div>
                `;
                
                // Add click event for lightbox
                galleryItem.addEventListener('click', () => openLightbox(item.image));
                
                container.appendChild(galleryItem);
                
                // Staggered animation
                setTimeout(() => {
                    galleryItem.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    galleryItem.style.opacity = '1';
                    galleryItem.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }

        // Lightbox functions
        function openLightbox(imageSrc) {
            const lightbox = document.getElementById('lightbox');
            const lightboxImage = document.getElementById('lightboxImage');
            lightboxImage.src = imageSrc;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Close lightbox on button click
        const closeLightboxBtn = document.getElementById('closeLightbox');
        if (closeLightboxBtn) {
            closeLightboxBtn.addEventListener('click', closeLightbox);
        }

        // Close lightbox on background click
        const lightboxEl = document.getElementById('lightbox');
        if (lightboxEl) {
            lightboxEl.addEventListener('click', (e) => {
                if (e.target.id === 'lightbox') {
                    closeLightbox();
                }
            });
        }

        // Close lightbox on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        });

        // Projects Data - Easy to edit and add new projects
        const projects = [
            {
                title: "E-Commerce Platform",
                description: "A full-featured online shopping platform with payment integration, inventory management, and real-time analytics.",
                tags: ["React", "Node.js", "MongoDB"],
                gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                link: "https://example.com/ecommerce-demo" // Add your live project URL here
            },
            {
                title: "Task Management App",
                description: "Collaborative project management tool with real-time updates, team collaboration, and productivity tracking.",
                tags: ["Vue.js", "Firebase", "Tailwind"],
                gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                link: "https://example.com/task-app-demo"
            },
            {
                title: "Social Media Dashboard",
                description: "Analytics dashboard for managing multiple social media accounts with automated reporting and insights.",
                tags: ["React", "Python", "PostgreSQL"],
                gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                link: "https://example.com/dashboard-demo"
            },
            {
                title: "Real Estate Website",
                description: "Modern property listing platform with advanced search filters, virtual tours, and integrated booking system.",
                tags: ["Next.js", "Stripe", "Mapbox"],
                gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
                link: "https://example.com/realestate-demo"
            },
            {
                title: "Fitness Tracker App",
                description: "Mobile-first fitness application with workout plans, calorie tracking, and progress analytics.",
                tags: ["React Native", "Redux", "AWS"],
                gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                link: "https://example.com/fitness-demo"
            },
            {
                title: "AI Chat Assistant",
                description: "Intelligent chatbot powered by machine learning for customer support and automated responses.",
                tags: ["Python", "TensorFlow", "Flask"],
                gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
                link: "https://example.com/ai-chat-demo"
            }
        ];

        // Function to create project cards dynamically
        let currentSlide = 0;
        let slidesPerView = 3;

        function updateSlidesPerView() {
            if (window.innerWidth <= 768) {
                slidesPerView = 1;
            } else if (window.innerWidth <= 1024) {
                slidesPerView = 2;
            } else {
                slidesPerView = 3;
            }
        }

        function renderProjects() {
            const container = document.getElementById('projectsTrack');
            const dotsContainer = document.getElementById('sliderDots');
            
            projects.forEach((project, index) => {
                const card = document.createElement('div');
                card.className = 'project-card';
                
                card.innerHTML = `
                    <div class="project-image" style="background: ${project.gradient}">
                        <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link" title="View ${project.title}"></a>
                    </div>
                    <div class="project-content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="project-tags">
                            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                `;
                
                container.appendChild(card);
            });

            // Create dots
            const totalDots = Math.ceil(projects.length / slidesPerView);
            for (let i = 0; i < totalDots; i++) {
                const dot = document.createElement('div');
                dot.className = 'dot';
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(i));
                dotsContainer.appendChild(dot);
            }

            updateSliderButtons();
        }

        function updateSlider() {
            const track = document.getElementById('projectsTrack');
            const slider = document.querySelector('.projects-slider');
            
            // Check if cards exist before calculating
            if (!track.children.length) return;
            
            const sliderWidth = slider.offsetWidth;
            const cardWidth = track.children[0].offsetWidth;
            const gap = 32; // 2rem gap
            const totalCardWidth = cardWidth + gap;
            const offset = -currentSlide * totalCardWidth * slidesPerView;
            
            track.style.transform = `translateX(${offset}px)`;
            
            updateDots();
            updateSliderButtons();
        }

        function updateDots() {
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === Math.floor(currentSlide));
            });
        }

        function updateSliderButtons() {
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const maxSlides = Math.ceil(projects.length / slidesPerView) - 1;
            
            prevBtn.disabled = currentSlide === 0;
            nextBtn.disabled = currentSlide >= maxSlides;
        }

        function nextSlide() {
            const maxSlides = Math.ceil(projects.length / slidesPerView) - 1;
            if (currentSlide < maxSlides) {
                currentSlide++;
                updateSlider();
            }
        }

        function prevSlide() {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlider();
            }
        }

        function goToSlide(index) {
            currentSlide = index;
            updateSlider();
        }

        // Add event listeners for slider
        document.getElementById('nextBtn').addEventListener('click', nextSlide);
        document.getElementById('prevBtn').addEventListener('click', prevSlide);

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        });

        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        document.getElementById('projectsTrack').addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        document.getElementById('projectsTrack').addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            if (touchStartX - touchEndX > 50) nextSlide();
            if (touchEndX - touchStartX > 50) prevSlide();
        }

        // Update slider on window resize
        window.addEventListener('resize', () => {
            updateSlidesPerView();
            currentSlide = 0;
            // Add delay to ensure DOM is ready
            setTimeout(() => {
                updateSlider();
            }, 100);
        });

        updateSlidesPerView();

        // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Form submission
        document.querySelector('.contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            e.target.reset();
        });

        // Smooth scroll for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Intersection Observer for section animations
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Trigger gallery rendering when gallery section is visible
                    if (entry.target.id === 'gallery' && !entry.target.dataset.rendered) {
                        entry.target.dataset.rendered = 'true';
                        renderGallery();
                    }
                    
                    // Trigger project rendering when projects section is visible
                    if (entry.target.id === 'projects' && !entry.target.dataset.rendered) {
                        entry.target.dataset.rendered = 'true';
                        renderProjects();
                        // Wait for DOM to render before initializing slider
                        setTimeout(() => {
                            updateSlider();
                        }, 100);
                    }
                }
            });
        }, observerOptions);

        // Observe all sections except hero
        document.querySelectorAll('section:not(.hero)').forEach(section => {
            observer.observe(section);
        });

        // Make hero section visible immediately
        document.querySelector('.hero').style.opacity = '1';
        document.querySelector('.hero').style.transform = 'translateY(0)';
   