// Steam & Stories Cafe - Complete JavaScript File

// ========================================
// MODAL FUNCTIONS
// ========================================

// Open Modal Function
function openModal(type) {
    if (type === 'login') {
        document.getElementById('loginModal').style.display = 'flex';
    } else if (type === 'booking') {
        document.getElementById('bookingModal').style.display = 'flex';
    }
}

// Close Modal Function
function closeModal(type) {
    if (type === 'login') {
        document.getElementById('loginModal').style.display = 'none';
    } else if (type === 'booking') {
        document.getElementById('bookingModal').style.display = 'none';
    }
}

// ========================================
// WINDOW EVENT LISTENERS
// ========================================

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
};

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(function(modal) {
            modal.style.display = 'none';
        });
    }
});

// ========================================
// SMOOTH SCROLLING
// ========================================

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
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
});

// Scroll to contact section
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ========================================
// ADD TO CART FUNCTIONALITY
// ========================================

// Add to cart function
function addToCart(itemName, itemPrice) {
    // Show success message
    alert('✓ Added ' + itemName + ' to cart!\nPrice: ₹' + itemPrice);
    
    // Optional: Store in cart array (can be expanded)
    if (typeof Storage !== 'undefined') {
        let cart = [];
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }
        
        cart.push({
            name: itemName,
            price: itemPrice,
            quantity: 1
        });
        
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Cart updated:', cart);
    }
}

// Add button click animations
document.addEventListener('DOMContentLoaded', function() {
    const addButtons = document.querySelectorAll('.add-btn');
    
    addButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Add animation
            this.style.transform = 'scale(1.3)';
            this.textContent = '✓';
            this.style.background = '#d4af37';
            this.style.color = 'white';
            
            // Reset button after 1 second
            const resetButton = this;
            setTimeout(function() {
                resetButton.style.transform = 'scale(1)';
                resetButton.textContent = '+';
                resetButton.style.background = 'white';
                resetButton.style.color = '#d4af37';
            }, 1000);
        });
    });
});

// ========================================
// SEARCH FUNCTIONALITY
// ========================================

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.querySelector('.search-box');
    
    if (searchBox) {
        searchBox.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const menuItems = document.querySelectorAll('.menu-item');
            
            menuItems.forEach(function(item) {
                const itemName = item.querySelector('h3');
                if (itemName) {
                    const name = itemName.textContent.toLowerCase();
                    
                    if (name.includes(searchTerm)) {
                        item.style.display = 'block';
                        item.style.opacity = '1';
                    } else if (searchTerm !== '') {
                        item.style.opacity = '0.3';
                    } else {
                        item.style.opacity = '1';
                    }
                }
            });
        });
    }
});

// ========================================
// FORM VALIDATION - BOOKING
// ========================================

// Booking form validation
document.addEventListener('DOMContentLoaded', function() {
    const bookingModal = document.getElementById('bookingModal');
    
    if (bookingModal) {
        const bookingForm = bookingModal.querySelector('.modal-content');
        const confirmButton = bookingForm.querySelector('button');
        
        if (confirmButton) {
            confirmButton.addEventListener('click', function(e) {
                e.preventDefault();
                
                const inputs = bookingForm.querySelectorAll('input');
                let isValid = true;
                let emptyFields = [];
                
                inputs.forEach(function(input) {
                    if (!input.value.trim()) {
                        isValid = false;
                        emptyFields.push(input.placeholder);
                        input.style.borderColor = 'red';
                    } else {
                        input.style.borderColor = '#d4af37';
                    }
                });
                
                if (isValid) {
                    alert('✓ Booking Confirmed!\n\nThank you for choosing Steam & Stories!\nWe look forward to serving you.');
                    closeModal('booking');
                    
                    // Reset form
                    inputs.forEach(function(input) {
                        input.value = '';
                        input.style.borderColor = '#d4af37';
                    });
                } else {
                    alert('Please fill in all fields:\n' + emptyFields.join('\n'));
                }
            });
        }
    }
});

// ========================================
// FORM VALIDATION - LOGIN
// ========================================

// Login form validation
document.addEventListener('DOMContentLoaded', function() {
    const loginModal = document.getElementById('loginModal');
    
    if (loginModal) {
        const loginForm = loginModal.querySelector('.modal-content');
        const loginButton = loginForm.querySelector('button');
        
        if (loginButton) {
            loginButton.addEventListener('click', function(e) {
                e.preventDefault();
                
                const emailInput = loginForm.querySelector('input[type="email"]');
                const passwordInput = loginForm.querySelector('input[type="password"]');
                
                if (!emailInput || !passwordInput) {
                    return;
                }
                
                if (!emailInput.value.trim() || !passwordInput.value.trim()) {
                    alert('Please enter both email and password.');
                    return;
                }
                
                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value)) {
                    alert('Please enter a valid email address.');
                    emailInput.style.borderColor = 'red';
                    return;
                }
                
                alert('✓ Login Successful!\n\nWelcome back to Steam & Stories!');
                closeModal('login');
                
                // Reset form
                emailInput.value = '';
                passwordInput.value = '';
                emailInput.style.borderColor = '#d4af37';
                passwordInput.style.borderColor = '#d4af37';
            });
        }
    }
});

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================

