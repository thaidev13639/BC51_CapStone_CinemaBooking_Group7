// var toggleBtn = document.getElementById("toggleBtn");
// var body = document.getElementById("body");
// toggleBtn.onclick = function () {
//     if (toggleBtn.className == "fa-regular fa-moon") {
//         toggleBtn.className = "fa-regular fa-sun";
//         body.className = "dark";
//       } else {
//         toggleBtn.className = "fa-regular fa-moon";
//         body.classList.remove("dark");
// }
// }
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").classList.add("bg-white");
 
    document.getElementById("dropDown").classList.remove("text-white");
    document.getElementById("logo").style.color = "black";
  } else {
    document.getElementById("header").classList.remove("bg-white");
    document.getElementById("dropDown").classList.add("text-white");
    document.getElementById("logo").style.color = "#fff";
  }
}