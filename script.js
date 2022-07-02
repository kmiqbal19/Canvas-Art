"use strict";
const canvas = document.getElementById("canvas-1");
const c = canvas.getContext("2d");
// canvas settings
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
c.fillStyle = "green";
c.strokeStyle = "yellow";
c.lineWidth = 10;
c.lineCap = "round";
// Effect Settings
c.save();
c.translate(canvas.width / 2, canvas.height / 2);
c.scale(1, 1);
c.rotate(0);

// Rect
// c.fillRect(0, 0, canvas.width, canvas.height);
let sides = 5;
let size = 200;
let scale = 0.7;
let maxLevel = 3;
let spread = 0.5;
let branches = 2;
// Recursion for drawing
function drawBranch(level) {
  if (level > maxLevel) return;
  c.beginPath();
  c.moveTo(0, 0);
  c.lineTo(size, 0);
  c.stroke();
  for (let i = 0; i < branches; i++) {
    c.save();
    c.translate(size - (size / branches) * i, 0);
    c.rotate(spread);
    c.scale(scale, scale);
    drawBranch(level + 1);
    c.restore();

    c.save();
    c.translate(size - (size / branches) * i, 0);
    c.rotate(-spread);
    c.scale(scale, scale);
    drawBranch(level + 1);
    c.restore();
  }
}
drawBranch(0);
c.restore();
