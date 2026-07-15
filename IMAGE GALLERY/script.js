// Gallery Images Array
const galleryImages = document.querySelectorAll('.gallery-item');
const filterButtons = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxCaption = document.querySelector('.lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

let currentImageIndex = 0;
let filteredImages = [];

// Filter Functionality
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get filter value
        const filterValue = button.getAttribute('data-filter');
        
        // Filter and display images
        filterImages(filterValue);
    });
});

function filterImages(category) {
    galleryImages.forEach(item => {
        if (category === 'all') {
            item.classList.remove('hidden');
            item.style.display = 'block';
            item.style.animation = 'fadeIn 0.5s ease forwards';
        } else {
            if (item.getAttribute('data-category') === category) {
                item.classList.remove('hidden');
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                item.classList.add('hidden');
                item.style.display = 'none';
            }
        }
    });
}

// Lightbox Functionality
galleryImages.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Get the image and caption from the clicked item
        const img = item.querySelector('img');
        const caption = item.querySelector('h3');
        
        // Set lightbox content
        lightboxImage.src = img.src;
        lightboxCaption.textContent = caption.textContent;
        
        // Show lightbox
        lightbox.classList.add('active');
        
        // Store current index for navigation
        currentImageIndex = Array.from(galleryImages).indexOf(item);
    });
});

// Close Lightbox
lightboxClose.addEventListener('click', closeLightbox);

function closeLightbox() {
    lightbox.classList.remove('active');
    lightboxImage.src = '';
}

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowLeft') {
        showPreviousImage();
    } else if (e.key === 'ArrowRight') {
        showNextImage();
    }
});

// Navigation buttons
lightboxPrev.addEventListener('click', showPreviousImage);
lightboxNext.addEventListener('click', showNextImage);

function showPreviousImage() {
    const visibleItems = Array.from(galleryImages).filter(item => 
        item.style.display !== 'none' && !item.classList.contains('hidden')
    );
    
    let currentVisibleIndex = visibleItems.findIndex(item => {
        const img = item.querySelector('img');
        return img.src === lightboxImage.src;
    });
    
    currentVisibleIndex = (currentVisibleIndex - 1 + visibleItems.length) % visibleItems.length;
    
    const prevItem = visibleItems[currentVisibleIndex];
    const img = prevItem.querySelector('img');
    const caption = prevItem.querySelector('h3');
    
    lightboxImage.style.animation = 'none';
    setTimeout(() => {
        lightboxImage.src = img.src;
        lightboxCaption.textContent = caption.textContent;
        lightboxImage.style.animation = 'zoomIn 0.4s ease';
    }, 10);
}

function showNextImage() {
    const visibleItems = Array.from(galleryImages).filter(item => 
        item.style.display !== 'none' && !item.classList.contains('hidden')
    );
    
    let currentVisibleIndex = visibleItems.findIndex(item => {
        const img = item.querySelector('img');
        return img.src === lightboxImage.src;
    });
    
    currentVisibleIndex = (currentVisibleIndex + 1) % visibleItems.length;
    
    const nextItem = visibleItems[currentVisibleIndex];
    const img = nextItem.querySelector('img');
    const caption = nextItem.querySelector('h3');
    
    lightboxImage.style.animation = 'none';
    setTimeout(() => {
        lightboxImage.src = img.src;
        lightboxCaption.textContent = caption.textContent;
        lightboxImage.style.animation = 'zoomIn 0.4s ease';
    }, 10);
}

// Prevent body scroll when lightbox is open
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        document.body.style.overflow = 'auto';
    }
});

// Show lightbox event listener
document.addEventListener('click', (e) => {
    if (e.target.closest('.gallery-item') && lightbox.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    }
});

// Initialize gallery
window.addEventListener('load', () => {
    console.log('Gallery loaded successfully!');
    console.log(`Total images: ${galleryImages.length}`);
});

// Add smooth transitions
const style = document.createElement('style');
style.textContent = `
    * {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);

// Image lazy loading simulation
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target.querySelector('img');
                if (img && !img.src) {
                    img.src = img.dataset.src;
                    observer.unobserve(entry.target);
                }
            }
        });
    });

    galleryImages.forEach(item => imageObserver.observe(item));
}

// Add touch support for mobile
let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    
    if (touchStartX - touchEndX > swipeThreshold) {
        // Swiped left - show next image
        showNextImage();
    } else if (touchEndX - touchStartX > swipeThreshold) {
        // Swiped right - show previous image
        showPreviousImage();
    }
}

// Add console feedback
console.log('%c Gallery Gallery Loaded! %c', 'color: #667eea; font-size: 16px; font-weight: bold;', 'color: #764ba2; font-size: 16px; font-weight: bold;');
console.log('Features: Filter by category, Lightbox view, Keyboard navigation, Touch support');