//html elements
const room = document.querySelector('.layout-grid');
const origBed = document.getElementById('bed');
const origDesk  = document.getElementById('desk');
const origDresser = document.getElementById('dresser');
const origFridge  = document.getElementById('fridge');
const origMicrowave = document.getElementById('microwave');
const origRug = document.getElementById('rug');
const origPlant = document.getElementById('plant');
const rotateTool = document.querySelector('.rotate-tool');
const generateTool = document.querySelector('.generate-tool');
const undoTool = document.querySelector('.undo-tool');

let furniture = ['bed', 'desk', 'dresser', 'fridge', 'microwave', 'rug', 'plant'];
let mode;
let cursorX;
let cursorY;

let deskCount = 3;
let bedCount = 2;
let dresserCount = 1;
let fridgeCount = 2;

var tool = "generate";

class Item {
    constructor(className){
        this.rotation = 0;
        this.class = className;
        this.element = document.createElement('li');

        this.element.classList.add(className, 'model');

        room.appendChild(this.element);

        setClickPosition(this.element);
        dragElement(this.element);

    }   
}

document.onmousedown = function(e) {
    cursorX = e.pageX;
    cursorY = e.pageY;
}

origFridge.addEventListener('click', () => {
    mode = furniture[3];
    origFridge.style.border = "3px solid blue";
    origDesk.style.border = "none";
    origDresser.style.border = "none";
    origBed.style.border = "none";
    origMicrowave.style.border = "none";
    origRug.style.border= "none";
    origPlant.style.border = "none";
});

origDresser.addEventListener('click', () => {
    mode = furniture[2];
    origDresser.style.border = "3px solid blue";
    origDesk.style.border = "none";
    origBed.style.border = "none";
    origFridge.style.border = "none";
    origMicrowave.style.border = "none";
    origRug.style.border= "none";
    origPlant.style.border = "none";

});

origDesk.addEventListener('click', () => {
    mode = furniture[1];
    origDesk.style.border = "3px solid blue";
    origDresser.style.border = "none";
    origBed.style.border = "none";
    origFridge.style.border = "none";
    origMicrowave.style.border = "none";
    origRug.style.border= "none";
    origPlant.style.border = "none";

});

origBed.addEventListener('click', () => {
    mode = furniture[0];
    origBed.style.border = "3px solid blue";
    origDesk.style.border = "none";
    origDresser.style.border = "none";
    origFridge.style.border = "none";
    origMicrowave.style.border = "none";
    origRug.style.border= "none";
    origPlant.style.border = "none";
});
origMicrowave.addEventListener('click', () => {
    mode = furniture[4];
    origMicrowave.style.border = "3px solid blue";
    origDesk.style.border = "none";
    origDresser.style.border = "none";
    origFridge.style.border = "none";
    origBed.style.border = "none";
    origRug.style.border= "none";
    origPlant.style.border = "none";
});

origRug.addEventListener('click', () => {
    mode = furniture[5];
    origRug.style.border = "3px solid blue";
    origDesk.style.border = "none";
    origDresser.style.border = "none";
    origFridge.style.border = "none";
    origBed.style.border = "none";
    origMicrowave.style.border = "none";
    origPlant.style.border = "none";
});

origPlant.addEventListener('click', () => {
    mode = furniture[6];
    origPlant.style.border = "3px solid blue";
    origDesk.style.border = "none";
    origDresser.style.border = "none";
    origFridge.style.border = "none";
    origBed.style.border = "none";
    origMicrowave.style.border = "none";
    origRug.style.border = "none";
});



//GENERATE TOOL
generateTool.addEventListener('click', () => {
    generateTool.style.border = "2px solid red";
    rotateTool.style.border = "none";
    tool = "generate";
});


//ROTATE TOOL
rotateTool.addEventListener('click', () => {
    rotateTool.style.border = "2px solid red";
    generateTool.style.border = "none";
    tool = "rotate";
});

//UNDO TOOL
undoTool.addEventListener('click', () => {
    undo();
});

//INSERT ITEM
room.addEventListener('dblclick', () => {

    if(tool == "generate"){
        switch(mode) {
            case furniture[0]:
                //bed
                generateFurniture(furniture[0]);
                break;
            case furniture[1]:
                //desk
                generateFurniture(furniture[1]); 
                break;
            case furniture[2]:
                //dresser
                generateFurniture(furniture[2]);
                break;
            case furniture[3]:
                //fridge
                generateFurniture(furniture[3]);
                break;
            case furniture[4]:
                //microwave
                generateFurniture(furniture[4]);
                break;
            case furniture[5]:
                //rug
                generateFurniture(furniture[5]);
                break;
            case furniture[6]:
                //plant
                generateFurniture(furniture[6]);
                break;
        }

    }
});

//GENERATE FURNITURE FUNCTION
function generateFurniture(type) {
    let newItem = new Item(type);

    newItem.element.addEventListener('dblclick', () => {
        if(tool == "rotate") {
            newItem.rotation += 270;
        newItem.element.style.transform = `rotate(${newItem.rotation}deg)`;
        }
    });
}

//COORDINATES INSIDE BOX
function setClickPosition(object) {
    var xPosition = cursorX - (object.clientWidth / 2);
    var yPosition = cursorY - (object.clientHeight / 2);
     

    object.style.left = xPosition + "px";
    object.style.top = yPosition + "px";
}


//DRAG FUNCTION
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

//END DRAG CODE

//UNDO FUNCTION

function undo() {
    var lastChild = room.lastChild;
    room.removeChild(lastChild);
}