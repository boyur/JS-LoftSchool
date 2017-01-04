console.log(document.cookie);
let div = document.getElementsByTagName('body');
let cookies = document.cookie.split('; ');
let add = document.getElementById('add');
let form = document.getElementById('form');

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

add.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(`${form.elements['name'].value}`);
  console.log(`${form.elements['cookie'].value}`);
  console.log(`${form.elements['time'].value}`);

  let date = new Date;
  date.setDate(date.getDate() + form.elements['time'].value);
  alert( date.toUTCString() );

  document.cookie = `${form.elements['name'].value}=${form.elements['cookie'].value}; expires: ${date}`;
});