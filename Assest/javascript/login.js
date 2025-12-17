
// login
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');

  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordReg = /^(?=.*\d).{8,}$/;

  let valid = true;
  const errors = document.querySelectorAll(".error");
  errors.forEach(err => err.textContent = "");

  // Email check
  if (!emailReg.test(email)) {
    errors[0].textContent = "Enter a valid email address";
    valid = false;
  }

  // Password check
  if (!passwordReg.test(password)) {
    errors[1].textContent = "Password must be at least 8 characters & include a number";
    valid = false;
  }

  // Gender check
  if (!gender) {
    errors[2].textContent = "Please select a gender";
    valid = false;
  }

  if (valid) {
    alert("Login successful ✅");
  }
});
