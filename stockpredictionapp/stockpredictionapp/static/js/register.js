const usernameField = document.querySelector("#usernameField");
const feedbackArea = document.querySelector(".invalid_feedback");
const usernameSuccessOutput = document.querySelector(".usernameSuccessOutput");
const submitBtn = document.querySelector(".submit-btn");

const showPasswordToggle = document.querySelectorAll(".showPasswordToggle");
const passwordFields = document.querySelector(".form-control[type='password']");

const emailField = document.querySelector("#emailField");
const emailFeedbackArea = document.querySelector(".emailFeedbackArea");

usernameField.addEventListener("keyup", (e) => {
    const usernameVal = e.target.value;
  
    usernameSuccessOutput.style.display = "block";
  
    usernameSuccessOutput.textContent = `Checking ${usernameVal}`;
  
    usernameField.classList.remove("is-invalid");
    feedbackArea.style.display = "none";
  
    if (usernameVal.length > 0) {
      fetch("/authentication/validate-username", {
        body: JSON.stringify({ username: usernameVal }),
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => {
          usernameSuccessOutput.style.display = "none";
          if (data.username_error) {
            submitBtn.disabled = true;
            usernameField.classList.add("is-invalid");
            feedbackArea.style.display = "block";
            feedbackArea.innerHTML = `<p>${data.username_error}</p>`;
          } else {
            submitBtn.removeAttribute("disabled");
          }
        });
    }
  });


emailField.addEventListener("keyup", (e) => {
    const emailVal = e.target.value;
  
    emailField.classList.remove("is-invalid");
    emailFeedbackArea.style.display = "none";
  
    if (emailVal.length > 0) {
      fetch("/authentication/validate-email", {
        body: JSON.stringify({ email: emailVal }),
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.email_error) {
            submitBtn.disabled = true;
            emailField.classList.add("is-invalid");
            emailFeedbackArea.style.display = "block";
            emailFeedbackArea.innerHTML = `<p>${data.email_error}</p>`;
          } else {
            submitBtn.removeAttribute("disabled");
          }
        });
    }
  });


  const handleToggleInput = (e) => {
    const targetField = e.target.previousElementSibling;
    if (targetField.getAttribute("type") === "password") {
      e.target.textContent = "Hide";
      targetField.setAttribute("type", "text");
    } else {
      e.target.textContent = "Show";
      targetField.setAttribute("type", "password");
    }
  };
  
  //showPasswordToggle.addEventListener("click", handleToggleInput);
  showPasswordToggle.forEach((toggleBtn) => {
    toggleBtn.addEventListener("click", handleToggleInput);
  });