// Use DOMContentLoaded to make sure elements are ready
        document.addEventListener('DOMContentLoaded', () => {
            const plans = document.querySelectorAll('.onclick-text');

            plans.forEach(plan => {
                plan.addEventListener('click', () => {
                    // remove active from all
                    plans.forEach(p => p.classList.remove('active'));

                    // add active to clicked one
                    plan.classList.add('active');
                    
                    // Optional: Log to check if it's working
                    console.log('Plan switched:', plan.innerText);
                });
            });
        });


        //--------------------------------------------------accordtion code

document.addEventListener("DOMContentLoaded", () => {
            const items = document.querySelectorAll(".accordion");

            items.forEach(item => {
                const question = item.querySelector(".accordion__question");
                
                question.addEventListener("click", () => {
                    const isActive = item.classList.contains("active");

                    // Close all other items (Optional: remove this if you want multiple open)
                    items.forEach(el => el.classList.remove("active"));

                    // If it wasn't active, open it
                    if (!isActive) {
                        item.classList.add("active");
                    }
                });
            });
        });


//Container 6

// Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const numberItems = document.querySelectorAll('.number-item');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Function to show specific slide
    function showSlide(index) {
        // Remove active class from all
        slides.forEach(slide => slide.classList.remove('active'));
        numberItems.forEach(item => item.classList.remove('active'));
        
        // Add active class to current
        slides[index].classList.add('active');
        numberItems[index].classList.add('active');
    }

    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    // Previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    // Click on number navigation
    numberItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Arrow button clicks
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    // Auto-play (optional - uncomment to enable)
    // setInterval(nextSlide, 5000);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Select all potential video containers
    const containers = document.querySelectorAll('.killer-content-img, .video-card');

    containers.forEach(container => {
        // Find the video element inside this specific container
        // We look for any video tag to ensure it works regardless of the class name
        const video = container.querySelector('video');

        if (!video) return;

        // Configuration for hover behavior
        video.muted = true;      // Browser requirement for autoplay
        video.playsInline = true; 
        video.loop = true;       // Optional: keeps video playing if they hover long
        video.preload = "auto";  // Helps reduce lag when hovering

        container.addEventListener('mouseenter', () => {
            const playPromise = video.play();
            
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    // This handles cases where the browser blocks playback
                    console.warn("Playback prevented:", error);
                });
            }
        });

        container.addEventListener('mouseleave', () => {
            video.pause();
            // Reset to start so it looks clean when they hover again
            video.currentTime = 0;
        });
    });
});


//On button click text animate and video start playing 
function triggerReveal() {
    const hero = document.getElementById('hero');  // ✅ Now matches section id
    const video = document.getElementById('mainVideo');  // ✅ Now video has this id
    
    // Add class to trigger CSS animations
    hero.classList.add('is-playing');

    // Play the video
    video.play().catch(err => {
        console.error("Video playback failed:", err);
    });
}

//container-3, 2 video section tilt slide in animation javascript code
// Scroll Animation for Video Cards
document.addEventListener('DOMContentLoaded', function() {
    const videoCards = document.querySelectorAll('.video-card');
    
    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add animation class with staggered delay
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 200); // 200ms delay between cards
                
                // Optional: Start playing video when visible
                const video = entry.target.querySelector('.card-video');
                if (video) {
                    video.play().catch(err => console.log('Video autoplay failed:', err));
                }
            }
        });
    }, {
        threshold: 0.2, // Trigger when 20% of card is visible
        rootMargin: '0px 0px -100px 0px' // Trigger slightly before card enters viewport
    });
    
    // Observe each card
    videoCards.forEach(card => {
        observer.observe(card);
    });
});