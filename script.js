function Cities() {
    var stateSelect = document.getElementById('state');
    var citySelect = document.getElementById('city');
    var state = stateSelect.value;
  
    citySelect.innerHTML = ''; // Automatically selecting cities
  
    if (state === 'state1') {
      addOption(citySelect, 'Kochi', 'Kochi');
      addOption(citySelect, 'Kozhikkodu', 'Kozhikkodu');
      addOption(citySelect, 'Trivandrum', 'Trivandrum');
    } else if (state === 'state2') {
      addOption(citySelect, 'Chennai', 'Chennai');
      addOption(citySelect, 'Coimbatore', 'Coimabtore');
    } else if (state === 'state3') {
      addOption(citySelect, 'Panaji', 'Panaji');
      addOption(citySelect, 'Valpoi', 'Valpoi');
      addOption(citySelect, 'Ponda', 'Ponda');
    }
  }
  
  function addOption(selectElement, value, text) {
    var option = document.createElement('option');
    option.value = value;
    option.text = text;
    selectElement.add(option);
  }
  
  function validateForm(event) {
    event.preventDefault();
    
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var dateOfBirth = document.getElementById("dob").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var phone = document.getElementById("phonenumber").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var state = document.getElementById("state").value;
    var city = document.getElementById("city").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmpassword").value;
    
    // : required fields are not empty
    if (firstName === "" || lastName === "" || dateOfBirth === "" || age === "" || gender === "" || phone === "" || email === "" || address === "" || state === "" || city === "" || username === "" || password === "" || confirmPassword === "") {
      alert("Please fill in all required fields.");
      return;
    }
    
    // Checking  password and confirm password match
    if (password !== confirmPassword) {
      alert("Password and confirm password do not match.");
      return;
    }
    
    document.getElementById("registrationForm").submit();
  }
  function isNameValid(name) {
    var pattern = /^[a-zA-Z]+$/;
    return pattern.test(name);
  }

  function Age() {
    var dob = new Date(document.getElementById('dob').value);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    
    document.getElementById('age').value = age;
  }
  