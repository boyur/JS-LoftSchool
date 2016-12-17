let main = document.getElementById('main');
let btn = document.getElementById('btn');

btn.addEventListener("click", function () {
  let div = document.createElement('div');
  div.style.position = "fixed";

  let myWidth = document.body.clientWidth;
  let myHeight = document.body.clientHeight;

  div.style.height = Math.floor(Math.random() * 300) + "px";
  div.style.width = Math.floor(Math.random() * 300) + "px";

  div.style.top = Math.floor(Math.random() * (myWidth - 300)) + "px";
  div.style.left = Math.floor(Math.random() * (myHeight - 300)) + "px";

  // Color
  let r=Math.floor(Math.random() * (256));
  let g=Math.floor(Math.random() * (256));
  let b=Math.floor(Math.random() * (256));

  div.style.background = `rgb(${r}, ${g}, ${b})`;

  main.appendChild(div);
});

// main.addEventListener("click", function (e) {
//   console.log(`x: ${e.clientX}; y:${e.clientY}`);
// });

main.addEventListener("mousedown", function (e) {
  console.log(`x: ${e.target.style.top}; y:${e.target.style.left}`);
});