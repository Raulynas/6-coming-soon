function clock(selector, deadline) {
  //validation
  if (typeof selector !== "string" || selector === "") {
    console.error("ERROR: netinkamo formato selectorius");
    return false;
  }
  if (
    typeof deadline !== "string" ||
    deadline === "" ||
    !isFinite(new Date("2000-" + deadline).getTime())
  ) {
    console.error("ERROR: netinkamo formato deadline");
    return false;
  }

  //logic
  const DOM = document.querySelector(selector);
  if (!DOM) {
    console.error("ERROR: pagal pateikta selectoriu elementas nerastas");
    return false;
  }
  const labels = ["days", "hours", "minutes", "seconds"];

  let numbers = updateClock(deadline);

  let HTML = "";

  for (let i = 0; i < 4; i++) {
    const key = labels[i];
    HTML += `<div class="time">
                <div class="value">${formatTime(numbers[key])}</div>    
                <div class="label">${key}</div>    
            </div>`;
  }

  //result

  DOM.innerHTML = HTML;

  const allValuesDOM = DOM.querySelectorAll(`.value`);

  setInterval(function () {
    numbers = updateClock(deadline);
    for (let i = 0; i < 4; i++) {
      const key = labels[i];
      allValuesDOM[i].innerText = formatTime(numbers[key]);
    }
  }, 1000);
}

function updateClock(deadline) {
  const date = new Date();

  let deadlineYear = date.getFullYear();
  let timeLeft = `${deadlineYear}-${deadline}`;
  let timeLeftInMiliseconds = new Date(timeLeft).getTime();
  const now = Date.now();

  if (timeLeftInMiliseconds < now) {
    deadlineYear++;
    timeLeft = `${deadlineYear}-${deadline}`;
    timeLeftInMiliseconds = new Date(timeLeft).getTime();
  }

  const diff = timeLeftInMiliseconds - now;

  let unusedSeconds = Math.round(diff / 1000);
  const days = Math.floor(unusedSeconds / 60 / 60 / 24);
  unusedSeconds -= days * 60 * 60 * 24;

  const hours = Math.floor(unusedSeconds / 60 / 60);
  unusedSeconds -= hours * 60 * 60;

  const minutes = Math.floor(unusedSeconds / 60);

  const seconds = (unusedSeconds -= minutes * 60);

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}
function formatTime(number) {
  if (number < 10) {
    number = "0" + number;
  }
  return number;
}

export { clock };
