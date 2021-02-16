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

let link_3 = document.getElementById("main-form:x-3");
let link_2 = document.getElementById("main-form:x-2");
let link_1 = document.getElementById("main-form:x-1");
let link0 = document.getElementById("main-form:x0");
let link1 = document.getElementById("main-form:x1");
let link2 = document.getElementById("main-form:x2");
let link3 = document.getElementById("main-form:x3");
let link4 = document.getElementById("main-form:x4");
let link5 = document.getElementById("main-form:x5");
link_3.addEventListener("click", function (ev) {
    console.log("-3");
    document.getElementById("main-form:x").value = -3;
    setDefinedX(-3);
});
link_2.addEventListener("click", function (ev) {
    document.getElementById("main-form:x").value = -2;
    setDefinedX(-2);
});
link_1.addEventListener("click", function (ev) {
    document.getElementById("main-form:x").value = -1;
    setDefinedX(-1);
});
link0.addEventListener("click", function (ev) {
    document.getElementById("main-form:x").value = 0;
    setDefinedX(0);
});
link1.addEventListener("click", function (ev) {
    document.getElementById("main-form:x").value = 1;
    setDefinedX(1);
});
link2.addEventListener("click", function (ev) {
    document.getElementById("main-form:x").value = 2;
    setDefinedX(2);
});
link3.addEventListener("click", function (ev) {
    document.getElementById("main-form:x").value = 3;
    setDefinedX(3);
});
link4.addEventListener("click", function (ev) {
    document.getElementById("main-form:x").value = 4;
    setDefinedX(4);
    console.log()
});
link5.addEventListener("click", function (ev) {
    document.getElementById("main-form:x").value = 5;
    setDefinedX(5);
});

function setDefinedX(i) {
    link_3.style.color = 'white';
    link_2.style.color = 'white';
    link_1.style.color = 'white';
    link0.style.color = 'white';
    link1.style.color = 'white';
    link2.style.color = 'white';
    link3.style.color = 'white';
    link4.style.color = 'white';
    link5.style.color = 'white';
    switch (i) {
        case -3:
            link_3.style.color = 'lawngreen';
            break;
        case -2:
            link_2.style.color = 'lawngreen';
            break;
        case -1:
            link_1.style.color = 'lawngreen';
            break;
        case 0:
            link0.style.color = 'lawngreen';
            break;
        case 1:
            link1.style.color = 'lawngreen';
            break;
        case 2:
            link2.style.color = 'lawngreen';
            break;
        case 3:
            link3.style.color = 'lawngreen';
            break;
        case 4:
            link4.style.color = 'lawngreen';
            break;
        case 5:
            link5.style.color = 'lawngreen';
            break;
    }
    document.getElementById("warningX").innerText = '';

}


function handleRChange(event) {
    clearCanvas();
    radius = Number(event.target.value);
    drawRectangle();
    drawArea(radius);
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

function isPointInArea(x, y, r) {
    console.log(x, y, r);
    return ((x <= 0 && y <= 0 && x > -r && y > -r / 2 || (x >= 0 && y >= 0 && x + y <= r / 2) || (x >= 0 && y <= 0 && x ^ 2 + y ^ 2 <= (r / 2) ^ 2)));
}

function handleCanvasClick(event) {
    let obj = event.target;
    let x = Number(((event.pageX - window.pageXOffset - obj.getBoundingClientRect().x - obj.width / 2) / size).toFixed(2));
    let y = Number((-(event.pageY - window.pageYOffset - obj.getBoundingClientRect().y - obj.height / 2) / size).toFixed(2));
    console.log(x);
    console.log(y);
    if (x >= -3 && x <= 5 && y >= -3 && y <= 3) {
        xCanvas.value = x;
        yCanvas.value = y;
        checkCanvas();
    }
}



