// ================= STEP 1 =================
const step1Form = document.getElementById("step1Form");

if (step1Form) {
  step1Form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');

    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passReg = /^(?=.*\d).{8,}$/;

    if (!emailReg.test(email)) return alert("Invalid Email");
    if (!passReg.test(password)) return alert("Weak Password");
    if (!gender) return alert("Select gender");

    sessionStorage.setItem("step1", JSON.stringify({
      email,
      password,
      gender: gender.value
    }));

    window.location.href = "step2.html";
  });
}

// ================= STEP 2 =================
const step2Form = document.getElementById("step2Form");

if (step2Form) {
  step2Form.addEventListener("submit", function (e) {
    e.preventDefault();

    const country = document.getElementById("country").value.trim();
    const city = document.getElementById("city").value.trim();
    const address = document.getElementById("address").value.trim();

    if (!country || !city || !address)
      return alert("All fields are required");

    sessionStorage.setItem("step2", JSON.stringify({
      country,
      city,
      address
    }));

    window.location.href = "step3.html";
  });
}

// ================= STEP 3 =================
const step3Form = document.getElementById("step3Form");

if (step3Form) {
  step3Form.addEventListener("submit", function (e) {
    e.preventDefault();

    const qualification = document.getElementById("qualification").value;
    const skills = document.getElementById("skills").value.trim();

    if (!qualification) return alert("Select qualification");

    sessionStorage.setItem("step3", JSON.stringify({
      qualification,
      skills
    }));

    const data = {
      ...JSON.parse(sessionStorage.getItem("step1")),
      ...JSON.parse(sessionStorage.getItem("step2")),
      ...JSON.parse(sessionStorage.getItem("step3"))
    };

    console.log("Final Form Data:", data);
    alert("Signup Completed Successfully ✅");

    sessionStorage.clear();
  });
}