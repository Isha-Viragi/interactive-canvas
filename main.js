//Set up canvas
const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Set up context
const c = canvas.getContext("2d");

//Drawing practice
//Rectangle
c.fillStyle = "pink"
c.fillRect(100, 100, 140, 100);

//Line
c.beginPath(); //New line
c.moveTo(300, 100); //Initial point
c.lineTo(400, 200); //Next point
c.lineTo(400, 300); //Next point
c.lineTo(600, 300); //Next point
c.strokeStyle = "green"
c.stroke(); //Fill line in

//Circle
c.beginPath(); //New line
c.arc(500, 150, 30, 0, Math.PI * 2, false); //Create circle
c.strokeStyle = "red"
c.stroke(); //Fill line in
c.fillStyle = "lightyellow"
c.fill();
