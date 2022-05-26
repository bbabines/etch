// Global decelerations.
let gridItem = document.createElement("div");
gridItem.id = "grid-item";
// document.getElementById("grid-container").appendChild(gridItem);

//  Create a function to create a div's based on a input?
for (let i=0; i <256; i++) {
// let gridItem = document.createElement("div");
// gridItem.id = "grid-item";
document.getElementById("grid-container").appendChild(gridItem);

}



// Works as intended. 
const changeColor = () => {
document.getElementById("grid-item").style.backgroundColor = "black";
};
document.getElementById("grid-item").addEventListener("mousedown", changeColor);


// Works as intended.
const resetColor = () => {
    document.getElementById("grid-item").style.backgroundColor = "";
    };
// Works as intended.
document.getElementById("clear").addEventListener("click",resetColor);

