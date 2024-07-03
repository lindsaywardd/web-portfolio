function goToGithub() {
  window.open('https://github.com/lindsaywardd', '_blank');
}

function goToProject1() {
  window.open('https://lindsaywardd.github.io/meal-planner-website/', '_blank');
}

function goToProject2() {
    window.open('https://github.com/lindsaywardd?tab=repositories', '_blank');
  }

  function goToProject3() {
    window.open('https://lindsaywardd.github.io/Stylin-Wiring-Jewelry-Web/', '_blank');
  }

function viewResume() {
    const resumeUrl = 'https://raw.githubusercontent.com/lindsaywardd/web-portfolio/main/imgs/resume.pdf'; // Replace with resume URL
    window.open(resumeUrl, '_blank');
}
// so unnecessary lol
function goToContactPage() {
  window.open('contact.html', '_self');
}

// contact form
document.addEventListener("DOMContentLoaded", function() {
  // Initialize EmailJS with your public key
  emailjs.init("iljAuqz0PtlPbAkAL");

  // Form submission handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
          event.preventDefault();

          emailjs.sendForm('service_z2b4uod', 'template_0a4l11x', this)
              .then(function(response) {
                  console.log('Success!', response.status, response.text);
                  alert('Message sent successfully!');
              }, function(error) {
                  console.error('Failed to send message:', error);
                  alert('Failed to send message. Please try again later.');
              });
      });
  }
});
