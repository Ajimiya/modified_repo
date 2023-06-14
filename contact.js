document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Clear previous error messages
    var errors = document.getElementsByClassName('error');
    for (var i = 0; i < errors.length; i++) {
      errors[i].style.display = 'none';
    }
  
    // Validate form fields
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var message = document.getElementById('message').value.trim();
  
    if (name === '') {
      showError('name', 'Name is required');
    }
  
    if (email === '') {
      showError('email', 'Email is required');
    } else if (!isValidEmail(email)) {
      showError('email', 'Invalid email format');
    }
  
    if (phone === '') {
      showError('phone', 'Phone is required');
    } else if (!isValidPhone(phone)) {
      showError('phone', 'Invalid phone format');
    }
  
    if (message === '') {
      showError('message', 'Message is required');
    }
  
    // Form is valid, submit data 
    if (!document.getElementsByClassName('error')[0]) {
      console.log('Form submitted!');
      document.getElementById('contactForm').reset();
    }
  });
  
  function showError(field, message) {
    var errorElement = document.createElement('p');
    errorElement.className = 'error';
    errorElement.innerText = message;
    document.getElementById(field).parentNode.appendChild(errorElement);
  }
  
  function isValidEmail(email) {
    // email validation 
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }
  
  function isValidPhone(phone) {
    //  phone number validation 
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }

  function log() {

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var message = document.getElementById('message').value.trim();
  
  
    if (name.trim() === "" || email.trim() === ""||phone.trim() === "" || message.trim() === "") {
      alert("Please fill all the fields.");
      return false;
    }
    else{
        alert("Successfully submitted");
        
    }
    
  }
  