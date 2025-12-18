const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const genderInputs = document.querySelectorAll('input[name="gender"]');

const emailError = emailInput.nextElementSibling;
const passwordError = passwordInput.nextElementSibling;
const genderError = document.querySelector('.gender-options + .error');

const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordReg = /^(?=.*\d).{8,}$/;

// 🔹 Email live validation
emailInput.addEventListener("input", () => {
  if (!emailReg.test(emailInput.value.trim())) {
    showError(emailInput, emailError, "Invalid email format");
  } else {
    showSuccess(emailInput, emailError);
  }
});

// 🔹 Password live validation
passwordInput.addEventListener("input", () => {
  if (!passwordReg.test(passwordInput.value.trim())) {
    showError(
      passwordInput,
      passwordError,
      "Min 8 chars & at least one number"
    );
  } else {
    showSuccess(passwordInput, passwordError);
  }
});

// 🔹 Gender validation (on change)
genderInputs.forEach(radio => {
  radio.addEventListener("change", () => {
    if (document.querySelector('input[name="gender"]:checked')) {
      genderError.classList.remove("show");
    }
  });
});

// ---------------- helper functions ----------------

function showError(input, errorEl, message) {
  input.classList.add("invalid");
  input.classList.remove("valid");
  errorEl.textContent = message;
  errorEl.classList.add("show");
}

function showSuccess(input, errorEl) {
  input.classList.remove("invalid");
  input.classList.add("valid");
  errorEl.textContent = "";
  errorEl.classList.remove("show");
}
