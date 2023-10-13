document.addEventListener("DOMContentLoaded", function () {
  const buyNowButtons = document.querySelectorAll(".buyNow");

  buyNowButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedPrice = button.getAttribute("data-price");
      console.log(`Selected Price: ${selectedPrice}`);
    });
  });

  const assignedToButton = document.querySelector(".dropdown-button");
  const assignedToOptions = document.querySelector(".dropdown-options");

  assignedToButton.addEventListener("click", function () {
    assignedToOptions.classList.toggle("show-options");
  });

  // Handle option selection
  const options = document.querySelectorAll(".option");
  options.forEach(function (option) {
    option.addEventListener("click", function () {
      options.forEach(function (otherOption) {
        otherOption.classList.remove("selected");
      });

      option.classList.add("selected");

      assignedToButton.querySelector(".truncate").textContent =
        option.textContent;
      assignedToOptions.classList.remove("show-options");
    });
  });

  const submitButton = document.getElementById("submitSelection");
  submitButton.addEventListener("click", function () {
    const selectedOption = assignedToOptions.querySelector(".option.selected");
    if (selectedOption) {
      const selectedPrice = selectedOption.getAttribute("data-price");
      console.log(`Selected Price: ${selectedPrice}`);
      // Here you can perform further actions like submitting the selection to a server.
    } else {
      alert("Please select an option first.");
      console.log("Please select an option first.");
    }
  });
});
