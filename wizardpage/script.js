// This function makes text below the wizard visible
window.onload = setup;
function setup(){
  for (i=0;i<5;i++){
    app = document.getElementById('content'+i);
    app.style.display = "none";
    app.style.opacity = 0
  };
}

function wizvis() {
  content = document.getElementById("wiz");
  content.innerHTML = "KEEP YOUR FILTHY PAWS OFF OF ME! <b>RELEASE ME!!</b>";
}

// This function makes the text below the wizard disappear
function wizdis() {
  content = document.getElementById("wiz");
  content.innerHTML = "";
}

// This function makes the lil oof sound play
function oof() {
  var ouch = document.getElementById("wizoof");
  wizoof.play();
}

// This function will make the content on the page appear
function appear() {
  for (i=0;i<5;i++;){
    app = document.getElementById('content'+i);
    app.style.display = "block";
    for (i=0;i<100;i++;){
      app.style.opacity += .1
    }
    bt = document.getElementById('welc');
    bt.style.display = "none";
  };
}
