// 1.-Save Variables

// 1.1-Save Inputs

const emailInput = document.querySelector('[data-js="email"]');

// 1.2-Save Outputs

const errorMessage = document.querySelector('[data-js="error-message"]');
const successEmailMessage = document.querySelector('[data-js="success-email"]');

// 1.3-Save other changing Elements

const mainSection = document.querySelector('[data-js="main-section"]');
const successSection = document.querySelector('[data-js="success-section"]');

// 1.4- Save button to go back

const dissmissBtn = document.querySelector('[data-js="dissmiss-btn"]');

// 2.-Save regex to validation

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// ---------MAIN-------FUNCTION

const submitData = () => {
  // 3.- Save values

  let email = emailInput.value;

  //   4.-Validation/error Handling

  if (!emailRegex.test(email)) {
    emailInput.classList.add("error-message");
    errorMessage.style.display = "block";
    return;
  } else {
    // 5.-Display the sucessSection;
    emailInput.classList.remove("error-message");
    errorMessage.style.display = "none";
    mainSection.style.display = "none";
    successEmailMessage.innerHTML = email;
    successSection.style.display = "block";
  }

  //   5.-remove the error styles if the focus are inside
  emailInput.addEventListener("click", () => {
    emailInput.value = "";
    emailInput.classList.remove("error-message");
    errorMessage.style.display = "none";
  });
};

// --- Secondary function

//   6.-Go Back to the Beginnig

const goHome = () => {
  successSection.style.display = "none";
  mainSection.style.display = "block";
};

goHome();
