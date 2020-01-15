document.addEventListener('DOMContentLoaded', function() {

document.getElementById("red-btn").addEventListener("click",createRedBox);
  function createRedBox() {
    var newRedBox = document.createElement("div");
    newRedBox.className="result-box red razzle-dazzle";
    document.getElementById("landing-box").appendChild(newRedBox);
    console.log("red button was clicked");
  }



  document.getElementById("green-btn").addEventListener("click",createGreenBox);
    function createGreenBox() {
      var newGreenBox = document.createElement("div");
      newGreenBox.className="result-box green razzle-dazzle";
      document.getElementById("landing-box").appendChild(newGreenBox);
      console.log("green button was clicked")
    }



  document.getElementById("blue-btn").addEventListener("click",createBlueBox);
    function createBlueBox() {
      var newBlueBox = document.createElement("div");
      newBlueBox.className="result-box blue razzle-dazzle";
      document.getElementById("landing-box").appendChild(newBlueBox);
      console.log("blue button was clicked")
    }



  document.getElementById("purple-btn").addEventListener("click",createPurpleBox);
    function createPurpleBox() {
      var newPurpleBox = document.createElement("div");
      newPurpleBox.className="result-box purple razzle-dazzle";
      document.getElementById("landing-box").appendChild(newPurpleBox);
      console.log("purple button was clicked")
    }

});
