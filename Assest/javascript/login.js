
const loginForm = document.getElementById("loginForm");

const emailInput = loginForm.querySelector('[name="email"]');
const passwordInput = loginForm.querySelector('[name="password"]');
const genderInputs = loginForm.querySelectorAll('[name="gender"]');

const emailError = emailInput.nextElementSibling;
const passwordError = passwordInput.nextElementSibling;
const genderError = document.querySelector('.gender-options + .error');

const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordReg = /^(?=.*\d).{8,}$/;

// ---------------- REAL-TIME VALIDATION ----------------

// Email
emailInput.addEventListener("input", () => {
  validateEmail();
});

// Password
passwordInput.addEventListener("input", () => {
  validatePassword();
});

// Gender (on change)
genderInputs.forEach(radio => {
  radio.addEventListener("change", () => {
    if (document.querySelector('[name="gender"]:checked')) {
      genderError.textContent = "";
    }
  });
});

// ---------------- FORM SUBMIT (FormData) ----------------

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  const email = formData.get("email")?.trim();
  const password = formData.get("password")?.trim();
  const gender = formData.get("gender");

  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isGenderValid = validateGender(gender);
if (isEmailValid && isPasswordValid && isGenderValid) {

  setCookie("loggedIn", "true", 1);   // 1 day session
  setCookie("email", email, 1);
  setCookie("gender", gender, 1);

  window.location.href = "user.html";
}
});

// ---------------- VALIDATION FUNCTIONS ----------------

function validateEmail() {
  if (!emailReg.test(emailInput.value.trim())) {
    showError(emailInput, emailError, "Enter a valid email");
    return false;
  }
  showSuccess(emailInput, emailError);
  return true;
}

function validatePassword() {
  if (!passwordReg.test(passwordInput.value.trim())) {
    showError(
      passwordInput,
      passwordError,
      "Min 8 characters & one number"
    );
    return false;
  }
  showSuccess(passwordInput, passwordError);
  return true;
}

function validateGender(gender) {
  if (!gender) {
    genderError.textContent = "Please select a gender";
    return false;
  }
  genderError.textContent = "";
  return true;
}

// ---------------- UI HELPERS ----------------

function showError(input, errorEl, message) {
  input.classList.add("invalid");
  input.classList.remove("valid");
  errorEl.textContent = message;
}

function showSuccess(input, errorEl) {
  input.classList.remove("invalid");
  input.classList.add("valid");
  errorEl.textContent = "";
}
if (getCookie("loggedIn") === "true") {
  window.location.href = "user.html";
}

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}

function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}
