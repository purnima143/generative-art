export default function sketch(p) {
  // Padding around the canvas.
  let padding = 15;

  // Number of squares per row/column
  let row = 12;

  // Size of grid cells (cellSize x cellSize).
  let cellSize = 50;
  let gridSize = cellSize * row + padding * 2;

  // Probability of drawing an inner rectangle.
  let chance = 0.6;

  // Gap between squares
  let gap = 10;

  // Extent the square can shift from center
  let shiftLimit = 1;

  let shades = ["#FEDC97", "#B5B682", "#28666E", "#7C9885"];

  p.setup = function () {
    p.createCanvas(gridSize, gridSize);
    p.rectMode(p.CENTER);
    p.angleMode(p.DEGREES);
    p.strokeWeight(3);
    //noLoop()
    p.frameRate(2);
  };

  p.draw = function () {
    p.background(255);
    for (let y = padding; y < p.height - 2 * padding; y += cellSize) {
      for (let x = padding; x < p.width - 2 * padding; x += cellSize) {
        drawCell(x + cellSize / 2, y + cellSize / 2);
      }
    }
  };

  function drawCell(x, y) {
    p.push();
    p.translate(x, y);
    p.fill(shades[0]);
    p.noStroke();
    p.rect(0, 0, cellSize, cellSize);
    p.stroke(0);
    if (p.random() > 0.5) {
      p.arc(-cellSize / 2, -cellSize / 2, cellSize, cellSize, 0, 90);
      p.arc(cellSize / 2, cellSize / 2, cellSize, cellSize, 180, 270);
    } else {
      p.arc(cellSize / 2, -cellSize / 2, cellSize, cellSize, 90, 180);
      p.arc(-cellSize / 2, cellSize / 2, cellSize, cellSize, 270, 0);
    }
    p.pop();
  }
}
