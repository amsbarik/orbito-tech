// Image full screen slider popup js start
document.addEventListener('DOMContentLoaded', () => {
    const popupContainer = document.getElementById('popupContainer');
    const popupCloseButton = document.querySelector('.popup-close');
    const carouselInner = document.querySelector('#popupSlider .carousel-inner');
    // const productImages = Array.from(document.querySelectorAll('.event-img'));
    const productImages = Array.from(document.querySelectorAll('.add-to-view'));

    // Open popup when any .show-popup element is clicked
    document.querySelectorAll('.show-popup').forEach((item, index) => {
        item.addEventListener('click', () => {
            // Clear previous images in the slider
            carouselInner.innerHTML = '';

            // Populate the slider with all event images
            productImages.forEach((img, imgIndex) => {
                const carouselItem = document.createElement('div');
                carouselItem.classList.add('carousel-item');
                if (imgIndex === index) carouselItem.classList.add('active'); // Make the clicked image active
                
                const sliderImg = document.createElement('img');
                sliderImg.src = img.src;
                sliderImg.classList.add('d-block', 'w-100', 'slider-img');
                sliderImg.alt = img.alt;

                carouselItem.appendChild(sliderImg);
                carouselInner.appendChild(carouselItem);
            });

            // Show the popup container
            popupContainer.style.display = 'flex';
        });
    });

    // Close popup when the close button is clicked
    popupCloseButton.addEventListener('click', () => {
        popupContainer.style.display = 'none';
    });

    // Optional: close popup when clicking outside of the popup-wrapper
    popupContainer.addEventListener('click', (event) => {
        if (event.target === popupContainer) {
            popupContainer.style.display = 'none';
        }
    });
});




///////////////////////////////// home page
// product slider js start 
document.querySelectorAll('.slider-wrapper').forEach((sliderWrapper, index) => {
    const productCards = sliderWrapper.querySelectorAll('.product-card');
    const prevBtn = sliderWrapper.closest('.slider-container').querySelector('.prev-btn');
    const nextBtn = sliderWrapper.closest('.slider-container').querySelector('.next-btn');
    let currentIndex = 0;
    let slideInterval;

    function slideTo(index) {
        const cardWidth = productCards[0].offsetWidth + 24; // Adjust according to product-card css margin 8*2=16 (margin: 0 8px;)
        const translateXValue = -(index * cardWidth);
        sliderWrapper.style.transform = `translateX(${translateXValue}px)`;

        if (index < productCards.length - 5) {
            sliderWrapper.style.transform += `translateX(-${cardWidth * 0.4}px)`;
        }

        currentIndex = index;
    }

    function nextSlide() {
        if (currentIndex < productCards.length - 5) {
            slideTo(currentIndex + 1);
        } else {
            slideTo(0);
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            slideTo(currentIndex - 1);
        } else {
            slideTo(productCards.length - 5);
        }
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 3000); // Adjust interval as needed
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    sliderWrapper.addEventListener('mouseover', stopAutoSlide);
    sliderWrapper.addEventListener('mouseout', startAutoSlide);

    startAutoSlide();
    slideTo(0); // Start with the first card showing
});


// category 3 items slide js start
document.querySelectorAll('.slider-3items-wrapper').forEach((sliderWrapper, index) => {
    const productCards = sliderWrapper.querySelectorAll('.product-card');
    const prevBtn = sliderWrapper.closest('.slider-3items-container').querySelector('.prev-btn');
    const nextBtn = sliderWrapper.closest('.slider-3items-container').querySelector('.next-btn');
    let currentIndex = 0;
    let slideInterval;

    function slideTo(index) {
        const cardWidth = productCards[0].offsetWidth + 24; // Adjust according to product-card css margin 8*2=16 (margin: 0 8px;)
        const translateXValue = -(index * cardWidth);
        sliderWrapper.style.transform = `translateX(${translateXValue}px)`;

        if (index < productCards.length - 3) {
            sliderWrapper.style.transform += `translateX(-${cardWidth * 0.4}px)`;
        }

        currentIndex = index;
    }

    function nextSlide() {
        if (currentIndex < productCards.length - 3) {
            slideTo(currentIndex + 1);
        } else {
            slideTo(0);
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            slideTo(currentIndex - 1);
        } else {
            slideTo(productCards.length - 3);
        }
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 3000); // Adjust interval as needed
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    sliderWrapper.addEventListener('mouseover', stopAutoSlide);
    sliderWrapper.addEventListener('mouseout', startAutoSlide);

    startAutoSlide();
    slideTo(0); // Start with the first card showing
});


