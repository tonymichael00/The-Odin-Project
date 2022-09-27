//sets initial row and height value as well as loads pixels.
let pixelNo = 3;
document.onload = createPixels();

sketchTbl = document.getElementById('sketchTbl');

function colorPixels(e) {
  console.log('target background' + e.target.style.backgroundColor);

  if (e.target && e.target.nodeName == 'TD') {
    switch (e.target.style.backgroundColor) {
      case 'rgb(0, 0, 0)':
        console.log('rgb black ');
        break;
      case 'rgb(255, 255, 255)':
        let r = Math.round(Math.random() * 255);
        let g = Math.round(Math.random() * 255);
        let b = Math.round(Math.random() * 255);
        e.target.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
        console.log('NEW COLOR rgb: ' + r + ' ,' + g + ' ,' + b);
        break;
      default:
        let rgb = e.target.style.backgroundColor;
        let rgbArr = rgb.replace(/[^\d,]/g, '').split(',');
        for (let i = 0; i < rgbArr.length; i++) {
          rgbArr[i] = rgbArr[i] - 25.6;
          if (rgbArr[i] < 0) {
            rgbArr[i] = 0;
          }
        }
        e.target.style.backgroundColor =
          'rgb(' + rgbArr[0] + ', ' + rgbArr[1] + ', ' + rgbArr[2] + ')';
    }
  }
}

function createPixels() {
  //creates pixels
  for (let i = 0; i < pixelNo; i++) {
    var tr = document.createElement('tr');
    sketchTbl.appendChild(tr);
    for (let j = 0; j < pixelNo; j++) {
      var td = document.createElement('TD');
      sketchTbl.getElementsByTagName('TR')[i].appendChild(td);
      sketchTbl.getElementsByTagName('TR')[i].getElementsByTagName('TD')[
        j
      ].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  }
  //when mouse hovers checks if black, white or colored. If colored reduces RGB values by 10%. If white, assigns random color, if black ignores
  document
    .getElementById('sketchTbl')
    .addEventListener('mouseover', colorPixels);
}

//pixels button
document.getElementById('pixelBtn').addEventListener('click', function (event) {
  // const promptEntry = null;

  pixelNo = prompt(
    'Enter number of pixels in rows and columns with a max of 100.',
    ''
  );
  //prompt to enter pixels
  while (!(pixelNo <= 100 && pixelNo >= 1)) {
    pixelNo = prompt(
      'Important, enter number of pixels in rows and columns with a max of 100.',
      ''
    );
  }

  //removes the table nodes
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  removeAllChildNodes(sketchTbl);

  //creates new "pixels"/table cells
  createPixels();
});
