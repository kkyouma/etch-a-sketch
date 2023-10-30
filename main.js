const mainContainer = document.getElementById('mainContainer');

for(i=1; i <= 16*16; i++) {
  const div = document.createElement('div');
  div.setAttribute('class', '');
  mainContainer.appendChild(div);
}

const pixelDraw = document.querySelectorAll('.container > div');

pixelDraw.forEach(function(element){
  element.addEventListener('mouseover', function() {
    element.classList.add('black');
  });
});

pixelDraw.forEach(function(element){
  element.addEventListener('mouseout', function() {
    element.classList.remove('black');
  });
});

