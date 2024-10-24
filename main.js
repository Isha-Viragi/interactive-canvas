//Set up canvas
const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Set up context
const c = canvas.getContext("2d");

let x = 100;
let y = 100;
let dx = 5;
let dy = 5;
let radius = 30;

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.strokeStyle = "red";
  c.stroke();

  if (x >= window.innerWidth || x <= 0)
    dx *= -1;
  if (y >= window.innerHeight || y <= 0)
    dy *= -1;

  x += dx;
  y += dy;

}

animate();
