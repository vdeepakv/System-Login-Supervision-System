//script.js - Javascript:

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get input values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Basic input validation
  if (username === "" || password === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Create an object to send as POST data
  var loginData = {
    username: username,
    password: password
  };

  // Make an AJAX POST request to the server
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "LoginServlet", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Successful login
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to dashboard
      } else {
        // Failed login
        alert("Login failed. Please check your credentials.");
      }
    }
  };
  xhr.send(JSON.stringify(loginData));
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get input values
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Basic input validation
  if (username === "" || email === "" || password === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Create an object to send as POST data
  var registerData = {
    username: username,
    email: email,
    password: password
  };

  // Make an AJAX POST request to the server
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "RegisterServlet", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Successful registration
        alert("Registration successful! You can now log in.");
        window.location.href = "login.html"; // Redirect to login page
      } else {
        // Failed registration
        alert("Registration failed. Please try again later.");
      }
    }
  };
  xhr.send(JSON.stringify(registerData));
});
