//Set up canvas
const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Set up context
const c = canvas.getContext("2d");

let x = 100;
let y = 100;


function animate() {
  requestAnimationFrame(animate);

  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.strokeStyle = "red";
  c.stroke();

  x++;
  y++;

}

animate();
