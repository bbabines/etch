// Global decelerations.
let gridItem = document.createElement("div");
gridItem.className = "grid-item";
// document.getElementById("grid-container").appendChild(gridItem);



//  Create a function to create a div's based on a input?
for (let i=0; i <256; i++) {
let gridItem = document.createElement("div");
gridItem.className = "grid-item";
document.getElementById("grid-container").appendChild(gridItem);
}

// forEach used to make the event listener work on all divs.
const grids = Array.from(document.getElementsByClassName('grid-item'));
grids.forEach(grid => {
  grid.addEventListener("mouseover", function (event){
    grid.style.backgroundColor = "black";
  })
});

// Reset button utilizing forEach.
const resetColor = () => {
    grids.forEach( grid => {
        grid.style.backgroundColor = "";
    });
    };
document.getElementById("clear").addEventListener("click",resetColor);

// Working on user input and fxn for box size.
// const changeGridSize = document.getElementById("change-grid-size");
// changeGridSize.addEventListener("click", function (input) {
//     let input = userInput;
//     let userInput = prompt("Please enter a number for grid size between 1-100.")

// });