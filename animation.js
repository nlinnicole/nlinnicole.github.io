function setup() {
    var bar = document.getElementById("bar-home");
    var width = bar.offsetWidth;
    var myCanvas = createCanvas(width, 15)
    myCanvas.parent("bar-home");
    background(0);
    frameRate(3);
    // noLoop();
}

function draw() {
    var col_01 = color(166, 162, 189);
    var col_02 = color(211, 206, 216);
    var col_03 = color(222, 213, 232);
    var col_04 = color(138, 126, 153);
    var col_05 = color(128, 123, 147);

    var colArr = [col_01, col_02, col_03, col_04, col_05];

    for (var i = 0; i < width; i++) {
        var colRand = random(colArr);
        var widthRand = random(10)
        stroke(colRand);
        strokeWeight(widthRand);
        line(i, 0, i, height);

    }
}
