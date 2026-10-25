// Set dynamic current year in footer
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }

  // Handle contact form submission
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (formSuccess) {
        formSuccess.hidden = false;
      }
      contactForm.reset();
    });
  }
});
