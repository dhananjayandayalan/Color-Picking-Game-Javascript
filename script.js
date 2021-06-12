// Life's at Stake :(
// 💔💔💔
let life1 = document.getElementById('life-1');
let life2 = document.getElementById('life-2');
let life3 = document.getElementById('life-3');

let lifeCount = 3;

// Display

let redVal = document.getElementById('redValue');
let greenVal = document.getElementById('greenValue');
let blueVal = document.getElementById('blueValue');

// Box for random Options

let box1 = document.getElementById('box-1');
let box2 = document.getElementById('box-2');
let box3 = document.getElementById('box-3');
let box4 = document.getElementById('box-4');

// Status Text

let statusText = document.getElementById('status');
let start = false;

// Modal Text
let modalTitleText = document.getElementById('modal-title-text');
let modalTitleDesc = document.getElementById('modal-desc-text');
let modalBtnText = document.getElementById('modal-btn-type-text');

// Generate Color for 4 Boxes
let fourBoxColor = generateColors(4);
console.log(fourBoxColor);
let pickedColor = fourBoxColor[Math.floor(Math.random() * 4)];

let splitThePickedColor = pickedColor.replace("rgb", "").replace("(", "").replace(")", "");
let [redValue, greenValue, blueValue] = splitThePickedColor.split(",");
redValue = parseInt(redValue);
greenValue = parseInt(greenValue);
blueValue = parseInt(blueValue);
redVal.innerText = redValue;
greenVal.innerText = greenValue;
blueVal.innerText = blueValue;

setBoxColors();

box1.addEventListener('click', (e) => {
    e.preventDefault();
    compareColor(fourBoxColor[0]);
});
box2.addEventListener('click', (e) => {
    e.preventDefault();
    compareColor(fourBoxColor[1]);
});
box3.addEventListener('click', (e) => {
    e.preventDefault();
    compareColor(fourBoxColor[2]);
});
box4.addEventListener('click', (e) => {
    e.preventDefault();
    compareColor(fourBoxColor[3]);
});

function compareColor(color) {
    color = color.replace("rgb", "").replace("(", "").replace(")", "");
    let [rv, gv, bv] = color.split(",");
    rv = parseInt(rv);
    gv = parseInt(gv);
    bv = parseInt(bv);
    console.log(rv === redValue && gv === greenValue && bv === blueValue);
    if(rv == redValue && gv == greenValue && bv == blueValue) {
        won();
    } else {
        setLife();
        lifeCount -= 1;
        if(lifeCount === 0) {
            lost();
        }
    }
}

function setLife() {
    if(lifeCount === 3) {
        life3.innerText = '💔';
    } else if(lifeCount === 2) {
        life2.innerText = '💔';
    } else if(lifeCount === 1) {
        life1.innerText = '💔';
    }
}

function setBoxColors() {
    box1.style.background = fourBoxColor[0];
    box2.style.background = fourBoxColor[1];
    box3.style.background = fourBoxColor[2];
    box4.style.background = fourBoxColor[3];
}

function won() {
    modalTitleText.innerText = "You Won";
    modalTitleDesc.innerText = "Click the button to Play Again";
    modalBtnText.innerText = "Play Again";
    document.querySelector('.modalTrigger').click();
}

function lost() {
    modalTitleText.innerText = "You Lost";
    modalTitleDesc.innerText = "Click the button to Play Again";
    modalBtnText.innerText = "Play Again";
    document.querySelector('.modalTrigger').click();
}

function generateColors(num) {
    let arr = [];
    for(let i = 0 ; i < num ; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}