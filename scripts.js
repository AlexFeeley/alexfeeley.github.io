// Landing Page Script
VANTA.BIRDS({
    el: "#vantajs",
    mouseControls: true,
    touchControls: true,
    scale: 1.00, // Take this out?
    scaleMobile: 1.00, // How's this look on phones without it?
    backgroundColor: 0x282828,
    color1: 0x350052,
    color2: 0x123c69,
    colorMode: "lerp",
    birdSize: 1.50,
    quantity: 3,
    separation: 15,
    cohesion: 50
});

// Collapsible Sections
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}