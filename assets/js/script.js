
// Custom JavaScript for Freelancer Website

$(document).ready(function() {
    
    // Navigation scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.custom-nav').addClass('scrolled');
        } else {
            $('.custom-nav').removeClass('scrolled');
        }
    });

    /*
    // Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    });
    */

    // Skills progress bar animation
    function animateSkills() {
        $('.skill-progress .progress-bar').each(function() {
            var width = $(this).data('width');
            $(this).css('width', width);
        });
    }

    // Trigger skill animation when section is in view
    $(window).scroll(function() {
        var skillsSection = $('#about').offset().top;
        var scrollPos = $(window).scrollTop() + $(window).height();
        
        if (scrollPos > skillsSection) {
            animateSkills();
        }
    });

    // Portfolio hover effects
    $('.portfolio-item').hover(
        function() {
            $(this).find('.portfolio-overlay').addClass('show');
        },
        function() {
            $(this).find('.portfolio-overlay').removeClass('show');
        }
    );

    // Service card hover effects
    $('.service-card').hover(
        function() {
            $(this).addClass('hovered');
        },
        function() {
            $(this).removeClass('hovered');
        }
    );

    // Contact form handling
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        var formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            service: $('#service').val(),
            message: $('#message').val()
        };

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            showAlert('Please fill in all required fields.', 'error');
            return;
        }

        if (!isValidEmail(formData.email)) {
            showAlert('Please enter a valid email address.', 'error');
            return;
        }

        // Simulate form submission (replace with actual PHP handler)
        submitForm(formData);
    });

    // Form submission function
    function submitForm(data) {
        // Show loading state
        var submitBtn = $('#contactForm button[type="submit"]');
        var originalText = submitBtn.text();
        submitBtn.text('Sending...').prop('disabled', true);
        
        // Actual AJAX implementation would look like this:
        $.ajax({
            //url: 'https://api.cors.lol/http://mamedul.dx.am/contact-handler.php',
            //url: 'https://proxy.cors.sh/http://mamedul.dx.am/contact-handler.php',
            //url: 'https://cors-anywhere.herokuapp.com/http://mamedul.dx.am/contact-handler.php',
            //url: 'https://api.cors.lol/?url='+encodeURIComponent('http://mamedul.dx.am/contact-handler.php'),
            url: 'https://684ca4169867bb683a4076b6--comforting-naiad-2eac66.netlify.app/.netlify/functions/proxy',
            method: 'POST',
            data: data,
			processData: true, // ✅ prevent jQuery from converting FormData to string
			//contentType: false, // ✅ prevent jQuery from setting content-type header
            dataType: 'json',
            success: function(r) {
			    if(r && r.success){
					showAlert('Thank you! Your message has been sent successfully.', 'success');
					$('#contactForm')[0].reset();
				}else{
					showAlert(r.message ? r.message : 'Sorry, there was an error sending your message. Please try again.', 'error');
                }
            },
            error: function() {
                showAlert('Sorry, there was an error sending your message. Please try again.', 'error');
            },
            complete: function(x) { console.log(x);
                submitBtn.text(originalText).prop('disabled', false);
            }
        });
        
    }

    // Email validation
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Alert function
    function showAlert(message, type) {
        var alertClass = type === 'success' ? 'alert-success' : 'alert-danger';
        var alertHtml = $('<div class="alert ' + alertClass + ' alert-dismissible fade show" role="alert">' +
                     message +
                     '<button type="button" class="close" data-dismiss="alert">' +
                     '<span>&times;</span></button></div>');
        
        $('#contactForm').prepend(alertHtml);
        
        // Auto dismiss after 5 seconds
        setTimeout(function() {
            alertHtml.alert('close');
        }, 5000);
    }

    // Testimonial carousel auto-play
    $('#testimonialCarousel').carousel({
        interval: 5000,
        pause: 'hover'
    });

    // Add loading animation to sections
    function addLoadAnimation() {
        $('.service-card, .portfolio-item').addClass('loading');
        
        $(window).scroll(function() {
            $('.loading').each(function() {
                var elementTop = $(this).offset().top;
                var scrollPos = $(window).scrollTop() + $(window).height() - 100;
                
                if (scrollPos > elementTop) {
                    $(this).addClass('loaded');
                }
            });
        });
    }

    // Initialize loading animations
    addLoadAnimation();

    // Typing effect for hero subtitle
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.text('');
        
        function type() {
            if (i < text.length) {
                element.text(element.text() + text.charAt(i));
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Initialize typing effect
    setTimeout(function() {
        typeWriter($('.hero-subtitle'), $('.hero-subtitle').data('html'), 150);
    }, 1500);

    // Parallax effect for hero section
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        var heroHeight = $('.hero-section').outerHeight();
        
        if (scrollTop < heroHeight) {
            $('.hero-section').css('transform', 'translateY(' + scrollTop * 0.5 + 'px)');
        }
    });

    // Mobile menu close on link click
    $('.navbar-nav .nav-link').on('click', function() {
        if ($(window).width() < 992) {
            $('.navbar-collapse').collapse('hide');
        }
    });

    // Add scroll indicator animation
    $('.scroll-indicator').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#about').offset().top - 70
        }, 1000);
    });

    // Enhanced button hover effects
    $('.btn').hover(
        function() {
            $(this).addClass('btn-hover');
        },
        function() {
            $(this).removeClass('btn-hover');
        }
    );

    // Add intersection observer for better performance
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('loaded');
                }
            });
        }, observerOptions);

        // Observe loading elements
        document.querySelectorAll('.loading').forEach(el => {
            observer.observe(el);
        });
    }

    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Optimize scroll events
    const optimizedScroll = debounce(function() {
        // Scroll-dependent functions here
    }, 10);

    $(window).scroll(optimizedScroll);

    // Add custom cursor for interactive elements
    $('.btn, .nav-link, .social-link, .portfolio-item').hover(
        function() {
            $(this).css('cursor', 'pointer');
        }
    );

    // Easter egg: Konami code
    var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    var konamiIndex = 0;

    $(document).keydown(function(e) {
        if (e.keyCode === konamiCode[konamiIndex++]) {
            if (konamiIndex === konamiCode.length) {
                // Easter egg activated
                $('body').addClass('konami-activated');
                showAlert('🎉 Easter egg activated! You found the secret code!', 'success');
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    $('#portfolioModal').on('show.bs.modal', function (event) {
        var $button = $(event.relatedTarget) // Button that triggered the modal
        var $portfolioItem = $button.closest('.portfolio-item');
        var $modalImage = $portfolioItem.find('.portfolio-image>img');
        var $modalTitle = $portfolioItem.find('.portfolio-info h5');
        var $modalText = $portfolioItem.find('.portfolio-info p');
        var $modal = $(this)
        $modal.find('#modalImage').attr('src',$modalImage.attr('src'));
        $modal.find('#modalText').html($modalText.html())
        $modal.find('#modalTitle').html($modalTitle.html())
    });

});

// Additional utility functions

// Format phone number input
function formatPhoneNumber(input) {
    var value = input.value.replace(/\D/g, '');
    var formattedValue = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    
    if (value.length === 10) {
        input.value = formattedValue;
    }
}

// Add phone formatting to contact form
$(document).on('input', '#phone', function() {
    formatPhoneNumber(this);
});

// Copy to clipboard function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        showAlert('Copied to clipboard!', 'success');
    });
}

// Add copy functionality to contact info
$('.contact-info p').on('click', function() {
    var text = $(this).text();
    copyToClipboard(text);
});

// Print-friendly styles
window.addEventListener('beforeprint', function() {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', function() {
    document.body.classList.remove('printing');
});

// SEO and Analytics helpers
function trackEvent(action, category, label) {
    // Google Analytics event tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
    
    console.log('Event tracked:', action, category, label);
}

// Track important interactions
$(document).on('click', '.btn-primary', function() {
    var buttonText = $(this).text().trim();
    trackEvent('click', 'CTA Button', buttonText);
});

$(document).on('click', '.portfolio-item', function() {
    trackEvent('click', 'Portfolio', 'Project View');
});

$(document).on('submit', '#contactForm', function() {
    trackEvent('submit', 'Contact Form', 'Form Submission');
});
