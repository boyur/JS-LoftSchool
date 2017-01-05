let object = {};
let input = document.getElementById('text');
let content = document.getElementById('container');
let p = new Promise(function (resolve) {
  let req = new XMLHttpRequest();
  req.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json', true);
  req.onload = function() {
    resolve(JSON.parse(req.response));
  };
  req.send();
});

p.then((obj) => {
  obj.sort(compareName);
  object = obj;
  console.log(obj);

  handelbarsInit(obj);

});

// Наша функция сравнения
function compareName(a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a должно быть равным b
  return 0;
}

// key
input.addEventListener("keyup", function () {
  let filtered = object.filter(filterObj);
  content.innerHTML = '';

  console.log(input.value);
  console.log(filtered);

  handelbarsInit(filtered);

});

function filterObj(obj) {
  if ('name' in obj && obj.name.substr(0, input.value.length) == input.value) {
    return true;
  }
}

function handelbarsInit(obj) {
  let newObj = {};
  newObj.obj = obj;

  let source   = document.querySelector("#entry-template").innerHTML;
  let template = Handlebars.compile(source);
  content.innerHTML = template(newObj);
}