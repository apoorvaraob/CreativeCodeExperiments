
let perlin_sketch = function(perlin) {

  var t;
  perlin.setup = function(){
    perlin.createCanvas(800, 300);
    //perlin.createCanvas(perlin.displayWidth, perlin.displayHeight);
    perlin.stroke(0, 18);
    perlin.background('#87ceeb');
    perlin.frameRate(30);
    t = 0;
  }

  perlin.getPointX = function(t) {
    let  coordinate = perlin.width * perlin.noise(t + perlin.random(10));
    return coordinate;
  }

  perlin.getPointY = function(t) {
    let  coordinate = perlin.height * perlin.noise(t + perlin.random(10));
    return coordinate;
  }

  perlin.draw = function(){

    perlin.noStroke();
    cloudColor = perlin.color(255);
    cloudColor.setAlpha(128);
    perlin.fill(cloudColor);
    perlin.beginShape();
    perlin.vertex(perlin.getPointX(t), perlin.getPointY(t), 100);
    for(let i=0; i<5; i++) {
      perlin.bezierVertex(perlin.getPointX(t), perlin.getPointY(t), perlin.getPointX(t), perlin.getPointY(t), perlin.getPointX(t), perlin.getPointY(t));
    }
    perlin.endShape()

    perlin.filter(perlin.BLUR, 7);
  
    t += 0.017;

    // clear the background every 500 frames using mod (%) operator
    if (perlin.frameCount % 200 == 0) {
    perlin.background('#87ceeb');
    
    }
    }
  };

//new p5(perlin_sketch, 'perlin-noise');
