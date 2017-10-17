(function(){
  let myName = document.getElementById("my-name"); 
  let userName = document.getElementById("user-name"); 
  let getName = document.getElementById("get-name");
  
  let myLivingLife = document.getElementById("Living-Life");
  
  function PerformGreeting() {
    myName.innerHTML = userName.value;
	myLivingLife.innerHTML = userName.value;
    event.preventDefault();
    return false;
  }

  if (typeof event === "undefined") {
    getName.onsubmit = PerformGreeting; //Firefox
  } else {
    getName.addEventListener("submit", PerformGreeting);
  }
  
}());
