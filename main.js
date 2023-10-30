const mainContainer = document.getElementById('mainContainer');

for(i=1; i <= 16; ++i) {
  const div = document.createElement('div');
  div.setAttribute('class', 'element');
  mainContainer.appendChild(div);
  div.textContent = `${i}`;
  console.log(div);
}
console.log(i)