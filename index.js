
var toggle = true;

var topm = document.getElementById("topmargin");
var topa = document.getElementById("topabout");
var moveButton = document.getElementById("gameclick");
var movingBox = document.getElementById("logo");
var initialTop = parseInt(getComputedStyle(movingBox).top);
var moveAmount = 2.5; // Adjust the amount by which you want to move

function hide() {
    $("#bottom_navigation").fadeOut();
    
    moveButton.addEventListener("click", function() {
        movingBox.style.top = (initialTop + moveAmount) + "vh";
        topm.style.marginTop = "5.5vh";
        topa.style.marginTop = "5.5vh";
    });
    
}
function show() {
    $("#bottom_navigation").show();
    moveButton.addEventListener("click", function() {
        movingBox.style.top = "0vh";
        topm.style.marginTop = "0vh";
        topa.style.marginTop = "0vh";
    });
    
}
function showLogin(){
    $("#login-container").fadeIn();
}
function hideLogin(){
    $("#login-container").fadeOut();
}
function hide() {
    $("#bottom_navigation").fadeOut();
    
    moveButton.addEventListener("click", function() {
        movingBox.style.top = (initialTop + moveAmount) + "vh";
        topm.style.marginTop = "5.5vh";
        topa.style.marginTop = "5.5vh";
    });
    
}
function show() {
    $("#bottom_navigation").show();
    moveButton.addEventListener("click", function() {
        movingBox.style.top = "0vh";
        topm.style.marginTop = "0vh";
        topa.style.marginTop = "0vh";
    });
    
}

function playGame(){
    if(toggle==true){
        show();
        toggle=false;
    }
    else{
        hide();
        toggle=true;
    }
}

function prev(){
    $(".game-cards").animate({scrollLeft: "-=320"}, "ease");
}

function next(){
    $(".game-cards").animate({scrollLeft: "+=320"}, "ease");
}

function prev2(){
    $(".game-cards2").animate({scrollLeft: "-=320"}, "ease");
}

function next2(){
    $(".game-cards2").animate({scrollLeft: "+=320"}, "ease");
}


// Drawer
const openDrawerButton = document.getElementById('openDrawer');
const closeDrawerButton = document.getElementById('closeDrawer');
const drawer = document.getElementById('drawer');

openDrawerButton.addEventListener('click', () => {
    drawer.style.left = '0';
    drawer.style.padding = '2.5vh';
});

closeDrawerButton.addEventListener('click', () => {
    drawer.style.left = '-50vh';
    drawer.style.padding = '0';
    
});

//menu drop down
const gameLink = document.getElementById('gameclick');
const submenu = document.querySelector('.submenu');
gameLink.addEventListener('click', () => {
    submenu.classList.toggle('submenu');
});

function facebook(){
    window.location.href='https://www.facebook.com/hardik.kolge.1/?locale=hi_IN';
}
function twitter(){
    window.location.href='#';
}
function youtube(){
    window.location.href='#';
}

//sliding content in index.html
var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide(){

  if(index<0){
    index = slides.length-1;
  }
  
  if(index>slides.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }
  
  slides[index].style.display= "block";
  dot[index].classList.add("active");
  
  index++;
  
  setTimeout(changeSlide,10000);
  
}

changeSlide(); 

function game(){
    window.location.href='games.html';
}