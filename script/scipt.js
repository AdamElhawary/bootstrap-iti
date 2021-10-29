let enButton = document.getElementById("enButton");
let arButton = document.getElementById("arButton");
let html = document.querySelector("html");
let link = document.createElement("link");
let head = document.getElementsByTagName("HEAD")[0];
changeLang = (language) => {
  if (language !== "en") {
    html.setAttribute("lang", "ar");
    html.setAttribute("dir", "rtl");
    enButton.style.display = "block";
    arButton.style.display = "none";
    link.rel = "stylesheet";
    link.href = "./css/ar.css";
    head.appendChild(link);
  } else {
    html.setAttribute("lang", "en");
    html.setAttribute("dir", "ltr");
    arButton.style.display = "block";
    enButton.style.display = "none";
    head.removeChild(head.lastChild);
  }
};

hideWelcome = () => {
  let hero = document.querySelector(".hero");
  if (hero.style.display !== "none") {
    hero.style.display = "none";
  } else {
    hero.style.display = "block";
  }
};

var myCarousel = document.querySelector("#myCarousel");
var carousel = new bootstrap.Carousel(myCarousel);