// testimonial-sliders js start
document.querySelectorAll('.testimonial-slider-wrapper').forEach((sliderWrapper, index) => {
    const productCards = sliderWrapper.querySelectorAll('.testimonial-card');
    const prevBtn = sliderWrapper.closest('.testimonial-slider-container').querySelector('.prev-btn');
    const nextBtn = sliderWrapper.closest('.testimonial-slider-container').querySelector('.next-btn');
    let currentIndex = 0;
    let slideInterval;

    function slideTo(index) {
        const cardWidth = productCards[0].offsetWidth + 24; // Adjust according to product-card css margin 8*2=16 (margin: 0 8px;)
        const translateXValue = -(index * cardWidth);
        sliderWrapper.style.transform = `translateX(${translateXValue}px)`;

        if (index < productCards.length - 6) {
            sliderWrapper.style.transform += `translateX(-${cardWidth * 0.4}px)`;
        }

        currentIndex = index;
    }

    function nextSlide() {
        if (currentIndex < productCards.length - 6) {
            slideTo(currentIndex + 1);
        } else {
            slideTo(0);
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            slideTo(currentIndex - 1);
        } else {
            slideTo(productCards.length - 6);
        }
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 3000); // Adjust interval as needed
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    sliderWrapper.addEventListener('mouseover', stopAutoSlide);
    sliderWrapper.addEventListener('mouseout', startAutoSlide);

    startAutoSlide();
    slideTo(0); // Start with the first card showing
});


///////////////////////////////// product details page js start
// product thum img slider js start 
document.querySelectorAll('.thum-slider-wrapper').forEach((sliderWrapper, index) => {
    const productCards = sliderWrapper.querySelectorAll('.product-thum-card');
    const prevBtn = sliderWrapper.closest('.thum-slider-container').querySelector('.prev-btn');
    const nextBtn = sliderWrapper.closest('.thum-slider-container').querySelector('.next-btn');
    let currentIndex = 0;
    let slideInterval;

    function slideTo(index) {
        const cardHeight = productCards[0].offsetHeight + 12; // Adjust according to product-thum-card css margin 8*2=16 (margin: 8px 0;)
        const translateYValue = -(index * cardHeight); // Regular translation for full cards
        sliderWrapper.style.transform = `translateY(${translateYValue}px)`;

        // Adjust for 30% of the next card on the bottom
        if (index < productCards.length - 5) {
            sliderWrapper.style.transform += `translateY(-${cardHeight * 0.2}px)`;
        }

        currentIndex = index;
    }

    function nextSlide() {
        if (currentIndex < productCards.length - 5) {
            slideTo(currentIndex + 1);
        } else {
            slideTo(0);
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            slideTo(currentIndex - 1);
        } else {
            slideTo(productCards.length - 5);
        }
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 3000); // Adjust interval as needed
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    sliderWrapper.addEventListener('mouseover', stopAutoSlide);
    sliderWrapper.addEventListener('mouseout', startAutoSlide);

    startAutoSlide();
    slideTo(0); // Start with the first card showing
});


// <!-- product view img js start  -->
document.addEventListener('DOMContentLoaded', function () {
// Main product view image
const productViewImg = document.querySelector('.product-view-img');

// Thumbnail images
const thumbImgs = document.querySelectorAll('.product-thum-img');

// Add click event listeners to each thumbnail image
thumbImgs.forEach(function (thumbImg) {
    thumbImg.addEventListener('click', function () {
        // Update the main product view image with the clicked thumbnail's src
        productViewImg.src = this.src;
        });
    });
});


