function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter both email and password.");
      return false;
    }
  
    return true;
  }
  
  function forgotPassword() {
    alert("Forgot Password clicked!");
  }
  
  function register() {
    alert("Register clicked!");
  }

  function log() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter both email and password.");
      return false;
    }
    else{
        alert("Successfully logined");
        
    }
    
  }
  
  