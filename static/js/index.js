const breadcrum =  document.querySelector(".breadcrum");
const body = document.querySelector("body");
breadcrum.onclick = function(){
    const nav = document.querySelector(".nav-content");
    const li = document.querySelectorAll(".nav-content li")
    
    nav.classList.toggle("show");

      // Animate links 
    li.forEach(elem => {
        elem.classList.toggle("showLI");
    });


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


