document.addEventListener('DOMContentLoaded', function() {

document.getElementById("red-btn").addEventListener("click",createRedBox);
  function createRedBox() {
    var newRedBox = document.createElement("div");
    newRedBox.className="result-box red";
    document.getElementById("landing-box").appendChild(newRedBox);
    console.log("red button was clicked");
  }



  document.getElementById("green-btn").addEventListener("click",createGreenBox);
    function createGreenBox() {
      var newGreenBox = document.createElement("div");
      newGreenBox.className="result-box green";
      document.getElementById("landing-box").appendChild(newGreenBox);
      console.log("green button was clicked")
    }



  document.getElementById("blue-btn").addEventListener("click",createBlueBox);
    function createBlueBox() {
      var newBlueBox = document.createElement("div");
      newBlueBox.className="result-box blue";
      document.getElementById("landing-box").appendChild(newBlueBox);
      console.log("blue button was clicked")
    }

});
