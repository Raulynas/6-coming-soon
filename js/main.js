import { renderSocials } from "./components/renderSocials.js";
import { socialsData } from "./data/socialsData.js";

import { renderProgressBars } from "./components/renderProgressBars.js";
import { progressBarData } from "./data/progressBarData.js";

renderProgressBars(".left-column", progressBarData);
renderSocials("footer > .socials", socialsData);

// renderProgressBars(".left-column", [{ ssdf }]);
// renderProgressBars(".left-column", progressBarData);

// renderProgressBars(".left-column", [
//   { label: "Testing", value: 50 },
//   { label: "Testing", value: 50.4 },
//   { label: "Testing", value: 50.5431 },
// ]);
