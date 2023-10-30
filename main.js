const mainContainer = document.getElementById('mainContainer');

function getGrid (resolution = 16){
  for(i=1; i <= resolution*resolution; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'containerElement');
    div.style.cssText = `width: ${(1/resolution) * 100}%; 
                        height: ${(1/resolution) * 100}%;`
    mainContainer.appendChild(div);
  }

  const pixelDraw = document.querySelectorAll('.container > div');

  pixelDraw.forEach(function(e){
    e.addEventListener('mouseover', () => {e.classList.add('black')});
    e.addEventListener('mouseout', () => {e.classList.remove('black');});
  });
}
getGrid()

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
  if (resolution > 100) {
    alert("Only numbers under 100")
  } else {
    popup.classList.remove('show')
    newGrid(resolution)
  }
});

function newGrid(resolution) {
  const containerElement = document.getElementsByClassName('containerElement')
  const elementArray = Array.from(containerElement);

  elementArray.forEach(e => {
    e.parentNode.removeChild(e)
  })
  getGrid(resolution)
}