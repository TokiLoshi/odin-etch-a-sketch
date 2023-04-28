// Get container Element to pust stuff in
const getContainer = document.querySelector('.container');

// Create Sketch Button to trigger sketching
const sketchButton = document.createElement('button');
sketchButton.classList = 'sketchButton'
sketchButton.textContent = "Start Sketching";
sketchButton.setAttribute('style', 'border: solid 1px white; padding: 10px; margin: 10px; border-radius: 5px;');
getContainer.append(sketchButton);

sketchButton.addEventListener('click', () => {
  createSketchPad()
});

function createSketchPad() {
const sketchPad = document.createElement('div');
sketchPad.classList = 'sketchpad';
// sketchPad.textContent = 'Sketching';
sketchPad.setAttribute('style', 'color: white; border: solid 1px black;');
getContainer.append(sketchPad);
// In sketchbox create 16x 60px wide and high squares
let idNumber = 0;
for (i=1; i <= 16; i++){
  for (j=1; j <=16; j++){
  let square = document.createElement('div');
  square.textContent = "_";
  square.classList = "square";
  square.setAttribute('style', 'border: 1px solid black; width:58px;');
  square.setAttribute('id', idNumber);
  sketchPad.append(square);
  console.log(`Appended square: ${i}`)
  // for (j=i -1; j <=16; j++){
  //   let verticalSquare = document.createElement('div');
  //   verticalSquare.textContent = j;
  //   verticalSquare.setAttribute('style', 'border: 1px solid black');
  //   square.appendChild(verticalSquare);

  //   console.log(`On loop of j: ${j}`)
  idNumber++;
  }
  // let newLine = document.createElement('p');
  // sketchPad.append(newLine);
  
}


const newPixels = document.querySelectorAll('.square')
newPixels.forEach((newPixel) => {
  newPixel.addEventListener('mouseover', () => {
    newPixel.style.background = 'purple';
  })
})


};