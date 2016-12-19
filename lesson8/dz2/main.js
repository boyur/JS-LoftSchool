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
  console.log(obj);
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