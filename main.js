//Set up canvas
const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Set up context
const c = canvas.getContext("2d");

//Circle class
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = () => {
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "red";
    c.stroke();
  }

  this.update = () => {
    if (this.x + this.radius >= window.innerWidth || this.x - this.radius <= 0)
      this.dx *= -1;
    if (this.y + this.radius >= window.innerHeight || this.y - this.radius <= 0)
      this.dy *= -1;

    this.x += this.dx;
    this.y += this.dy;
  }
}

let x = Math.random() * window.innerWidth;
let y = Math.random() * window.innerHeight;
let dx = (Math.random() - 0.5) * 8;
let dy = (Math.random() - 0.5) * 8;
let radius = 30;

function animate() {
  requestAnimationFrame(animate);

}

animate();
