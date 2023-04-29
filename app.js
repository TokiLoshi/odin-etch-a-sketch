// Get container Element to pust stuff in
const getContainer = document.querySelector('.container');

// Create Sketch Button to trigger sketching
const sketchButton = document.createElement('button');
sketchButton.classList = 'sketchButton'
sketchButton.textContent = "Start Sketching";
sketchButton.setAttribute('style', 'border: solid 1px white; padding: 10px; margin: 10px; border-radius: 5px;');
getContainer.append(sketchButton);

// Add default lo load
const defaultSize = 16;

// Add EventListener to the SketchPad
sketchButton.addEventListener('click', () => {
  createSketchPad(defaultSize)
});

// Create new canvas based on user input
function generateNewCanvas(size){
  console.log(`We're in the generate New canvas function and we have a ${size}`);
  const sketchPad = document.querySelector('.sketchpad');
  
  // Remove current sketch area
  if (sketchPad) {
    sketchPad.remove()
  }
  // get max size of dimensions 
  const getDimensions = 960 / size;
  console.log(`Dimensions: ${getDimensions}`)
  const newSketch = document.createElement('div');
  newSketch.classList = 'sketchpad';
  newSketch.setAttribute('style', 'color: white; border: solid 1px black;');
  getContainer.appendChild(newSketch);

  // iterate to create new dimension
  let idNumber = 0;
  for (i=1; i <= size; i++){
    for (j=1; j <= size; j++){
      let square = document.createElement('div');
      square.textContent = i;
      square.classList = "square";
      square.setAttribute('style', `width: ${getDimensions}px; height: ${getDimensions};px`);
      square.setAttribute('id', idNumber);
      newSketch.append(square);
      idNumber++;
    }
  }
  const drawPixels = document.querySelectorAll('.square')
  drawPixels.forEach((drawPixel) => {
    drawPixel.addEventListener('mouseover', () => {
      drawPixel.style.background = 'green';
    })
  })
  
}

// Create initial sketchpad 
function createSketchPad() {
const sketchPad = document.createElement('div');
sketchPad.classList = 'sketchpad';
// sketchPad.textContent = 'Sketching';
sketchPad.setAttribute('style', 'color: white; border: solid 1px black;');
getContainer.appendChild(sketchPad);
sketchButton.remove()

// In sketchbox create 16x 60px wide and high squares
let idNumber = 0;
for (i=1; i <= 16; i++){
  for (j=1; j <=16; j++){
  let square = document.createElement('div');
  square.textContent = i;
  square.classList = "square";
  square.setAttribute('style', 'width:60px; height: 60px;');
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
    }
    generateNewCanvas(getSize);
  }
})

// Add button to allow user to erase
const eraser = document.createElement('button');
eraser.textContent = "Erase";
eraser.classList = 'sketchButton';

sketchPad.appendChild(eraser);

eraser.addEventListener('click', () => {
  const erasePixels = document.querySelectorAll('.square');
  erasePixels.forEach((erasePixel) => {
    erasePixel.addEventListener('mouseover', () => {
      erasePixel.style.background = 'blue';
    })
  })
});

const keepDrawing = document.createElement('button');
keepDrawing.textContent = "Sketch";
keepDrawing.classList = "sketchButton";
sketchPad.append(keepDrawing);

keepDrawing.addEventListener('click', () => {
  const drawPixels = document.querySelectorAll('.square');
  drawPixels.forEach((drawPixel) => {
    drawPixel.addEventListener('mouseover', () => {
      drawPixel.style.background = 'purple';
    })
  })
})


};

// Create button for different colours 
// Create rendom colour
// Erase background