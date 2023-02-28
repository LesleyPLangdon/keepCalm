const price = 11.99;
let quantity;
let total;
document.getElementById("css2").innerHTML = "Animations";
document.getElementById("css2").href = "sitePages/cssAnimation.html";
document.getElementById("css2").href = "sitePages/cssAnimation.html";
function userInput() {
  quantity = prompt("How many would you like?");
  total = price * quantity;
  document.getElementById("total").innerHTML = total;
}


function sample() {

  quantity = 5;
  total = price * quantity;
   document.getElementById("tot").innerHTML = total;
  // document.write("Your total is: " + total)
}

