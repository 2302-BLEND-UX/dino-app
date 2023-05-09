const result = document.getElementById('result');

// open page
const triBtn = document.getElementById('tri');
const triAnimation = document.getElementById('tri-animation');
const triContent = document.getElementById('tri-content');
const closeButton = document.getElementById('close');

closeButton.onclick = function() {
  triAnimation.classList.toggle("active");
  triContent.classList.toggle("active");
}

triBtn.onclick = function() {
  triAnimation.classList.toggle("active");
  const myTimeout = setTimeout(showTriContent, 700);
}

function showTriContent(){
  triContent.classList.toggle("active");
}
