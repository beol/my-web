/**
 * Main JavaScript file for my-web project
 * 
 * This file contains the main functionality for the website.
 */

// DOM ready function
document.addEventListener('DOMContentLoaded', () => {
  initializeNavigation();
  setupScrollEffects();
});

/**
 * Initialize the navigation functionality
 */
function initializeNavigation() {
  // Mobile navigation toggle (if implemented in the future)
  const navToggle = document.querySelector('.nav-toggle');
  
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      document.body.classList.toggle('nav-open');
    });
  }

  // Add active class to current page link
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '/' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/**
 * Setup scroll effects for the page
 */
function setupScrollEffects() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Utility function to create an element with classes and attributes
 * @param {string} tag - The HTML tag name
 * @param {string|string[]} [classes] - CSS class or array of classes
 * @param {Object} [attributes] - HTML attributes as key-value pairs
 * @returns {HTMLElement} The created element
 */
function createElement(tag, classes, attributes) {
  const element = document.createElement(tag);
  
  if (classes) {
    const classList = Array.isArray(classes) ? classes : [classes];
    element.classList.add(...classList);
  }
  
  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }
  
  return element;
}
