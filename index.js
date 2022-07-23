const ratingForm = document.querySelector("#ratingForm");
const ratingFeedback = document.querySelector("#ratingFeedback");
const selectedValue = document.querySelector("#selectedValue");
const Container = document.querySelector("#container");
const Form = document.querySelector("form");

let selectedValueState = 1; //default state

Form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const outputValue = Form.elements["rating-btn"].value;

  // add form shake animation
  if (!outputValue) Container.classList.add("form-invalid");

  // remove form shake animation
  setTimeout(() => {
    Container.classList.remove("form-invalid");
  }, 1000);

  // still check
  if (outputValue) {
    selectedValueState = outputValue;
    selectedValue.innerText = selectedValueState;

    ratingForm.classList.add("hide");
    ratingFeedback.classList.add("show");
  }
});
