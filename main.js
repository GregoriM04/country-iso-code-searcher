const searchButton = document.getElementById("search");
const flagImg = document.getElementById("flag-img");
const result = document.getElementById("result");
const inputIso = document.getElementById("input-iso");

function searchIsoCode() {
  let userTextInput = inputIso.value.toUpperCase();
  let inputString = userTextInput.split(" ");
  let text;
  let flagName;

  if (inputString[0] === "") {
    flagImg.style.display = "none";
    selectText(inputIso);
    return (result.innerText = "Typing error. Please retry!");
  } else {
    const found = IsoCodes.find((element) => element.iso_code === userTextInput);
    text = found;
  }

  if (text == undefined) {
    flagImg.style.display = "block";
    flagImg.style.boxShadow = "none";
    flagImg.setAttribute("src", "./assets/images/no-results.png");
    result.innerText = "Not found, try again!";
  } else {
    flagName = text.iso_code.toLowerCase() + ".svg";
    flagImg.style.display = "block";
    flagImg.style.boxShadow = "var(--shadow)";
    flagImg.setAttribute("src", "./assets/flags/" + flagName);

    return (result.innerText =
      "The " +
      text.iso_code +
      " belongs to " +
      text.country +
      ", on " +
      text.continent +
      ".");
  }
}

searchButton.addEventListener("click", () => searchIsoCode());
document.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    searchIsoCode();
  }
});


function selectText(input) {
    input.focus();
    input.select();
}
