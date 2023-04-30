// Get container Element to put stuff in
const getContainer = document.querySelector('.container');

// Create Sketch Button to trigger sketching
const sketchButton = document.createElement('button');
sketchButton.classList = 'sketchButton'
sketchButton.textContent = "Start Sketching";
sketchButton.setAttribute('style', 'border: solid 1px white; padding: 10px; margin: 10px; border-radius: 5px;');
getContainer.append(sketchButton);

// Add default number of squares 
const defaultSize = 16;

// Add EventListener to the SketchPad
sketchButton.addEventListener('click', () => {
  createSketchPad(defaultSize)
});


// Create initial sketchpad 
function createSketchPad(size) {
const sketchPad = document.createElement('div');
sketchPad.classList = 'sketchpad';
console.log(`Size: ${size}`);

// sketchPad.textContent = 'Sketching';
sketchPad.setAttribute('style', 'color: white; border: solid 1px white;');
getContainer.appendChild(sketchPad);
const getContainerWidth = sketchPad.offsetWidth;
console.log(`Container width: ${getContainerWidth}`)
const squareWidth = (getContainerWidth - 2) / size;
console.log(`SquareWidth: ${squareWidth}`)
sketchButton.remove()

// In sketchbox create 16x 60px wide and high squares
let idNumber = 0;
for (i=1; i <= size; i++){
  for (j=1; j <= size; j++){
  let square = document.createElement('div');
  square.textContent = " ";
  square.classList = "square";
  // square.setAttribute('style', 'width:60px; height: 60px;');
  square.setAttribute('style', `width:${squareWidth}px; height:${squareWidth}px;`);
  square.setAttribute('id', idNumber);
  sketchPad.append(square);
  idNumber++;
  }
  
}
// Change background of pixels when mouse over by user 
const newPixels = document.querySelectorAll('.square')
newPixels.forEach((newPixel) => {
  newPixel.addEventListener('mouseover', () => {
    newPixel.style.background = `rgb(141, 8, 207)`;
  })
});

// Add Button to allow user to prompt a new size 
const editBox = document.createElement('div');
editBox.classList = 'tools';
getContainer.append(editBox);

const changeCanvas = document.createElement('button');
changeCanvas.textContent = "Change Sketch Size";
changeCanvas.classList = 'sketchButton';
editBox.appendChild(changeCanvas);

// Add new Event to generate new canvas
changeCanvas.addEventListener('click', () => {
  getSize = prompt("How many squares would you like? (Max 100)")

  if (isNaN(getSize)){
    alert("Please enter a number")
  }
  else if(parseInt(getSize) > 100 || parseInt(getSize) <= 0){
    alert("Please choose a number between 1 and 100")

  }
  else {
    if (sketchPad){
      sketchPad.remove()
      changeCanvas.remove()
    }
    console.log(`New Size: ${getSize}`);
    createSketchPad(getSize);
  }
})

// Add button to allow user to erase
const eraser = document.createElement('button');
// eraser.textContent = "Erase";
eraser.innerHTML = `<i class="fa-solid fa-eraser" style="color: #ffffff;"></i>`
eraser.classList = 'sketchButton';
sketchPad.appendChild(eraser);

// Reset content back to original color
eraser.addEventListener('click', () => {
  const erasePixels = document.querySelectorAll('.square');
  erasePixels.forEach((erasePixel) => {
    erasePixel.addEventListener('mouseover', () => {
      erasePixel.style.background = 'white';
    })
  })
});

// Create button to let user "keep drawing"
const keepDrawing = document.createElement('button');
// keepDrawing.textContent = "Sketch";
keepDrawing.innerHTML = `<i class="fa-solid fa-paintbrush" style="color: #ffffff;"></i>`;
keepDrawing.classList = "sketchButton";
sketchPad.append(keepDrawing);

// Change background on hover 
keepDrawing.addEventListener('click', () => {
  const drawPixels = document.querySelectorAll('.square');
  drawPixels.forEach((drawPixel) => {
    drawPixel.addEventListener('mouseover', () => {
      drawPixel.style.background = `rgb(141, 8, 207)`;
    })
  })
})

// Create button to clear the space
const clearAll = document.createElement('button');
clearAll.textContent = "Clear";
clearAll.classList = "sketchButton";
sketchPad.append(clearAll);

clearAll.addEventListener('click', () => {
  const clearPixels = document.querySelectorAll('.square');
  clearPixels.forEach((clearPixel) => {
    clearPixel.style.background = 'white';
  })
  })

// Add random colors
const rainbows = document.createElement('button');
// rainbows.textContent = "Go Rainbow";
rainbows.innerHTML = `<i class="fa-solid fa-palette" style="color: #ffffff;"></i>`;
rainbows.classList = "sketchButton";
sketchPad.append(rainbows);

// 
// console.log(`Counter at beginning; ${counter}`)
      // let redVar = `${Math.floor(Math.random() * 255)}`;
      // console.log(`Red Var: ${redVar}`)
      // let greenVar = `${Math.floor(Math.random() * 255)}`;
      // console.log(`Green Var: ${greenVar}`)
      // let blueVar = `${Math.floor(Math.random() * 255)}`;

rainbows.addEventListener('click', () => {
  const rainbowPixels = document.querySelectorAll('.square');
  rainbowPixels.forEach((rainbowPixel) => {
    console.log(`background in for Pixel id: ${rainbowPixel.id} is ${rainbowPixel.style.background}`)
    rainbowPixel.addEventListener('mouseover', () => {
      console.log(`**** MOUSE OVER OCCURED **** on ${rainbowPixel.id}`)
      // For each pass of the mouse the pixels should get darker
      let redVar = `${Math.floor(Math.random() * 255)}`;
      let greenVar = `${Math.floor(Math.random() * 255)}`;
      let blueVar = `${Math.floor(Math.random() * 255)}`;

      if (rainbowPixel.style.background !== `rgb(141, 8, 207)`) {
        
        console.log(`Pixel ${rainbowPixel.id} has been colored in and is ${rainbowPixel.style.background}`)
      }
      else if (rainbowPixel.style.background !== `white`){
        console.log(`In else if statement `)
        console.log(`Pixel ${rainbowPixel.id} is not white`)
        console.log(`Old red var: ${redVar}`)
        rainbowPixel.style.background = `rgb(${parseInt(redVar) + 10}, ${greenVar}, ${blueVar})`;
        console.log(`New red var: ${redVar}`)
      }
      else {
      console.log(`In else statement`)

      // let redVar = `${Math.floor(Math.random() * 255)}`;
      // let greenVar = `${Math.floor(Math.random() * 255)}`;
      // let blueVar = `${Math.floor(Math.random() * 255)}`;

      console.log(`Background of pixel ${rainbowPixel.id} after math line 166: ${rainbowPixel.style.background}`)
      rainbowPixel.id.setAttribute('class', 'set')
      rainbowPixel.style.background = `rgb(${redVar}, ${greenVar}, ${blueVar})`;

      console.log(`Background of pixel after setting in line 168: ${rainbowPixel.style.background}`)
    }

    console.log(`The background color of the pixel is: ${rainbowPixel.style.background}`)
      
      
    
    })
  })
})


};

// Create button for different colours 
// Create rendom colour
// Erase background