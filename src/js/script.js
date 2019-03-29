import 'waypoints/lib/noframework.waypoints.min.js'

const sections = document.querySelectorAll('.section');

sections.forEach(section => {
var waypoint = new Waypoint({
  element: section,
  handler: function(direction) {
    section.classList.add('section--reached')
  },
  offset:'40%'
})
})

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slideshow__slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
} 


document.getElementById("navbar").addEventListener("click", navbar, false);
  function navbar() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.getElementById("navbar").addEventListener("click", burger, false);
function burger() {
  var element = document.getElementById("burger");
  element.classList.toggle("fa-times");
  element.classList.toggle("fas");
}