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
// const changeColor = () => {
// document.getElementById("grid-item").style.backgroundColor = "black";
// };
// document.getElementById("grid-item").addEventListener("mousedown", changeColor);


// // Works as intended.
// const resetColor = () => {
//     document.getElementById("grid-item").style.backgroundColor = "";
//     };
// // Works as intended.
// document.getElementById("clear").addEventListener("click",resetColor);



const grids = Array.from(document.getElementsByClassName('lol'));

grids.forEach(grid => {
  grid.addEventListener("mouseover", function (event){
      grid.setAttribute('style', 'background-color: black;');
  })
});

// class test. Change fxn and Event listener.
// const changeColor = () => {
//     grids.style.backgroundColor = "black";
//     };
//     grids.addEventListener("mousedown", changeColor)


// class test. CLEAR fxn
const resetColor = () => {
    grids.forEach( grid => {
        grid.style.backgroundColor = "";
    });
    };
document.getElementById("clear").addEventListener("click",resetColor);

