function clock(selector) {
  //validations

  if (typeof selector !== "string" || selector === "") {
    console.log("ERROR: Wrong selector format");
    return false;
  }

  //logic
  const DOM = document.querySelector(selector);
  if (!DOM) {
    console.error("ERROR: elemnt has not been found");
    return false;
  }

  let HTML = "";

  for (let i = 0; i < 4; i++) {
    HTML += `<div class="time">TIME</div>`;
  }

  //post logic value

  //result
  DOM.innerHTML = HTML;
}
export { clock };
