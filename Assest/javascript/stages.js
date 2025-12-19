// ================= SELECT FORMS =================
const step1Form = document.getElementById("step1Form");
const step2Form = document.getElementById("step2Form");
const step3Form = document.getElementById("step3Form");

// ================= INITIAL VIEW =================
step1Form.style.display = "block";
step2Form.style.display = "none";
step3Form.style.display = "none";

// ================= STEP 1 → STEP 2 =================
step1Form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');

  if (!email || !password || !gender) {
    alert("Please complete Step 1");
    return;
  }

  step1Form.style.display = "none";
  step2Form.style.display = "block";
});

// ================= STEP 2 → STEP 3 =================
step2Form.addEventListener("submit", function (e) {
  e.preventDefault();

  const country = document.getElementById("country").value.trim();
  const city = document.getElementById("city").value.trim();

  if (!country || !city) {
    alert("Please complete Step 2");
    return;
  }

  step2Form.style.display = "none";
  step3Form.style.display = "block";
});

// ================= FINAL SUBMIT =================
step3Form.addEventListener("submit", function (e) {
  e.preventDefault();

  const qualification = document.getElementById("qualification").value;
  const skills = document.getElementById("skills").value.trim();

  if (!qualification || !skills) {
    alert("Please complete Step 3");
    return;
  }

  alert("Signup Successful 🎉");
});
