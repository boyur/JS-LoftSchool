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

  obj.map(function (item) {
    let div = document.createElement('div');
    div.textContent = item.name;
    content.appendChild(div);
    return item.name;
  });
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

  filtered.map(function (item) {
    let div = document.createElement('div');
    div.textContent = item.name;
    content.appendChild(div);
    return item.name;
  });
});

function filterObj(obj) {
  if ('name' in obj && obj.name.substr(0, input.value.length) == input.value) {
    return true;
  }
}