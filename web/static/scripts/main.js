let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let size = Math.min(canvas.width, canvas.height) / 10 - 2;
let radius = 1;

let xCanvas = document.getElementById("canvas-form:xCanvas");
let yCanvas = document.getElementById("canvas-form:yCanvas");
let counter;
let table = document.getElementById("table-form:result-table").childNodes[3];
drawRectangle();
drawArea(radius);
drawAxis();
drawResize();

function handleRChange(event) {
    this.radius=Number(event.target.value);
    clearCanvas();
    drawRectangle();
    drawArea(this.radius);
    drawAxis();
    setTimeout(() => drawResize(), 10);
}

function handleSubmit() {
    clearCanvas();
    drawRectangle();
    drawArea(radius);
    drawAxis();
    drawResize();
}
function handleSubmitButton1() {
    clearCanvas();
    drawRectangle();
    drawArea(Number(1));
    drawAxis();
    drawResize();
}
function handleSubmitButton2() {
    clearCanvas();
    drawRectangle();
    drawArea(Number(2));
    drawAxis();
    drawResize();
}
function handleSubmitButton3() {
    clearCanvas();
    drawRectangle();
    drawArea(Number(3));
    drawAxis();
    drawResize();
}
function handleSubmitButton4() {
    clearCanvas();
    drawRectangle();
    drawArea(Number(4));
    drawAxis();
    drawResize();
}
function handleSubmitButton5() {
    clearCanvas();
    drawRectangle();
    drawArea(Number(5));
    drawAxis();
    drawResize();
}

function isPointInArea(x, y, r) {
    console.log(x, y, r);
    return ((x >= 0 && y >= 0 && r >= Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))) || (x <= 0 && x >= -r*1/2 && y <= 0 && y >= -r && y >= -2*x - r) || ( x <= r && x >= 0 && y >= -r/2 && y <= 0));
}

function handleCanvasClick(event) {
    let obj = event.target;
    let x = Number(((event.pageX - window.pageXOffset - obj.getBoundingClientRect().x - obj.width / 2) / size).toFixed(2));
    let y = Number((-(event.pageY - window.pageYOffset - obj.getBoundingClientRect().y - obj.height / 2) / size).toFixed(2));
    console.log(x);
    console.log(y);
    if (x >= -4 && x <= 4 && y >= -3 && y <= 3) {
        xCanvas.value = x;
        yCanvas.value = y;
        checkCanvas();
    }
}



