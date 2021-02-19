function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0"
  ;
};

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById("mySidenav").style.width = "0";
  } else {
   document.getElementById("mySidenav").style.width = "auto";
  }
}

var x = window.matchMedia("(max-width: 800px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
