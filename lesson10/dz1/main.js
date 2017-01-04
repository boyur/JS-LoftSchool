console.log(document.cookie);
let div = document.getElementsByTagName('body');
let cookies = document.cookie.split('; ');

cookies.map(function (value) {
  console.log(div);

  let add = document.createElement('div');
  let del = document.createElement('button');
  del.textContent = "Удалить";
  del.setAttribute('data-del', `${value.split('=')[0]}`);
  add.textContent += value;
  add.appendChild(del);

  div[0].appendChild(add);
});

div[0].addEventListener("click", function (e) {
  if (e.target.tagName != 'BUTTON') return false;
  let atr = e.target.attributes.getNamedItem('data-del');

  console.log(atr.value);
  document.cookie = `${atr.value}=; expires: -1`;
});