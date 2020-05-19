const DOM = {
  form: document.querySelector("#send-palidrom"),
  name: document.querySelector("#user-name"),
  email: document.querySelector("#user-email"),
  palidrom: document.querySelector("#user-palidrom"),
  cta: document.querySelector("#send"),
  answer: document.querySelector(".answer"),
};

const emailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const controller = (event) => {
  event.preventDefault();
  if (DOM.name.value == "") {
    DOM.name.style.border = "1px solid red";
  } else {
    DOM.name.style.border = "none";
  }
  if (DOM.palidrom.value == "") {
    DOM.palidrom.style.border = "1px solid red";
  } else {
    DOM.palidrom.style.border = "none";
  }
  if (!emailIsValid(DOM.email.value)) {
    DOM.email.style.border = "1px solid red";
  } else {
    DOM.email.style.border = "none";
  }
  if (
    DOM.name.value != "" &&
    DOM.palidrom.value != "" &&
    emailIsValid(DOM.email.value)
  ) {
    DOM.form.style.display = "none";
    DOM.answer.style.display = "block";
  }
};

DOM.cta.addEventListener("click", controller);
