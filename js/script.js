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


        //accordtion code

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