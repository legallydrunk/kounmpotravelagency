function openNav() {
  document.getElementById("mySidenav").style.width = "250px";

  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";

  document.body.style.backgroundColor = "white";
}

var lastclick = true;


$("#opennavbtn").click(function() {

  if (lastclick == true) {
    openNav();
    lastclick = false;
    console.log("false");
  } else {
    closeNav();
    lastclick = true;
  }

});

$(".closebtn").click(function() {
  lastclick = true;
  closeNav();
});
