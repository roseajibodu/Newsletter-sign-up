const form = document.getElementById('form');
const newsletter = document.querySelector('.newsletter-cta');
const thanks = document.querySelector('.thanks-page');

const email = document.getElementById('email');
const emailPlaceholder = document.getElementById('email_placeholder');
const error = document.querySelector('.error');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const emailValue = email.value;
  
  if (emailValue === '') {
    error.style.display = 'block';
    return;
  }
  
  emailPlaceholder.textContent = email.value;
  
  newsletter.style.display = 'none';
  thanks.style.display = 'block';
});
