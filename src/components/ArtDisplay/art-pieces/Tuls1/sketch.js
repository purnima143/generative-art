export default function sketch(p) {
  // Padding around the canvas.
  let padding = 35;

  // Number of squares per row/column
  let row = 8;

  // Size of grid cells (cellSize x cellSize).
  let cellSize = 80;
  let gridSize = cellSize * row + padding * 2;

  // Probability of drawing an inner rectangle.
  let chance = 0.6;

  // Gap between squares
  let gap = 10;

  // Extent the square can shift from center
  let shiftLimit = 1;

  let shades = [
    "#FEDC97",
    "#B5B682",
    "#28666E",
    "#7C9885",
    "#bfb9ba",
    "#0059b2",
    "#197fe5",
  ];

  p.setup = function () {
    p.createCanvas(gridSize, gridSize);
    p.rectMode(p.CORNER);
    p.angleMode(p.DEGREES);
    p.strokeWeight(12);
    p.noLoop();
    p.frameRate(2);
  };

  p.draw = function () {
    p.background(shades[2]);
    for (let y = padding; y < p.height - 2 * padding; y += cellSize) {
      for (let x = padding; x < p.width - 2 * padding; x += cellSize) {
        drawCell(x + cellSize / 2, y + cellSize / 2);
      }
    }
  };

  function drawCell(x, y) {
    p.push();
    p.translate(x, y);
    p.fill("white");
    p.noStroke();
    p.rectMode(p.CENTER);
    //rect(0, 0, cellSize, cellSize)
    p.stroke(shades[1]);
    let v1, v2, v3, v4;

    // Top side
    if (p.random() > 0.5) {
      v1 = 0;
    } else {
      v1 = cellSize / 2;
    }

    // Right side
    if (p.random() > 0.5) {
      v2 = 0;
    } else {
      v2 = cellSize / 2;
    }

    // Bottom side
    if (p.random() > 0.5) {
      v3 = 0;
    } else {
      v3 = -cellSize / 2;
    }

    // Left side
    if (p.random() > 0.5) {
      v4 = 0;
    } else {
      v4 = -cellSize / 2;
    }

    p.line(0, 0, v1, -cellSize / 2);
    p.line(0, 0, cellSize / 2, v2);
    p.line(0, 0, v3, cellSize / 2);
    p.line(0, 0, -cellSize / 2, v4);

    p.pop();
  }
}
