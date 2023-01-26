
const form = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit");
const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault(); // prevent form from submitting

  submitBtn.disabled = true;  // initially disable the submit button

  // Check if the name field is empty
  if (!nameInput.value) {
    nameError.innerText = "Name field is required";
    return;
  }

  // Check if the name meets the regular expression requirements
  const nameRegex = /^([a-zA-Z]{3,}\s[a-zA-Z]{3,})$/;
  if (!nameRegex.test(nameInput.value)) {
    nameError.innerText = "Name must be 2 words with minimum of 3 letters each";
    return;
  }

  // If validation passed, clear the error message, enable the submit button and submit the form
  nameError.innerText = "";
  submitBtn.disabled = false;  
  form.submit();
}


// function sendEmail() {
//     Email.send({
//       Host: "smtp.elasticemail.com",
//       Username: "marlowetan2023@gmail.com",
//       Password: "00C5FDDDFA8202D2E47F02316F75E4A5E5C8",
//       To: 'marlowetan2023@gmail.com',
//       From: document.getElementById("email").value,
//       Subject: "Contact form",
//       Body: "My body"
//     }).then(
//       message => alert(message)
//     );
//   }