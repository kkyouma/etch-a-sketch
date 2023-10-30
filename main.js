const mainContainer = document.getElementById('mainContainer');

for(i=1; i <= 16*16; i++) {
  const div = document.createElement('div');
  div.setAttribute('class', '');
  mainContainer.appendChild(div);
}

const pixelDraw = document.querySelectorAll('.container > div');

pixelDraw.forEach(function(element){
  element.addEventListener('mouseover', () => {element.classList.add('black')});
  element.addEventListener('mouseout', () => {element.classList.remove('black');});
});


const openPopup = document.getElementById('openPopup');
const popup = document.querySelector('.modalContainer');
const closePopup = document.getElementById('closePopup');

openPopup.addEventListener('click', () => {
  popup.classList.add('show');
}); 

closePopup.addEventListener('click', () => {
  popup.classList.remove('show');
}); 