const ratingForm = document.querySelector("#ratingForm");
const ratingFeedback = document.querySelector("#ratingFeedback");
const selectedValue = document.querySelector("#selectedValue");
const Form = document.querySelector("form");

let selectedValueState = 1; //default state

Form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const outputValue = Form.elements["rating-btn"].value;

  if (outputValue) {
    selectedValueState = outputValue;
    selectedValue.innerText = selectedValueState;

    ratingForm.classList.add("hide");
    ratingFeedback.classList.add("show");
  }
});
