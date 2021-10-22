var answer = ['images/image-1.png', 'images/image-2.png', 'images/image-3.png', 'images/image-4.png', 'images/image-5.png'];
var getImage = document.querySelector('.main_image');
var leftArrow = document.querySelector('.left');
var rightArrow = document.querySelector('.right');

rightArrow.addEventListener('click',button_right);
leftArrow.addEventListener('click',button_left);

var numIndex = answer.indexOf(getImage.getAttribute('src'));

function button_right(){
  if (numIndex < answer.length-1){
  numIndex++;
  } else {
  numIndex = 0;
  }
  dot_click(numIndex);
}

function button_left(){
  if (numIndex > 0){
  numIndex--;
  } else {
  numIndex= 4;
  }
  dot_click(numIndex);
}

var target = document.querySelectorAll('.dot');
var targetLength = target.length;

for(let i = 0; i<targetLength; i++){
  target[i].addEventListener('click',function(){dot_click(i)})
}

function dot_click(x){
  target.classList.remove('active');
  getImage.src = answer[x];
  target[x].classList.add('active');
}