function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();
    img = loadImage("catsndogs.jpg");
}
function draw() {
    image(img, 0, 0, 500, 400);
    fill("#FF0000");
    strokeWeight(1)
    text("dog", 20, 30);
    textSize(15)
    noFill();
    stroke("#FF0000");
    strokeWeight(5)
    rect(10, 10, 300, 360);
}