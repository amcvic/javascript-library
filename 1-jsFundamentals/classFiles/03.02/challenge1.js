let happyButton = document.getElementById('happyButton');
let happyPic= document.getElementById('happyPic');
let armsButton = document.getElementById('armsButton');
let armsPic = document.getElementById('armsPic');

happyButton.addEventListener('click',
  function () {
    if (happyPic.style.opacity == 0.5) {
      happyPic.style.opacity = 1;
    } else {
      happyPic.style.opacity = 0.5;
    }
  });

armsButton.addEventListener('click',
  function () {
    if (armsPic.style.borderRadius == "50%") {
      armsPic.style.borderRadius = "0%";
    } else {
      armsPic.style.borderRadius = "50%";
    }
});