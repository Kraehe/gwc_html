// This function makes text below the wizard visible
function start(){
  for (i=0;i<4;i++){
    app = document.getElementById('content'+ i);
    console.log(app)
    app.style.opacity = 0
    app.style.display = "none"
    console.log("i started!")
  };
}

function wizvis() {
  content = document.getElementById("wiz");
  content.innerHTML = "KEEP YOUR FILTHY PAWS OFF OF ME! <b>RELEASE ME!!</b>";
  console.log("keep ya hands to yourself")
}

// This function makes the text below the wizard disappear
function wizdis() {
  content = document.getElementById("wiz");
  content.innerHTML = "";
  console.log("ok good")
}

// This function makes the lil oof sound play
function oof() {
  var ouch = document.getElementById("wizoof");
  wizoof.play();
  console.log("don\'t poke him!!")
}

// This function will make the content on the page appear
function appear() {
  for (i=0;i<4;i++){
    app = document.getElementById('content'+ i);
    app.style.display = "block";
    for (x=0;x<100;x++){
      function makevis(){
          op = parseFloat(app.style.opacity)
          app.style.opacity = op + .01
          console.log(app.style.opacity)
      }
      setTimeout(makevis(), 1000)
      console.log("yur")
    }
    bt = document.getElementById('welc');
    bt.style.display = "none";
    console.log("wow it's at " + i)
  }
}
