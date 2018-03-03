var cells = [];

function setup() {
  createCanvas(1200, 800)
  cells.push(new Cell())
}

function draw() {
  background(500);
  for (var i = 0; i < cells.length; i++) {
    cells[i].move();
    cells[i].show();
  };
};

function mousePressed() {
  for (var i = 0; i < cells.length; i++) {
    if (cells[i].clicked(mouseX, mouseY)) {
      cells.push(cells[i].mitosis());
      cells.push(cells[i].mitosis());
    }
  }
}
