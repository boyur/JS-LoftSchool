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

let targetItem = {};
let targetOffset = {};
let flag = false;

main.addEventListener("mousedown", function (e) {

  if (e.target.tagName == "BODY") {
    return;
  }

  flag = true;

  targetItem = e.target;

  console.log(targetItem);

  targetOffset.x = e.clientX - e.target.style.left.replace(/[^-0-9]/gim,'');
  targetOffset.y = e.clientY - e.target.style.top.replace(/[^-0-9]/gim,'');

  console.log(`x: ${e.target.style.top}; y:${e.target.style.left}`);
  console.log(targetOffset);
});

main.addEventListener("mousemove", function (e) {
  if (!flag) {
    return;
  }

  console.log(targetItem);

  targetItem.style.top = e.clientY - targetOffset.y + "px";
  targetItem.style.left = e.clientX - targetOffset.x + "px";
  console.log(e.clientX);
  console.log(targetOffset.x);
  console.log(e.target.style.top);
});

main.addEventListener("mouseup", function () {
  flag = false;
  targetItem = null;
});