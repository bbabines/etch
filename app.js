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




// Variable to create an array works w/ fxn by using forEach for event listener
const grids = Array.from(document.getElementsByClassName('grid-item'));

grids.forEach(grid => {
  grid.addEventListener("mouseover", function (event){
    grid.style.backgroundColor = "black";
  })
});


// Reset button works.
const resetColor = () => {
    grids.forEach( grid => {
        grid.style.backgroundColor = "";
    });
    };
document.getElementById("clear").addEventListener("click",resetColor);

