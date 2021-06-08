function myFunction() {
  document.getElementById("navbar__link").classList.toggle(".navbar__link");
  console.log("im clicked");
}

window.onclick = function (event) {
  if (!event.target.matches(".navbar__icon")) {
    var dropdowns = document.getElementsByClassName(".navbar__link");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains(".navbar__link ")) {
        openDropdown.classList.remove(".navbar__link ");
      }
    }
  }
};
