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
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "red";
    c.stroke();
  }

  this.update = () => {
    this.draw();
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

for (let i = 0; i < 200; i++) {
  let radius = 30;
  let x = Math.random() * (window.innerWidth - radius * 2) + radius;
  let y = Math.random() * (window.innerHeight - radius * 2) + radius;
  let dx = (Math.random() - 0.5) * 2;
  let dy = (Math.random() - 0.5) * 2;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

// console.log(circleArray)

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update()

  }

}

animate();
