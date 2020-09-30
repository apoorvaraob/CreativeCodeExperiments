
let perlin_sketch = function(perlin) {

  var t;
  perlin.setup = function(){
    perlin.createCanvas(800, 300);
    //perlin.createCanvas(perlin.displayWidth, perlin.displayHeight);
    perlin.stroke(0, 18);
    perlin.background('#87ceeb');
    t = 0;
  }

  perlin.draw = function(){
    var x1 = perlin.width * perlin.noise(t + 15);
    var x2 = perlin.width * perlin.noise(t + 25);
    var x3 = perlin.width * perlin.noise(t + 35);
    var x4 = perlin.width * perlin.noise(t + 45);
    var y1 = perlin.height * perlin.noise(t + 55);
    var y2 = perlin.height * perlin.noise(t + 65);
    var y3 = perlin.height * perlin.noise(t + 75);
    var y4 = perlin.height * perlin.noise(t + 85);

    perlin.bezier(x1, y1, x2, y2, x3, y3, x4, y4);

    t += 0.010;

    // clear the background every 500 frames using mod (%) operator
    if (perlin.frameCount % 500 == 0) {
    perlin.background('#87ceeb');
    }
  }
};

//new p5(perlin_sketch, 'perlin-noise');
