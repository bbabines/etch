// Global decelerations.
let gridItem = document.createElement("div");
gridItem.className = "grid-item";
document.getElementById("grid-container").appendChild(gridItem);



// Baseline grid
for (let i=1; i <256; i++) {
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

// Fxn for user input grid creation
const changeGridSize = document.getElementById("change-grid-size-button");
changeGridSize.addEventListener("click", function () {
    let userInput = prompt("Please enter a number for grid size between 1-100.")

    let numberOfDivs = Math.pow(userInput, 2);

    // Resets grid size
    document.getElementById("grid-container").innerHTML = "";
    
    // Number of columns not correct
    // Event listener DOES NOT WORK on NEW divs
    for (let i = 0; i < numberOfDivs; i++) {
            let gridItem = document.createElement("div");
            gridItem.className = "grid-item";
            
            document.getElementById("grid-container").appendChild(gridItem);
            // This MAY work if grid can be reset instead of adding divs
            document.getElementById("grid-container").style.setProperty("grid-template-columns", userInput);
            
        
    }
});

