// Utility function
function createElement(tag, attributes = {}) {
  const element = document.createElement(tag);

  for (const key in attributes) {
    if (key === "textContent") {
      element.textContent = attributes[key];
    } else {
      element.setAttribute(key, attributes[key]);
    }
  }

  return element;
}

// Add content to an element
function addElementToDOM(elementId, text) {
  const element = document.getElementById(elementId);

  if (element) {
    element.textContent = text;
  }
}

// Remove an element
function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId);

  if (element) {
    element.remove();
  }
}

// Simulate a button click
function simulateClick(elementId, text) {
  addElementToDOM(elementId, text);
}

// Handle form submission
function handleFormSubmit(formId, outputId) {
  const form = document.getElementById(formId);
  const input = form.querySelector("input");
  const output = document.getElementById(outputId);

  let error = document.getElementById("error-message");

  if (!error) {
    error = document.createElement("div");
    error.id = "error-message";
    error.classList.add("hidden");
    document.body.appendChild(error);
  }

  if (input.value.trim() === "") {
    error.textContent = "Input cannot be empty";
    error.classList.remove("hidden");
    return;
  }

  error.classList.add("hidden");
  output.textContent = input.value;
}

module.exports = {
  createElement,
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
};