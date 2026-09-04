
// Pelican Bay Sailing School Inc. - Main JavaScript
// 501(c)(3) Nonprofit | EIN: 92-3488213

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');

  if (menuBtn && mainNav) {
    menuBtn.addEventListener('click', function() {
      mainNav.classList.toggle('active');
      const isOpen = mainNav.classList.contains('active');
      menuBtn.innerHTML = isOpen ? '&#10005;' : '&#9776;';
    });
  }

  // Close mobile menu on link click
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
      if (mainNav) mainNav.classList.remove('active');
      if (menuBtn) menuBtn.innerHTML = '&#9776;';
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Form validation visual feedback
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn ? btn.textContent : '';

      // Simple visual feedback (no backend)
      if (btn) {
        btn.textContent = 'Message Sent! Thank you.';
        btn.style.background = 'var(--success)';
        btn.style.color = '#fff';
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.style.color = '';
          form.reset();
        }, 3000);
      }
    });
  });

  // Current year in footer
  const yearSpans = document.querySelectorAll('.current-year');
  yearSpans.forEach(span => span.textContent = new Date().getFullYear());

  // Add active class to current nav item
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
