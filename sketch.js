

const size = 480;
let numOfGrids = 16;
let colorState = "Black"
const container = document.querySelector("#container")

container.style.gridTemplateRows="repeat("+numOfGrids+", "+(size/numOfGrids)+"px)";
container.style.gridTemplateColumns="repeat("+numOfGrids+", "+(size/numOfGrids)+"px)";
loadGrids(numOfGrids)

function loadGrids(num){
    for(let i = 0; i<num*num;i++ ){
        var div = document.createElement("div");
        div.className = "grid";
        container.appendChild(div);
    }
}


grids = document.querySelectorAll(".grid");

function gridPaint(grids){
    grids.forEach((grid) => {
        grid.addEventListener('mouseover', () => {
            if(colorState=="RGB"){
                grid.style.backgroundColor = "#"+Math.floor(Math.random()*16777215).toString(16);
            }else if(colorState=="Black"){
                grid.style.backgroundColor = "black";
            }else if(colorState=="White"){
                grid.style.backgroundColor = "white";
            }
            
        });
      });
}
gridPaint(grids);

const clear = document.querySelector("#clear");
clear.addEventListener('click',() => {
    grids.forEach((grid) => {
        grid.style.backgroundColor = "white";
    })
  })

const erase = document.querySelector("#erase");
erase.addEventListener('click',() => {
      colorState = "White";
})

const RGB = document.querySelector("#RGB");
RGB.addEventListener('click',() => {
    colorState = "RGB";
})

const black = document.querySelector("#black");
black.addEventListener('click',() => {
    colorState = "Black";
})

let slider = document.querySelector("#pixel-slider");
slider.value = 1;
let sliderValue = document.querySelector("#value");
sliderValue.innerHTML = numOfGrids;

slider.oninput = function() {
    sliderValue.innerHTML = Math.round(this.value*(48/99)+(1584/99));
    grids.forEach((grid) => {
        container.removeChild(grid);
    })
    numOfGrids = Math.round(this.value*(48/99)+(1584/99));
    container.style.gridTemplateRows="repeat("+numOfGrids+", "+(size/numOfGrids)+"px)";
    container.style.gridTemplateColumns="repeat("+numOfGrids+", "+(size/numOfGrids)+"px)";
    console.log(numOfGrids);
    loadGrids(numOfGrids);
    grids = document.querySelectorAll(".grid");
    gridPaint(grids);
}