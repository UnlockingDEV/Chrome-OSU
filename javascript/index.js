function myFunction() {
var x = document.getElementById("myTopnav");
if (x.className === "topnav") {
	x.className += " responsive";
} 
else {
		x.className = "topnav";
	}
}
document.querySelector(".topnav a.active").click();
document.querySelectorAll(".topnav a").forEach(function(link) {
  link.addEventListener("click", function(event) {
		event.preventDefault();
		document.querySelectorAll(".topnav a").forEach(function(link) {
		  link.classList.remove("active");
		});
		event.target.classList.add("active");
		document.querySelectorAll("div[id]").forEach(function(div) {
		  div.style.display = "none";
		});
		document.querySelector(event.target.getAttribute("href")).style.display = "block";
		});
});
console.log("Hello, welcome")
