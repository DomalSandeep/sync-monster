


$(window).scroll(function () {
    console.log("Scroll event detected!");
    var sticky = $('.navbar');
    scroll = $(window).scrollTop();

    if (scroll >= 60) { sticky.addClass('fixed-navbar'); }
    else { sticky.removeClass('fixed-navbar'); }
});


//----------------------------------------Monthly plan and yearly plan section----------------------------------------
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

//price change code
    /**
     * 2. The JavaScript function to handle the change
     * @param {string} plan - 'monthly' or 'annual'
     */
    function updatePricing(plan) {
        // Define your price values
        const prices = {
            monthly: {
                blitz: "50",
                pro: "175",
                label: "/month"
            },
            annual: {
                blitz: "38", // Example discounted price
                pro: "133",  // Example discounted price
                label: "/year"
            }
        };

        // 3. Select the elements and update the text
        document.getElementById('price-blitz').innerText = prices[plan].blitz;
        document.getElementById('price-pro').innerText = prices[plan].pro;
        
        document.getElementById('duration-blitz').innerText = prices[plan].label;
        document.getElementById('duration-pro').innerText = prices[plan].label;
    }

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
//--------------------------------------------------accordtion code till here

//Container 4

// Slider Functionality
// Slider Functionality with Peek Effect
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const numberItems = document.querySelectorAll('.number-item');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    
    let currentSlide = 0;
    let lastSlide = 0; // 1. Added variable to track previous state
    const totalSlides = slides.length;

    function updateSlides() {
        // 2. Determine direction based on index comparison
        const direction = currentSlide >= lastSlide ? 'forward' : 'backward';

        slides.forEach((slide, index) => {
            // 3. Updated to remove the new direction classes
            slide.classList.remove('active', 'next', 'prev', 'moving-forward', 'moving-backward');

            if (index === currentSlide) {
                slide.classList.add('active');
                slide.classList.add(`moving-${direction}`); // 4. Apply direction class
            } else if (index === currentSlide + 1) {
                slide.classList.add('next');
            } else if (index === currentSlide - 1) {
                slide.classList.add('prev');
            }
        });

        // Update numbers
        numberItems.forEach((item, index) => {
            item.classList.toggle('active', index === currentSlide);
        });

        // UI OPTIMIZATION
        if (prevBtn) {
            prevBtn.style.opacity = currentSlide === 0 ? "0.3" : "1";
            prevBtn.style.pointerEvents = currentSlide === 0 ? "none" : "auto";
        }
        if (nextBtn) {
            nextBtn.style.opacity = currentSlide === totalSlides - 1 ? "0.3" : "1";
            nextBtn.style.pointerEvents = currentSlide === totalSlides - 1 ? "none" : "auto";
        }

        // 5. Update lastSlide AFTER everything is done
        lastSlide = currentSlide;
    }

    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlides();
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlides();
        }
    }

    numberItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentSlide = index;
            updateSlides();
        });
    });

    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });

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


// Anmation on click flags
// Select all elements that should trigger the animation
const triggerElements = document.querySelectorAll('.trigger-anim');

triggerElements.forEach(element => {
    element.addEventListener('click', (e) => {
        // 1. Create a new div
        const circle = document.createElement('div');
        
        // 2. Add the animation class
        circle.classList.add('expanding-circle');
        
        // 3. Append it to the body
        document.body.appendChild(circle);
        
        // 4. Clean up: Remove the element after animation finishes (1.5s)
        // This prevents the DOM from getting cluttered with hundreds of circles
        setTimeout(() => {
            circle.remove();
        }, 1500);
    });
});


// const pricingSection = document.querySelector('.container8');
// const scrollableCards = document.querySelectorAll('.card-bottom');

// window.addEventListener('scroll', () => {
//     const rect = pricingSection.getBoundingClientRect();
    
//     // Check if the section has reached the top
//     if (rect.top <= 100) {
//         scrollableCards.forEach(card => {
//             // Logic to check if cards are fully scrolled
//             const isScrolledOut = card.scrollHeight - card.scrollTop === card.clientHeight;
            
//             if (isScrolledOut) {
//                 // If cards finished scrolling, allow container to move
//                 pricingSection.style.position = 'relative';
//             } else {
//                 pricingSection.style.position = 'sticky';
//             }
//         });
//     }
// });