const mainContainer = document.getElementById('mainContainer');

function getGrid (resolution = 16){
  for(i=1; i <= resolution*resolution; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', '');
    mainContainer.appendChild(div);
  }
}

getGrid()

const pixelDraw = document.querySelectorAll('.container > div');

pixelDraw.forEach(function(element){
  element.addEventListener('mouseover', () => {element.classList.add('black')});
  element.addEventListener('mouseout', () => {element.classList.remove('black');});
});


const popup = document.querySelector('.modalContainer');
const openPopup = document.getElementById('openPopup');
const closePopup = document.getElementById('closePopup');

openPopup.addEventListener('click', () => {
  popup.classList.add('show');

}); 

closePopup.addEventListener('click', () => {
  popup.classList.remove('show');
}); 

document.getElementById('resolutionForm').addEventListener('submit', e => {
  e.preventDefault()

  const resolution = document.getElementById('resolution').value;

  let formDate = {
    resolution: resolution
  }
  console.log(resolution)
})
