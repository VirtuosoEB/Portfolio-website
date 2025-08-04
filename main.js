console.log('Hello World!');
function injectSVG(id, filePath) {
  fetch(filePath)
    .then(res => res.text())
    .then(svg => {
      console.log(svg)
      document.getElementById(id).innerHTML = svg;

      const injected = document.getElementById(id).querySelector("svg");
      injected.classList.add("injected-svg");
    })
    .catch(err => console.error(`Failed to load ${filePath}`, err));
}
injectSVG("gear1", "assets/gear-svgrepo-com.svg")
injectSVG("gear2", "assets/gear-svgrepo-com.svg")
injectSVG("gear3", "assets/gear-svgrepo-com.svg")
injectSVG("gear4", "assets/gear-svgrepo-com.svg")
injectSVG("gear5", "assets/gear-svgrepo-com.svg")
injectSVG("gear6", "assets/gear-svgrepo-com.svg")
injectSVG("gear7", "assets/gear-svgrepo-com.svg")
injectSVG("gear8", "assets/gear-svgrepo-com.svg")
injectSVG("gear9", "assets/gear-svgrepo-com.svg")
injectSVG("gear10", "assets/gear-svgrepo-com.svg")
injectSVG("gear11", "assets/gear-svgrepo-com.svg")
injectSVG("gear12", "assets/gear-svgrepo-com.svg")
injectSVG("gear13", "assets/gear-svgrepo-com.svg")
injectSVG("gear14", "assets/gear-svgrepo-com.svg")
injectSVG("gear15", "assets/gear-svgrepo-com.svg")
injectSVG("gear16", "assets/gear-svgrepo-com.svg")
injectSVG("gear17", "assets/gear-svgrepo-com.svg")
injectSVG("gear18", "assets/gear-svgrepo-com.svg")
injectSVG("gear19", "assets/gear-svgrepo-com.svg")

injectSVG("cloud1", "/assets/04 Aug. 2025 (1).svg")
injectSVG("cloud2", "/assets/04 Aug. 2025 (1).svg")
injectSVG("cloud3", "/assets/04 Aug. 2025 (1).svg")
injectSVG("cloud4", "/assets/04 Aug. 2025 (1).svg")