const mainContainer = document.getElementById('mainContainer');

for(i=0; i < 16; ++i) {
  const div = document.createElement('div');
  div.setAttribute('class', 'element');
  div.textContent = `${i}`;
  console.log(div);
}
console.log(i)