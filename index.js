function popupopen() {
  let a = document.getElementById("name").value;
  let b = document.getElementById("email").value;
  let c = document.getElementById("text").value;

  if(a === "" ) {
    alert("Name required!");
  }
  else if(b === "") {
    alert("Email required!");
  } 
  else if(c === "") {
    alert("Type any message to a Awais Baloch!");
  }
    else {
    alert("Your information has been submitted");
  }
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior:"smooth"
    });
}
function scrollTopSmooth() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


