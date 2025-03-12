// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
      navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
      navbar.style.boxShadow = 'none';
    }
  });
  
  // Mobile menu toggle (for future implementation)
  document.addEventListener('DOMContentLoaded', () => {
    // Product cards animation on scroll
    const productCards = document.querySelectorAll('.product-card');
    
    const fadeInOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          fadeInObserver.unobserve(entry.target);
        }
      });
    }, fadeInOptions);
    
    productCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      fadeInObserver.observe(card);
    });
    
    // Add to cart functionality (simulated)
    const addToCartButtons = document.querySelectorAll('.product-button');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productTitle = button.parentElement.querySelector('.product-title').textContent;
        alert(`${productTitle} added to cart!`);
      });
    });
  });