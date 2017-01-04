let main = document.getElementById('main');
let btn = document.getElementById('btn');
let save = document.getElementById('save');
let del = document.getElementById('del');
let items = {length: 0};
let cookie = getCookie('items');

if (cookie) {
  items = JSON.parse(cookie);

  for (let key in items) {
    if (key == 'length') continue;

    let div = document.createElement('div');
    div.style.position = "fixed";

    div.style.height = items[key].height;
    div.style.width = items[key].width;

    div.style.top = items[key].top;
    div.style.left = items[key].left;

    div.style.background = items[key].background;

    div.setAttribute("id", key);

    main.appendChild(div);

    console.log("Создали элемент: ", key);
  }
}

btn.addEventListener("click", function () {

  items.length++;

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

  div.setAttribute("id", `div${items.length}`);

  main.appendChild(div);

  items[`div${items.length}`] = {
    height: div.style.height,
    width: div.style.width,
    top: div.style.top,
    left: div.style.left,
    background: div.style.background
  };
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

main.addEventListener("mouseup", function (e) {
  flag = false;
  targetItem = null;
  console.log(e.target.id);

  items[e.target.id]['top'] = e.target.style.top;
  items[e.target.id]['left'] = e.target.style.left;
});

save.addEventListener("click", function () {
  document.cookie = `items=${JSON.stringify(items)}`;
});

del.addEventListener("click", function () {
  document.cookie = `items=`;
  location.reload();
});

// возвращает cookie с именем name, если есть, если нет, то undefined
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}