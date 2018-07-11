var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

myHeading.onclick = function(){
  alert("click me");
}

var myImg = document.getElementById("myImg");
myImg.onclick = function(){
  if(myImg.getAttribute("src") == "images/firefox-icon.png"){
    myImg.setAttribute("src", "images/firefox-icon2.png")
  }
  else{
    myImg.setAttribute("src", "images/firefox-icon.png")
  }
}

refreshWelcome();


var btn = document.getElementById("btnChangeName");
btn.onclick = function(){
  var myName = prompt("please input your name", 'mok');
  localStorage.setItem("myName", myName);
  refreshWelcome();
}

function refreshWelcome(){
  var myName = localStorage.getItem('myName');
  if(myName!=null){
    myHeading.textContent = "hello" + myName;
  }
}
