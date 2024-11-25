
    function validateForm(event) {
      event.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const service = document.getElementById('service').value;
      const priority = document.getElementById('priority').value;

      if (!name || !email || !phone || !service || !priority) {
        alert('All fields are required.');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      const phoneRegex = /^[0-9]{10,15}$/;
      if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number (10-15 digits).');
        return;
      }

      alert('Form submitted successfully!');
      document.getElementById('registrationForm').reset();
    }
  