
// Variables
  var tScore = 0;
  var wScore = 0;
  var lScore = 0;
  var computerGuess = ["r", "p", "s"];
  var userRpsInput = document.getElementById("userInput");
  var error = document.getElementById("message");
  


// Action
  userRpsInput.addEventListener("keyup", userAction);
  
  function userAction(){
    var computerOutput = computerGuess[Math.floor(Math.random() * computerGuess.length)];
    if (userRpsInput.value === "p" || userRpsInput.value === "s" || userRpsInput.value === "r" ){
      console.log(userRpsInput.value);
      console.log(computerOutput);
    }
    else{
      console.log(error = "choose rock paper or scissor");
    //  error.innerHTML = "choose rock paper or scissor";
    }
    if((userRpsInput.value === "r") && (computerOutput ==="r")){
      tScore++;
    }
    else if((userRpsInput.value === "r") && (computerOutput ==="p")){
      lScore++;
    }
    else if((userRpsInput.value === "r") && (computerOutput ==="s")){
      wScore++;
    }

    else if((userRpsInput.value === "s") && (computerOutput ==="r")){
      lScore++;
    }
    else if((userRpsInput.value === "s") && (computerOutput ==="p")){
      wScore++;
    }
    else if((userRpsInput.value === "s") && (computerOutput ==="s")){
      tScore++;
    }

    else if((userRpsInput.value === "p") && (computerOutput ==="r")){
      wScore++;
    }
    else if((userRpsInput.value === "p") && (computerOutput ==="p")){
      tScore++;
    }
    else if((userRpsInput.value === "p") && (computerOutput ==="s")){
      lScore++;
    }

    document.querySelector("#winScore").innerHTML = wScore;
    document.querySelector("#lossScore").innerHTML = lScore;
    document.querySelector("#tieScore").innerHTML = tScore;
function first(){
    if(userRpsInput.value === "r"){
      document.getElementById("user1RockImg").style.display = "block";
      document.getElementById("user1PaperImg").style.display = "none";
      document.getElementById("user1ScissorImg").style.display = "none";
    }
    else if (userRpsInput.value === "p"){
      document.getElementById("user1RockImg").style.display = "none";
      document.getElementById("user1PaperImg").style.display = "block";
      document.getElementById("user1ScissorImg").style.display = "none";
    }
    else if (userRpsInput.value === "s"){
      document.getElementById("user1RockImg").style.display = "none";
      document.getElementById("user1PaperImg").style.display = "none";
      document.getElementById("user1ScissorImg").style.display = "block";
    }
}
first()
  
function second(){
    if(computerOutput === "r"){
      document.getElementById("computer2RockImg").style.display = "block";
      document.getElementById("computer2PaperImg").style.display = "none";
      document.getElementById("computer2ScissorImg").style.display = "none";
    }
    else if (computerOutput === "p"){
      document.getElementById("computer2RockImg").style.display = "none";
      document.getElementById("computer2PaperImg").style.display = "block";
      document.getElementById("computer2ScissorImg").style.display = "none";
    }
    else if (computerOutput === "s"){
      document.getElementById("computer2RockImg").style.display = "none";
      document.getElementById("computer2PaperImg").style.display = "none";
      document.getElementById("computer2ScissorImg").style.display = "block";
    }
}
second()
    userRpsInput.value = "";
  }
