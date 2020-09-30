// The Nature of Code
// Daniel Shiffman
// Modified by Apoorva B - varied the value of the rotation angle of the branches slightly making it tilt to one side 
// and adjusted the length of the branches on one side so that they aren't perfectly symmetrical.

// http://natureofcode.com

// Recursive Tree
// Renders a simple tree-like structure via recursion

let parsley_sketch = function(p) {
let theta;

p.preload = function(){
}

p.setup = function(){
  //p.createCanvas(p.displayWidth, p.displayHeight);
  p.createCanvas(800,500)
  p.frameRate(10);
}

p.draw = function(){
  //background('#654321'); // brown
  p.background('#87ceeb '); // sky blue
  
  // Convert it to an animation
  theta = p.map(p.random(p.width/3),0,p.width,0,p.PI/2);

  // Start the tree from the bottom of the screen
  p.translate(p.width/2, p.height);
  p.stroke('#155E18');
  p.branch(120);
}

p.branch = function(len) {
  // Each branch will be 2/3rds the size of the previous one

  //float sw = map(len,2,120,1,10);
  //strokeWeight(sw);
  p.strokeWeight(2);
      
  p.line(0, 0, 0, -len);
  // Move to the end of that line
  p.translate(0, -len);

  len *= 0.67;
  // All recursive functions must have an exit condition!!!!
  // Here, ours is when the length of the branch is 2 pixels or less
  if (len > 2) {
    p.push();    // Save the current state of transformation (i.e. where are we now)
    p.rotate(theta + p.random(0.2));   // Rotate by theta, add noise
    p.branch(len * 1 + len * p.random(0.3));       // Ok, now call myself to draw two new branches!! change the length
    p.pop();     // Whenever we get back here, we "pop" in order to restore the previous matrix state

    // Repeat the same thing, only branch off to the "left" this time!
    p.push();
    p.rotate(-theta - p.random(0.3)); // add noise
    p.branch(len * 1.01); // change length
    p.pop();
    
  }
}
};

//new p5(parsley_sketch, 'parsley');