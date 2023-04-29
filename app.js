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
console.log(`Size: ${size}`);
const squareWidth = 960 / size;
console.log(`SquareWidth: ${squareWidth}`)

const sketchPad = document.createElement('div');
sketchPad.classList = 'sketchpad';
// sketchPad.textContent = 'Sketching';
sketchPad.setAttribute('style', 'color: white; border: solid 1px black;');
getContainer.appendChild(sketchPad);
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
    newPixel.style.background = 'purple';
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
eraser.textContent = "Erase";
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
keepDrawing.textContent = "Sketch";
keepDrawing.classList = "sketchButton";
sketchPad.append(keepDrawing);

// Change background on hover 
keepDrawing.addEventListener('click', () => {
  const drawPixels = document.querySelectorAll('.square');
  drawPixels.forEach((drawPixel) => {
    drawPixel.addEventListener('mouseover', () => {
      drawPixel.style.background = 'purple';
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
rainbows.textContent = "Go Rainbow";
rainbows.classList = "sketchButton";
sketchPad.append(rainbows);

// 
rainbows.addEventListener('click', () => {
  let counter = 0
  const rainbowPixels = document.querySelectorAll('.square');
  rainbowPixels.forEach((rainbowPixel) => {
    rainbowPixel.addEventListener('mouseover', () => {

      console.log(`Counter at beginning; ${counter}`)
      let redVar = `${Math.floor(Math.random() * 255)}`;
      console.log(`Red Var: ${redVar}`)
      let greenVar = `${Math.floor(Math.random() * 255)}`;
      console.log(`Green Var: ${greenVar}`)
      let blueVar = `${Math.floor(Math.random() * 255)}`;
      
      
      if (parseInt(redVar) <= 255){
      rainbowPixel.style.background = `rgb(${redVar}, ${greenVar}, ${blueVar})`;
    }
      
      // For each pass of the mouse the pixels should get darker
      if (parseInt(redVar) <= 255){
        console.log("Red var is less")
        redVar = `${parseInt(redVar) + 10}`;
        console.log(`New Red Var: ${redVar}`)
      }
      counter++;
      console.log(`Counter at the end ${counter}`);
      // if (greenVar <= 255){
      //   greenVar += 10;
      // }
      // if (blueVar <= 255){
      //   blueVar += 10;
      // }
    })
  })
})


};

// Create button for different colours 
// Create rendom colour
// Erase background