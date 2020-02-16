function gameWorld() {
  const wrapper = document.getElementById('root');
  let child = wrapper.lastElementChild;  
  while (child) { 
    wrapper.removeChild(child); 
    child = wrapper.lastElementChild; 
  } 
  let innerDiv = document.createElement('div');
  innerDiv.setAttribute('id', 'innerDiv');
  innerDiv.style.width = '450px';
  innerDiv.style.position = 'absolute';
  innerDiv.style.left = '50%';
  innerDiv.style.top = '50%';
  innerDiv.style.transform = 'translate(-50%, -50%)';
  let time = getTimeInWords();
  for (let i = 0; i < 10; i++) {
    let rowContent = document.createElement('div');
    rowContent.setAttribute('class', 'clear-fix');

    for (let j = 0; j < 11; j++) {
      const sp = document.createElement('span');
      sp.setAttribute('class', '');
      const tn = document.createTextNode(CLOCK_ALPHABETS[11 * i + j]);
      if (i === 0) {
        if (j === 0 || j === 1 || j === 3 || j === 4) {
          sp.setAttribute('class', 'highlight');
        }
      } else {
        if (time.charAt(0) === CLOCK_ALPHABETS[11 * i + j]
          && isWordExists(time.split(' ')[0], CLOCK_ALPHABETS.slice(i * 11, (11 * i) + 11))) {
          sp.setAttribute('class', 'highlight');
          if (time.charAt(1) === ' ') {
            time = time.substring(1);
          }
          time = time.substring(1);
        }
      }

      sp.appendChild(tn);
      sp.style.float = 'left';
      sp.style.padding = '15px';
      rowContent.appendChild(sp);
    };

    innerDiv.appendChild(rowContent);
  }
  let canvas = document.createElement('canvas');
  canvas.height = 35;
  let ctx = canvas.getContext('2d');
  ctx.strokeStyle = '#101314';

  for (let i = 1; i < 5; i++){
    ctx.beginPath();
    ctx.arc(190 + (18 * i), 20, 5, 0, 2 * Math.PI);
    if (i <= new Date().getMinutes() % 5) {
      ctx.fillStyle = '#fff';
      ctx.fill();
    } 
    ctx.stroke();
  }
   
  innerDiv.appendChild(canvas);  
  wrapper.appendChild(innerDiv);
  setTimeout(gameWorld, 5000);
}

gameWorld();