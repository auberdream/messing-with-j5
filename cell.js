function Cell(position = createVector(random(width), random(height)),
              radius = 80,
              colour = color(random(0,255), random(0,255), random(0,255))) {
  this.pos = position;
  this.r = radius;
  this.c = colour;

  this.clicked = function(x, y) {
    var d = dist(this.pos.x, this.pos.y, x, y)
    if (d < this.r) {
      return true
    } else {
      return false
    }
  }

  this.mitosis = function() {
    cell = new Cell(this.pos, this.r*0.8, this.c)
    return cell
  }

  this.move = function() {
    var velocity = p5.Vector.random2D();
    this.pos.add(velocity);
  }

  this.show = function() {
    noStroke();
    fill(this.c)
    ellipse(this.pos.x, this.pos.y, this.r, this.r)
  }
}
