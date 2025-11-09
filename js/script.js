// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('nav ul');

  if (mobileMenuToggle && navMenu) {
    // Toggle menu open/close
    mobileMenuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      navMenu.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = event.target.closest('nav');
      
      if (!isClickInsideNav && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
      }
    });
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});

// Add active class to navigation items based on current page
document.addEventListener('DOMContentLoaded', function() {
  const currentLocation = location.pathname;
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (currentLocation.includes(href) || (href === '/' && currentLocation === '/')) {
      link.parentElement.classList.add('active');
    }
  });
});

// Form validation
document.addEventListener('DOMContentLoaded', function() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    const emailInputs = form.querySelectorAll('input[type="email"]');
    const submitButtons = form.querySelectorAll('input[type="submit"], button[type="submit"]');

    submitButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        let isValid = true;

        // Validate email fields
        emailInputs.forEach(input => {
          if (input.hasAttribute('required') && !input.value) {
            input.style.borderColor = '#ff4136';
            isValid = false;
          } else if (input.hasAttribute('required') && !isValidEmail(input.value)) {
            input.style.borderColor = '#ff4136';
            isValid = false;
          } else {
            input.style.borderColor = '';
          }
        });

        // Validate required fields
        form.querySelectorAll('[required]').forEach(field => {
          if (!field.value) {
            field.style.borderColor = '#ff4136';
            isValid = false;
          } else {
            field.style.borderColor = '';
          }
        });

        if (!isValid) {
          e.preventDefault();
        }
      });
    });
  });
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Intersection Observer for fade-in animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.card, article, section').forEach(el => {
    observer.observe(el);
  });
});

// Google Analytics (if ID is provided)
window.addEventListener('load', function() {
  const gaId = document.querySelector('meta[name="google-analytics"]')?.getAttribute('content');
  if (gaId) {
    loadGoogleAnalytics(gaId);
  }
});

function loadGoogleAnalytics(id) {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', id);
}

// Add fade-in animation styles dynamically
const style = document.createElement('style');
style.textContent = `
  .card, article, section {
    opacity: 1;
    transition: opacity 0.6s ease-in, transform 0.6s ease-in;
  }
  
  .fade-in {
    animation: fadeIn 0.6s ease-in forwards;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

// Utility: Open external links in new tab
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.hostname.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});

