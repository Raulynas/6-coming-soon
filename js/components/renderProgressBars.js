import { formatNumber } from "./formatNumber.js";

function renderProgressBars(selector, data) {
  //validation

  if (typeof selector !== "string" || selector === "") {
    console.error("ERROR: Wrong selector format");
    return false;
  }
  if (!Array.isArray(data) || data.length === 0) {
    console.error("ERROR: Wrong data format");
    return false;
  }

  //logic
  const DOM = document.querySelector(selector);

  if (!DOM) {
    console.error("ERROR: Element not found");
    return false;
  }
  let HTML = "";
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const formatedValue = formatNumber(item.value, 0);

    //object validation

    if (
      typeof item !== "object" ||
      Array.isArray(item) ||
      !item.label ||
      typeof item.label !== "string" ||
      !item.value ||
      !isFinite(item.value) ||
      typeof item.value !== "number" ||
      item.value < 0 ||
      item.value > 100 ||
      formatedValue === false
    ) {
      continue;
    }

    HTML += `<div class="progress-bar">
        <div class = "top">
            <div class="label">${item.label}</div>
            <div class="value">${formatedValue}%</div>
        </div>
        <div class = "bottom">
            <div class = "progress" style = "width: ${item.value}%" >
              <div class= "loading"></div>
            
            </div>
            
        </div>
    </div>`;
  }

  DOM.insertAdjacentHTML("beforeend", HTML);

  //post logic validation

  if (HTML === "") {
    console.error("ERROR: no objects found, hense HTML has not been generated");
    return false;
  }

  //return results
}

export { renderProgressBars };
