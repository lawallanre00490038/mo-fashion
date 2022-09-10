function myFunction() {
  const nav = document.querySelector(".nav-content");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.breadcrum')) {
    var dropdowns = document.querySelector(".nav-content");
    if (dropdowns.classList.contains('show')) {
        dropdowns.classList.remove('show');
      }
    // console.log(dropdowns)
    // var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
  }
}


