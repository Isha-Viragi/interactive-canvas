//Set up canvas
const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Set up context
const c = canvas.getContext("2d");



function animate() {
  requestAnimationFrame(animate);

  c.beginPath();
  c.arc(100, 100, 30, 0, Math.PI * 2, false);
  c.strokeStyle = "red";
  c.stroke();

}

animate();
