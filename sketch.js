function setup() {
    createCanvas(windowWidth/2, windowHeight/2);
}

function draw() {
    strokeWeight(50);
    if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }


}