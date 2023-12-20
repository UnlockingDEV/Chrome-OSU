var container = document.querySelector('.container');
var cube = document.querySelector('.cube');

container.addEventListener('mousemove', function(e) {
  var x = e.clientX / window.innerWidth;
  var y = e.clientY / window.innerHeight;
  
  cube.style.transform = 'rotateX(' + (y * 20) + 'deg) rotateY(' + (x * 20) + 'deg)';
});

var observer = new IntersectionObserver(function(entries) {
  if (entries[0].isIntersecting === false) {
    cube.style.left = '-50px';
    cube.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
  }
});

observer.observe(container);
