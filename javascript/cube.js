const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(draw);
}

setInterval(function() {}, 1000 / 60);
requestAnimationFrame(draw);
