


$(window).scroll(function () {
    console.log("Scroll event detected!");
    var sticky = $('.navbar');
    scroll = $(window).scrollTop();

    if (scroll >= 60) { sticky.addClass('fixed-navbar'); }
    else { sticky.removeClass('fixed-navbar'); }
});



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


//Container 4

// Slider Functionality
// Slider Functionality with Peek Effect
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const numberItems = document.querySelectorAll('.number-item');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Function to update all slide positions
    function updateSlides() {
        slides.forEach((slide, index) => {
            // Remove all state classes first
            slide.classList.remove('active', 'next', 'prev');

            if (index === currentSlide) {
                // Current active slide
                slide.classList.add('active');
            } else if (index === (currentSlide + 1) % totalSlides) {
                // Next slide (peeking from right)
                slide.classList.add('next');
            } else if (index === (currentSlide - 1 + totalSlides) % totalSlides) {
                // Previous slide (hidden to left)
                slide.classList.add('prev');
            }
            // All other slides remain hidden (no class)
        });

        // Update number navigation
        numberItems.forEach((item, index) => {
            item.classList.toggle('active', index === currentSlide);
        });
    }

    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlides();
    }

    // Previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlides();
    }

    // Click on number navigation
    numberItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentSlide = index;
            updateSlides();
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

    // Initialize - set up first slide
    updateSlides();
});

// -------------------------------------------------------- on hover video play pause
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


//---------------------------------------------------------On button click text animate and video start playing-------------------
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


//-------------------------flag reveal js----------------------

function triggerReveal2() {
    document
        .getElementById("hiddenSection")
        .classList.add("active");
}

//hide js code
function closeSection() {
    // 1. Hide the hidden section (your existing code)
    const hidden = document.getElementById("hiddenSection");
    hidden.classList.remove("active");

    // 2. Reverse the Hero Section animations
    const hero = document.getElementById('hero');
    hero.classList.remove('is-playing'); // Removes the trigger class

    // 3. Reset the Video
    const video = document.getElementById('mainVideo');
    if (video) {
        video.pause();           // Stops the playback
        video.currentTime = 0;   // Rewinds to the beginning (optional)
    }
}

// ----------------------------------------------------------------------

//container-3, 2 video section  slide in animation javascript code
document.addEventListener('DOMContentLoaded', function () {
    const videoCards = document.querySelectorAll('.video-card');

    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add animation class with staggered delay
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 1); // 200ms delay between cards

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

// Flag animation JSON

const flags = document.querySelectorAll('.flag');
const redTransition = document.getElementById('red-transition');

flags.forEach(flag => {
    flag.addEventListener('click', () => {
        // Start animation
        redTransition.classList.add('active');

        // Example: do your language/video logic AFTER animation starts
        setTimeout(() => {
            // 🔥 put your language switch / video change logic here
            console.log('Language switched');
        }, 500);

        // Reset animation so it can replay
        setTimeout(() => {
            redTransition.classList.remove('active');
        }, 1200);
    });
});


// Swiper code--------------------------------------------------------------
var swiper = new Swiper(".mySwiper", {
    // 1. DEFAULT SETTINGS (Mobile - everything under 768px)
    slidesPerView: 1,
    spaceBetween: 15,

    autoplay: {
        delay: 3000, // Reduced this so you can see it working!
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // 2. BREAKPOINTS (Desktop - everything 768px and ABOVE)
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    }
});
//Swiper Code till here --------------------------------------------------





//-------------------------------------------------------------- WOW Animation Code--------------------------------------------

var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
    offset: 0,
    mobile: false,
    live: true,
    scrollContainer: null,
    resetAnimation: true,
});
wow.init();


