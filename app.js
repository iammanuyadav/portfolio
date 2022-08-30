const homeClick = () => {
  document.getElementById("horseImage").style.display = "flex";
  document.getElementById("BBSet").style.display = "none";
  document.getElementById("DDSet").style.display = "none";
  document.getElementById("blog").style.display = "none";
  document.getElementById("aboutMe").style.display = "none";
};
const bbClick = () => {
  document.getElementById("horseImage").style.display = "none";
  document.getElementById("DDSet").style.display = "none";
  document.getElementById("BBSet").style.display = "flex";
  document.getElementById("blog").style.display = "none";
  document.getElementById("aboutMe").style.display = "none";
};
const ddClick = () => {
  document.getElementById("DDSet").style.display = "flex";
  document.getElementById("horseImage").style.display = "none";
  document.getElementById("BBSet").style.display = "none";
  document.getElementById("blog").style.display = "none";
  document.getElementById("aboutMe").style.display = "none";
};

const blogClick = () => {
  document.getElementById("blog").style.display = "flex";
  document.getElementById("horseImage").style.display = "none";
  document.getElementById("BBSet").style.display = "none";
  document.getElementById("DDSet").style.display = "none";

  document.getElementById("aboutMe").style.display = "none";
};
const aboutClick = () => {
  document.getElementById("aboutMe").style.display = "flex";
  document.getElementById("horseImage").style.display = "none";
  document.getElementById("BBSet").style.display = "none";
  document.getElementById("DDSet").style.display = "none";
  document.getElementById("blog").style.display = "none";
};

// Modal Functionality

let modal = document.getElementById("myModal");
let img = document.getElementById("homepageHorse");
let span = document.getElementsByClassName("close")[0];

img.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};
