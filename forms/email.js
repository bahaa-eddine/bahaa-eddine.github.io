// Initialize EmailJS
(function() {
    emailjs.init("OTaL0MA-ZZC6yCXZi");
  })();
  
  // Form submission handler
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting the traditional way
  
    const loadingMessage = document.querySelector('.loading');
    const successMessage = document.querySelector('.sent-message');
    const errorMessage = document.querySelector('.error-message');
  
    loadingMessage.style.display = 'block';  // Show loading message
  
    // Send email using EmailJS
    emailjs.sendForm('service_3g9q9z4', 'template_gzcmrgq', this)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        loadingMessage.style.display = 'none';  // Hide loading message
        successMessage.style.display = 'block';  // Show success message
        errorMessage.style.display = 'none';  // Hide error message
      }, function(error) {
        console.log('FAILED...', error);
        loadingMessage.style.display = 'none';  // Hide loading message
        successMessage.style.display = 'none';  // Hide success message
        errorMessage.style.display = 'block';  // Show error message
        errorMessage.innerText = 'Failed to send message. Please try again.';
      });
  });
  