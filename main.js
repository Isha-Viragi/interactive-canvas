//Set up canvas
const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Set up context
const c = canvas.getContext("2d");

const mouse = {
  x: undefined,
  y: undefined
}
const maxRadius = 50;
const minRadius = 3;
const totalCircles = 500;
//Array of colors
const colorArray = [
  "#581845",
  "#900C3F",
  "#C70039",
  "#FF5733",
  "#FFC300",
  "#fff5d3",
]

//Event Listener
window.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
})

//Circle class
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = () => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  }

  this.update = () => {
    this.draw();
    //Interactivity
    if ((this.x > mouse.x - 30 && this.x < mouse.x + 30) &&
      (this.y > mouse.y - 30 && this.y < mouse.y + 30)) {
      if (this.radius < maxRadius)
        this.radius++;
    }

    else if (this.radius > radius) {
      this.radius--;
    }


    //Animate
    if (this.x + this.radius >= window.innerWidth || this.x - this.radius <= 0)
      this.dx *= -1;
    if (this.y + this.radius >= window.innerHeight || this.y - this.radius <= 0)
      this.dy *= -1;

    this.x += this.dx;
    this.y += this.dy;
  }
}

//Create array of circles
const circleArray = [];

for (let i = 0; i < totalCircles; i++) {
  let radius = minRadius;
  let x = Math.random() * (window.innerWidth - radius * 2) + radius;
  let y = Math.random() * (window.innerHeight - radius * 2) + radius;
  let dx = (Math.random() - 0.5) * 2;
  let dy = (Math.random() - 0.5) * 2;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update()
  }
}

animate();
