// Global decelerations. 
let gridItem = document.createElement("div");
gridItem.className = "grid-item";
document.getElementById("grid-container").appendChild(gridItem);

// Baseline grid
for (let i=1; i <256; i++) {
gridItem = document.createElement("div");
gridItem.className = "grid-item";
document.getElementById("grid-container").appendChild(gridItem);
}

// forEach used to make the event listener work on all divs. 
const grids = Array.from(document.getElementsByClassName('grid-item'));


// Reset button utilizing forEach. Need to create removeEventListeners?
const resetColor = () => {
    grids.forEach( grid => {
        grid.style.backgroundColor = "";
    });
    };
document.getElementById("clear").addEventListener("click",resetColor);

// Fxn for user input grid creation
const changeGridSize = document.getElementById("change-grid-size-button");
changeGridSize.addEventListener("click", function () {
    let userInput = prompt("Please enter a number for grid size between 1-100.")
    //  Creates a squared number to make divs in the for loop
    let numberOfDivs = Math.pow(userInput, 2);
    // Resets grid size
    document.getElementById("grid-container").innerHTML = "";
 
    for (let i = 0; i < numberOfDivs; i++) {
            let gridItem = document.createElement("div");
            gridItem.className = "grid-item";
             // Sizing
             document.getElementById("grid-container").style.setProperty("height", "800px");
             document.getElementById("grid-container").style.setProperty("width", "800px");
            // Div creation
            document.getElementById("grid-container").appendChild(gridItem);
            // Creating columns per new grid
            document.getElementById("grid-container").style.setProperty("grid-template-columns", `repeat(${userInput}, 2fr)`);
            // Creating row per new grid
            document.getElementById("grid-container").style.setProperty("grid-template-rows", `repeat(${userInput}, 2fr)`);
            
            //  Event listener for new grid
            let newGrids = Array.from(document.getElementsByClassName('grid-item'));
            newGrids.forEach(grid => {
              grid.addEventListener("mouseover", function (event){
                grid.style.backgroundColor = "black";
              })
            });
            //  Clear fxn for new grid
            let newResetColor = () => {
              newGrids.forEach( grid => {
                  grid.style.backgroundColor = "";
              });
              };
          document.getElementById("clear").addEventListener("click", newResetColor);
    }
});

//  Creates a random color but skips some divs..?
const randomColor = document.getElementById("random");
randomColor.addEventListener("click", function changeRandom ()  {
  const grids = Array.from(document.getElementsByClassName('grid-item'));
  grids.forEach(grid => {
    grid.addEventListener("mouseover", () => {
      let generateRandomColor = Math.floor(Math.random() * 16777215);
      grid.style.backgroundColor = "#" + generateRandomColor;
    })
  });
});

//  Creates a black div
const blackColor = document.getElementById("black");
blackColor.addEventListener("click", function changeBlack () {
  const grids = Array.from(document.getElementsByClassName('grid-item'));
  grids.forEach(grid => {
    grid.addEventListener("mouseover", function (event){
      grid.style.backgroundColor = "black"
    })
  });
});


 