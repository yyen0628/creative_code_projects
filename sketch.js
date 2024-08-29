//var s = random(10, 20);
let x = map(mouseX, 0, 600, 0, 255);
let y = map(mouseY, 0, 600, 0, 255);

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    ellipse(mouseX, mouseY, 20, 20);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}

function mousePressed() {
    // createCanvas(windowWidth, windowHeight);
    // background(x, 0, y);

    let r = random(100, 255);
    let g = random(50, 200);
    let b = random(150, 200);
    let s = random(10, 50);

    ellipse(mouseX, mouseY, s, s);
    fill(r, g, b);

    background(r+20, g+50, b+10);

}