// Scroll reveal animation for sections
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    const sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });
});

// ========================================
// HORIZONTAL SCROLL FOR MENU
// ========================================

// Horizontal scroll for menu containers with mouse wheel
document.addEventListener('DOMContentLoaded', function() {
    const menuContainers = document.querySelectorAll('.menu-container');
    
    menuContainers.forEach(function(container) {
        container.addEventListener('wheel', function(e) {
            if (e.deltaY !== 0) {
                e.preventDefault();
                container.scrollLeft += e.deltaY;
            }
        });
    });
});

// Add scroll indicators for menu containers
document.addEventListener('DOMContentLoaded', function() {
    const menuContainers = document.querySelectorAll('.menu-container');
    
    menuContainers.forEach(function(container) {
        // Check if scroll indicators are needed
        if (container.scrollWidth > container.clientWidth) {
            container.style.position = 'relative';
            container.style.paddingRight = '40px';
        }
    });
});

// ========================================
// HEADER SCROLL EFFECT
// ========================================

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(26, 26, 46, 0.98)';
            header.style.padding = '0.8rem 5%';
            header.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.6)';
        } else {
            header.style.background = 'rgba(26, 26, 46, 0.95)';
            header.style.padding = '1rem 5%';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        }
    }
});

// ========================================
// SCROLL ICONS ANIMATION
// ========================================

// Animate scroll icons
document.addEventListener('DOMContentLoaded', function() {
    const scrollIcons = document.querySelectorAll('.scroll-icon, .scroll-icons span');
    
    scrollIcons.forEach(function(icon, index) {
        setInterval(function() {
            icon.style.transition = 'transform 0.3s ease';
            icon.style.transform = 'scale(1.2) rotate(10deg)';
            
            setTimeout(function() {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
        }, 2000 + (index * 500));
    });
});

// ========================================
// MENU ITEM HOVER EFFECTS
// ========================================

// Enhanced menu item hover effects
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
});

// ========================================
// GALLERY LIGHTBOX (OPTIONAL)
// ========================================

// Gallery image click handler
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(function(img) {
        img.addEventListener('click', function() {
            // Create lightbox effect
            const lightbox = document.createElement('div');
            lightbox.style.position = 'fixed';
            lightbox.style.top = '0';
            lightbox.style.left = '0';
            lightbox.style.width = '100%';
            lightbox.style.height = '100%';
            lightbox.style.background = 'rgba(0, 0, 0, 0.9)';
            lightbox.style.display = 'flex';
            lightbox.style.justifyContent = 'center';
            lightbox.style.alignItems = 'center';
            lightbox.style.zIndex = '3000';
            lightbox.style.cursor = 'pointer';
            
            const imgClone = this.cloneNode();
            imgClone.style.maxWidth = '90%';
            imgClone.style.maxHeight = '90%';
            imgClone.style.borderRadius = '15px';
            
            lightbox.appendChild(imgClone);
            document.body.appendChild(lightbox);
            
            lightbox.addEventListener('click', function() {
                document.body.removeChild(lightbox);
            });
        });
    });
});

// ========================================
// CART COUNTER (OPTIONAL)
// ========================================

// Update cart counter
function updateCartCounter() {
    if (typeof Storage !== 'undefined' && localStorage.getItem('cart')) {
        const cart = JSON.parse(localStorage.getItem('cart'));
        const cartCount = cart.length;
        
        console.log('Cart items:', cartCount);
        
        // You can add a cart counter display in header here
        // Example: document.getElementById('cart-count').textContent = cartCount;
    }
}

// Call cart counter on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCounter();
});

// ========================================
// LOADING ANIMATION
// ========================================

// Page loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 100);
});

// ========================================
// CONSOLE MESSAGES
// ========================================

// Console welcome message
console.log('%c Welcome to Steam & Stories! ☕', 
    'color: #d4af37; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);');
console.log('%c Brewed with Love, Served with a Smile', 
    'color: #666; font-size: 14px; font-style: italic;');
console.log('%c Website developed with ❤️', 
    'color: #d4af37; font-size: 12px;');

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Lazy loading for images (if needed)
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(function(img) {
        imageObserver.observe(img);
    });
});

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        
        const later = function() {
            timeout = null;
            func.apply(context, args);
        };
        
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(function() {
                inThrottle = false;
            }, limit);
        }
    };
}

// ========================================
// MOBILE MENU TOGGLE (IF NEEDED)
// ========================================

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add mobile menu button if screen is small
    if (window.innerWidth < 768) {
        const header = document.querySelector('header');
        const nav = document.querySelector('nav');
        
        if (header && nav) {
            const menuButton = document.createElement('button');
            menuButton.textContent = '☰';
            menuButton.style.fontSize = '1.5rem';
            menuButton.style.background = 'none';
            menuButton.style.border = 'none';
            menuButton.style.color = '#d4af37';
            menuButton.style.cursor = 'pointer';
            menuButton.className = 'mobile-menu-btn';
            
            menuButton.addEventListener('click', function() {
                nav.classList.toggle('active');
            });
        }
    }
});

// ========================================
// END OF JAVASCRIPT FILE
// ========================================

// File complete - All functions properly closed and organized